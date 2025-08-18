"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import AdminItemContainer from '@/app/components/AdminItemContainer/AdminItemContainer';
import { generateDimentions } from '@/lib/generateDimentions';

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
                         
                     </div>
                     <AdminItemContainer>
                          <Label className='pl-3 font-bold border-b border-[#ddd] p-2 text-md text-black' main>Banner Section</Label>
                          <div className='p-5'>
                                                       <div>
                     <Label className=''>Banner Image</Label>
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
                        <p className='text-xs text-gray-500'>{generateDimentions("services", "banner")}</p>
                     </div>
                        {errors.banner && (
                            <p className="text-red-500">{errors.banner.message}</p>
                        )}
                    
                    <div>
                        <Label className=''>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("bannerAlt")} />
                    </div>
                    <div>
                        <Label className=''>Page Title</Label>
                        <Input type='text' placeholder='Page Title' {...register("pageTitle")} />
                    </div>
                    </div>
                    </AdminItemContainer>
                </div>

                <div>
                <AdminItemContainer>
              <Label main>Services</Label>
                                                  
                       <div className='p-5'>          
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("services.title", {
                                required: "Title is required"
                            })} />
                            {errors.services?.title && <p className='text-red-500'>{errors.services?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className=''>Description</Label>
                            <Textarea placeholder='Description' {...register("services.description")} />
                        </div>
                    </div>

                            <div>
                    <Label className=''>Items</Label>
                <div className='border border-[#ddd] p-2 rounded-md flex flex-col gap-5'>


                    {fields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-[#ddd] pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Image</Label>
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
                                    <p className='text-xs text-gray-500'>{generateDimentions("services", "itemImage")}</p>
                                    {errors.services?.items?.[index]?.logo && <p className='text-red-500'>{errors.services?.items?.[index]?.logo.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`services.items.${index}.logoAlt`)} />
                                </div>

                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`services.items.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.services?.items?.[index]?.title && <p className='text-red-500'>{errors.services?.items?.[index]?.title.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Description</Label>
                                    <Textarea placeholder='Description' {...register(`services.items.${index}.description`)} />
                                </div>
                            </div>
                                

                            </div>
                            <div>
                            <div className='flex flex-col gap-2'>
                                    <Label className=''>Logo</Label>
                                    <Controller
                                        name={`services.items.${index}.logo`}
                                        control={control}
                                        rules={{ required: "Logo is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                                isLogo
                                            />
                                        )}
                                    />
                                    <p className='text-xs text-gray-500'>{generateDimentions("services", "itemLogo")}</p>
                                    {errors.services?.items?.[index]?.logo && <p className='text-red-500'>{errors.services?.items?.[index]?.logo.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`services.items.${index}.logoAlt`)} />
                                </div>
                                </div>

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' className="cursor-pointer text-white" addItem onClick={() => append({ title: "", logo: "", logoAlt: "", description: "", image: "", imageAlt: "" })}>Add Item</Button>
                    </div>
                </div>
                </div>


                </AdminItemContainer>
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
                    <Button type='submit' className='w-full text-white cursor-pointer'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default ServicesPage