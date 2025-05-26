"use client";
import React, { useState } from 'react'
import Image from 'next/image'

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

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted!", formData);
      // Submit form logic here
    }
  };

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className='py-[50px] md:py-[70px] lg:pt-[107px] lg:pb-[121px]'>
        <div className='container flex flex-col gap-14'>
            <h2 className='text-50 text-site-blue uppercase font-medium'>We’d love to hear from you.</h2>
             <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-14">
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-19 text-gray">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300 outline-none border-b text-black"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-19 text-gray">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-300 outline-none border-b text-black"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-19 text-gray">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300 outline-none border-b text-black"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-19 text-gray">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-[150px] border-gray-300 outline-none border-b appearance-none text-black resize-none"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <div>
          <button type="submit" className="cursor-pointer bg-primary text-white px-6 py-2 flex items-center gap-3 rounded-lg">
            SUBMIT
            <div className="rounded-full bg-white flex items-center justify-center px-3 py-2">
              <Image src="/assets/img/contact/arrow.svg" alt="arrow" width={30} height={30} className="object-cover w-full h-full" />
            </div>
          </button>
        </div>
      </div>
    </form>
        </div>
    </div>
  )
}

export default Form