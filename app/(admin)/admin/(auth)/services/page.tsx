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
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    services: {
        title: string;
        description: string;
        items: {
            title: string;
            logo: string;
            logoAlt: string;
            description: string;
            image: string;
            imageAlt: string;
        }[];
    };
}

const ServicesPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<SystemFormProps>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "services.items"
    });

    const handleAddCommitment = async (data: SystemFormProps) => {
        try {
            const response = await fetch(`/api/admin/services`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding services", error);
        }
    }

    const fetchServicesData = async () => {
        try {
            const response = await fetch(`/api/admin/services`);
            if (response.ok) {
                const data = await response.json();

                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("services", data.data.services);
                setValue("services.items", data.data.services.items);
                setValue("pageTitle", data.data.pageTitle);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching services data", error);
        }
    }



    useEffect(() => {
        fetchServicesData();
    }, []);


    return (
        <div className='flex flex-col gap-5 adminstyle'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddCommitment)}>


                <div className='flex flex-col '>
                    <div> 
                        
                     <Label className='pl-3 font-bold    p-2 py-0 text-md'>Banner Section</Label>
                     </div>
                     <div className='border border-[#ddd] p-2 rounded-md flex flex-col gap-5 mt-1'>
                     <div>
                     <Label className='pl-3 font-bold'>Banner Image</Label>
                        <Controller
                            name="banner"
                            control={control}
                            rules={{ required: "Banner is required" }}
                            render={({ field }) => (
                                <ImageUploader
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                     </div>
                        {errors.banner && (
                            <p className="text-red-500">{errors.banner.message}</p>
                        )}
                    
                    <div>
                        <Label className='pl-3 font-bold'>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("bannerAlt")} />
                    </div>
                    <div>
                        <Label className='pl-3 font-bold'>Page Title</Label>
                        <Input type='text' placeholder='Page Title' {...register("pageTitle")} />
                    </div>
                    </div>
                </div>

                <div>
                <Label className='pl-3 font-bold    p-2 py-0 text-md'>Services</Label>
                <div className='border border-[#ddd] p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("services.title", {
                                required: "Title is required"
                            })} />
                            {errors.services?.title && <p className='text-red-500'>{errors.services?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("services.description")} />
                        </div>
                    </div>

                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className='border border-[#ddd] p-2 rounded-md flex flex-col gap-5'>


                    {fields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border border-[#ddd] p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`services.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.services?.items?.[index]?.logo && <p className='text-red-500'>{errors.services?.items?.[index]?.logo.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`services.items.${index}.logoAlt`)} />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Logo</Label>
                                    <Controller
                                        name={`services.items.${index}.logo`}
                                        control={control}
                                        rules={{ required: "Logo is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.services?.items?.[index]?.logo && <p className='text-red-500'>{errors.services?.items?.[index]?.logo.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`services.items.${index}.logoAlt`)} />
                                </div>

                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`services.items.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.services?.items?.[index]?.title && <p className='text-red-500'>{errors.services?.items?.[index]?.title.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Description</Label>
                                    <Textarea placeholder='Description' {...register(`services.items.${index}.description`)} />
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer text-white" onClick={() => append({ title: "", logo: "", logoAlt: "", description: "", image: "", imageAlt: "" })}>Add Item</Button>
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
                    <Button type='submit' className='text-white'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default ServicesPage