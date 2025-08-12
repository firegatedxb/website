"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpsec } from '@/public/frameranimation/animation';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'; 
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema } from "@/app/schemas/contactForm"
import { z } from "zod";
// import ReCAPTCHA from "react-google-recaptcha";

type ContactFormProps = z.infer<typeof contactFormSchema>

const Form = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset, 
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      type: "",
      //  captcha: "",
    },
  })

  const onSubmit = async (data:ContactFormProps) => {
    try {
      const response = await fetch(`/api/admin/enquiry`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        reset();
        // router.push("/admin/commitment");
      }
    } catch (error) {
      console.log("Error in contact form", error);
    }
  }


  
  const departments = [
    { id: '', name: 'Select Department', disabled: true },
    { id: 'type1', name: 'Design' },
    { id: 'type2', name: 'Accounts/Finance' },
    { id: 'type3', name: 'Careers/HR' },
    { id: 'type4', name: 'Sales/Enquiries' },
    { id: 'type5', name: 'Complaints' },
  ];

  return (
    <div className="py-[50px] md:py-[70px] 2xl:pt-[107px] 2xl:pb-[121px]">
      <div className="container flex flex-col gap-14">
         <motion.div variants={fadeInUpsec}
                            initial="hidden"
                            whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-50 text-site-blue uppercase font-medium mb-8 lg:mb-[74px]">
          We’d love to hear from you.
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-19 text-gray capitalize">
                    name
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    
                    className="border-gray-300 outline-none border-b text-black text-sm"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col">
                <label htmlFor="phone" className="text-19 text-gray capitalize">
                  phone
                </label>
                <input
                  type="text"
                  {...register("phone")}
                  
                  className="border-gray-300 outline-none border-b text-black text-sm"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex flex-col">
              <label htmlFor="email" className="text-19 text-gray capitalize">
                email
              </label>
              <input
                type="text"
                {...register("email")}
                
                className="border-gray-300 outline-none border-b text-black text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            </div>
            <div className="flex flex-col">
      <label className="text-19 text-gray capitalize">Department</label>
      <div className="w-full">
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, value } }) => {
            const selected = departments.find((dept) => dept.name === value) || { id: "", name: "Select Department" }

            return (
              <Listbox value={selected} onChange={(val) => onChange(val.name)}>
                <div className="relative">
                  <Listbox.Button
                    className={`relative w-full cursor-pointer border-b border-gray-300 bg-transparent py-2 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  ${
                      selected.id === ""
                        ? "text-black text-sm"
                        : "text-gray-800 text-base"
                    }`}
                  >
                    <span>{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {departments.map((dept) => (
                      <Listbox.Option
                        key={dept.id}
                        value={dept}
                        disabled={dept.disabled}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                            dept.disabled
                              ? "text-gray-400 cursor-not-allowed"
                              : active
                              ? "bg-primary text-white"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {dept.name}
                            </span>
                            {selected && (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <CheckIcon className="h-5 w-5 text-white" />
                              </span>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            )
          }}
        />
        {errors.type && (
  <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
)}
      </div>
    </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-19 text-gray">
                Message
              </label>
              <textarea
                {...register("message")}
                
                className="h-[150px] text-sm border-gray-300 outline-none border-b appearance-none text-black resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
{/* <div>
              <Controller
  name="captcha"
  control={control}
  render={({ field }) => (
    <ReCAPTCHA
      sitekey=""
      onChange={(value) => field.onChange(value || "")}
    />
  )}
/>


              {errors.captcha && (
                <p className="text-red-500 text-sm">{errors.captcha.message}</p>
              )}
            </div> */}
            <div>
              <button
                type="submit"
                className="cursor-pointer bg-primary text-white px-6 py-2 flex items-center gap-3 rounded-lg group"
              >
                SUBMIT
                <div className="rounded-full bg-white flex items-center justify-center px-3 py-2 transition-transform duration-300 group-hover:translate-x-1">
                  <Image
                    src="/assets/img/contact/arrow.svg"
                    alt="arrow"
                    width={30}
                    height={30}
                    className="object-cover w-full h-full"
                  />
                </div>
              </button>
            </div>
          </div>
          </form>
          </motion.div>
      </div>
    </div>
  );
};

export default Form;
