"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpsec } from '@/public/frameranimation/animation';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = () => {
    const newErrors: {
      name?: string;
      phone?: string;
      email?: string;
      message?: string;
    } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 7-15 digits.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Dynamic error clearing
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "name" && value.trim()) {
        delete newErrors.name;
      }

      if (name === "phone") {
        if (value.trim() && /^\d{7,15}$/.test(value)) {
          delete newErrors.phone;
        }
      }

      if (name === "email") {
        if (value.trim() && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          delete newErrors.email;
        }
      }

      if (name === "message" && value.trim()) {
        delete newErrors.message;
      }

      return newErrors;
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate()) {
      // console.log("Form submitted!", formData);
    }
  };

  return (
    <div className="py-[50px] md:py-[70px] lg:pt-[107px] lg:pb-[121px]">
      <div className="container flex flex-col gap-14">
         <motion.div variants={fadeInUpsec}
                            initial="hidden"
                            whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-50 text-site-blue uppercase font-medium mb-8 lg:mb-[74px]">
          We’d love to hear from you.
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-14">
            <div className="grid grid-cols-3 gap-5">
              {["name", "phone", "email"].map((field) => (
                <div key={field} className="flex flex-col">
                  <label htmlFor={field} className="text-19 text-gray capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className="border-gray-300 outline-none border-b text-black"
                  />
                  {errors[field as keyof typeof errors] && (
                    <p className="text-red-500 text-sm">{errors[field as keyof typeof errors]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-19 text-gray">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[150px] border-gray-300 outline-none border-b appearance-none text-black resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer bg-primary text-white px-6 py-2 flex items-center gap-3 rounded-lg"
              >
                SUBMIT
                <div className="rounded-full bg-white flex items-center justify-center px-3 py-2">
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
