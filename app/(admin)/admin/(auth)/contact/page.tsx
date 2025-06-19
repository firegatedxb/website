"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'

interface SystemFormProps {

    metaTitle: string;
    metaDescription: string;
    image: string;
    imageAlt: string;
    pageTitle: string;
    contacts: {
        title: string;
        address: string;
        phone: string;
        email: string;
        buttonLink: string;
    }[];
    socials: {
        title: string;
        link: string;
    }[];
}

const ContactPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<SystemFormProps>();

    const { fields:contactFields, append:contactAppend, remove:contactRemove } = useFieldArray({
        control,
        name: "contacts"
    });

    const { fields: socialsFields, append: socialsAppend, remove: socialsRemove } = useFieldArray({
        control,
        name: "socials"
    });


    const handleAddContact = async (data: SystemFormProps) => {
        try {
            const response = await fetch(`/api/admin/contact`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding commitment", error);
        }
    }

    const fetchContactData = async () => {
        try {
            const response = await fetch(`/api/admin/contact`);
            if (response.ok) {
                const data = await response.json();

                setValue("image", data.data.image);
                setValue("imageAlt", data.data.imageAlt);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("pageTitle", data.data.pageTitle);
                setValue("contacts", data.data.contacts);
                setValue("socials", data.data.socials);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching commitment data", error);
        }
    }



    useEffect(() => {
        fetchContactData();
    }, []);


    return (
        <div className='flex flex-col gap-5 adminstyle'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddContact)}>

            <div>
                <div><label data-slot="label" className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-bold p-2 py-0 text-md">
                Banner Section</label></div>
                <div className=' border border-[#ddd] p-2 rounded-md flex flex-col gap-2'>
                    <div>
                        <Label className="pl-3 font-bold">Image</Label>
                        <Controller
                            name="image"
                            control={control}
                            rules={{ required: "Image is required" }}
                            render={({ field }) => (
                                <ImageUploader
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        {errors.image && (
                            <p className="text-red-500">{errors.image.message}</p>
                        )}
                    </div>
                    <div>
                        <Label className='pl-3 font-bold'>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("imageAlt")} />
                    </div>
                    <div>
                        <Label className='pl-3 font-bold'>Page Title</Label>
                        <Input type='text' placeholder='Page Title' {...register("pageTitle")} />
                    </div>
                </div>
            </div>
            <div className="border border-[#ddd] p-2 rounded-md flex flex-col gap-2">
                <Label className='pl-3 font-bold border-b border-[#ddd] p-2 text-md'>Contacts</Label>
                <div className='border border-[#ddd] p-2 rounded-md flex flex-col gap-2'>

                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className=' flex flex-col gap-5'>


                    {contactFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border border-[#ddd] p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => contactRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`contacts.${index}.title`)} />
                                    {errors.contacts?.[index]?.title && <p className='text-red-500'>{errors.contacts?.[index]?.title.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Address</Label>
                                    <Textarea {...register(`contacts.${index}.address`)} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Phone</Label>
                                    <Input type='text' placeholder='Phone' {...register(`contacts.${index}.phone`)} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Email</Label>
                                    <Input type='text' placeholder='Email' {...register(`contacts.${index}.email`)} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Button Link</Label>
                                        <Input type='text' placeholder='Button Link' {...register(`contacts.${index}.buttonLink`)} />
                                    </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full text-white cursor-pointer" onClick={() => contactAppend({ title: "", address: "", phone: "", email: "", buttonLink: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>


                </div>
                </div>


                <div className="border border-[#ddd] p-2 rounded-md flex flex-col gap-2">
             <Label className='pl-3 font-bold border-b border-[#ddd] p-2 text-md'>Socials</Label>
                <div className='border border-[#ddd] p-2 rounded-md flex flex-col gap-2'>

                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className=' flex flex-col gap-5'>


                    {socialsFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border border-[#ddd] p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => socialsRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`socials.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.socials?.[index]?.title && <p className='text-red-500'>{errors.socials?.[index]?.title.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Link</Label>
                                    <Input type='text' placeholder='Link' {...register(`socials.${index}.link`, {
                                        required: "Link is required"
                                    })} />
                                    {errors.socials?.[index]?.link && <p className='text-red-500'>{errors.socials?.[index]?.link.message}</p>}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full text-white cursor-pointer" onClick={() => socialsAppend({ title: "", link: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>


                </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex justify-center'>
                    <Button type='submit' className='text-white cursor-pointer'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default ContactPage