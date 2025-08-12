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

    firstSectionItems: {
        title: string;
        logo: string;
        logoAlt: string;
    }[];
    secondSectionItems: {
        title: string;
        logo: string;
        logoAlt: string;
        description: string;
    }[];
    thirdSectionItems: {
        title: string;
        image: string;
        imageAlt: string;
        description: string;
    }[];
    firstSection: {
        title: string;
        description: string;
        image:string;
        imageAlt:string;
    };
    secondSection: {
        title: string;
        description: string;
    };
    thirdSection: {
        title: string;
        description: string;
    };
}

const CommitmentPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<SystemFormProps>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "firstSectionItems"
    });

    const { fields: secondSectionFields, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
        control,
        name: "secondSectionItems"
    });

    const { fields: thirdSectionFields, append: thirdSectionAppend, remove: thirdSectionRemove } = useFieldArray({
        control,
        name: "thirdSectionItems"
    });

    const handleAddCommitment = async (data: SystemFormProps) => {
        try {
            const response = await fetch(`/api/admin/commitment`, {
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

    const fetchCommitmentData = async () => {
        try {
            const response = await fetch(`/api/admin/commitment`);
            if (response.ok) {
                const data = await response.json();

                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
                setValue("secondSection", data.data.secondSection);
                setValue("thirdSection", data.data.thirdSection);
                setValue("firstSectionItems", data.data.firstSection.items);
                setValue("secondSectionItems", data.data.secondSection.items);
                setValue("thirdSectionItems", data.data.thirdSection.items);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching commitment data", error);
        }
    }



    useEffect(() => {
        fetchCommitmentData();
    }, []);


    return (
        <div className='flex flex-col gap-5 adminstyle'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddCommitment)}>

           <div>
            
            <AdminItemContainer>
            <Label className='pl-3 font-bold border-b border-[#ddd] p-2 text-md text-black' main>Banner Section</Label>
                <div className='flex flex-col gap-2 p-5'>
                    <div>
                        <Label className="">Banner</Label>
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
                        <p className='text-xs text-gray-500'>{generateDimentions("commitment", "banner")}</p>
                        {errors.banner && (
                            <p className="text-red-500">{errors.banner.message}</p>
                        )}
                    </div>
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

                <AdminItemContainer>
                    <Label className='pl-3 font-bold border-b border-[#ddd] p-2 text-md text-black' main>First Section</Label>
                    <div className='   flex flex-col gap-2 p-5'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=''>Title</Label>
                                <Input type='text' placeholder='Title' {...register("firstSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.firstSection?.title && <p className='text-red-500'>{errors.firstSection?.title.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=''>Description</Label>
                                <Textarea placeholder='Description' {...register("firstSection.description")} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=''>Image</Label>
                                <Controller
                                    name="firstSection.image"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                <p className='text-xs text-gray-500'>{generateDimentions("commitment", "cover")}</p>
                                {errors.firstSection?.image && <p className='text-red-500'>{errors.firstSection?.image.message}</p>}
                            </div>
                            </div>
                            <div className=' flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=''>Image Alt</Label>
                                <Input type='text' placeholder='Image Alt' {...register("firstSection.imageAlt")} />
                            </div>
                        </div>

                                <div>
                        <Label className=''>Items</Label>
                    <div className='border border-[#ddd] p-2  rounded-md flex flex-col gap-5'>


                        {fields.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-[#ddd] pb-5 last:border-b-0'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className=''>Logo</Label>
                                        <Controller
                                            name={`firstSectionItems.${index}.logo`}
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
                                        <p className='text-xs text-gray-500'>{generateDimentions("commitment", "logo")}</p>
                                        {errors.firstSectionItems?.[index]?.logo && <p className='text-red-500'>{errors.firstSectionItems?.[index]?.logo.message}</p>}
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Label className=''>Alt Tag</Label>
                                        <Input type='text' placeholder='Alt Tag' {...register(`firstSectionItems.${index}.logoAlt`)} />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className=''>Title</Label>
                                        <Input type='text' placeholder='Title' {...register(`firstSectionItems.${index}.title`, {
                                            required: "Title is required"
                                        })} />
                                        {errors.firstSectionItems?.[index]?.title && <p className='text-red-500'>{errors.firstSectionItems?.[index]?.title.message}</p>}
                                    </div>
                                </div>

                            </div>
                        ))}

                        

                    </div>
                    <div className='flex justify-end mt-2'>
                            <Button type='button' className="text-white cursor-pointer" addItem onClick={() => append({ title: "", logo: "", logoAlt: "" })}>Add Item</Button>
                        </div>
                    </div>


                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                <Label className='pl-3 font-bold border-b border-[#ddd] p-2 text-md text-black' main>Second Section</Label>
                <div className='  flex flex-col gap-2 p-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className=''>Description</Label>
                            <Textarea placeholder='Description' {...register("secondSection.description")} />
                        </div>
                    </div>

                            <div>
                    <Label className=''>Items</Label>
                <div className='border border-[#ddd] p-2  rounded-md flex flex-col gap-5'>


                    {secondSectionFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-[#ddd] pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => secondSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Logo</Label>
                                    <Controller
                                        name={`secondSectionItems.${index}.logo`}
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
                                    <p className='text-xs text-gray-500'>{generateDimentions("commitment", "logo")}</p>
                                    {errors.secondSectionItems?.[index]?.logo && <p className='text-red-500'>{errors.secondSectionItems?.[index]?.logo.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`secondSectionItems.${index}.logoAlt`)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`secondSectionItems.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.secondSectionItems?.[index]?.title && <p className='text-red-500'>{errors.secondSectionItems?.[index]?.title.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Description</Label>
                                    <Textarea placeholder='Description' {...register(`secondSectionItems.${index}.description`)} />
                                </div>
                            </div>

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' className="text-white cursor-pointer" addItem onClick={() => secondSectionAppend({ title: "", logo: "", logoAlt: "", description: "" })}>Add Item</Button>
                    </div>
                </div>


                </div>
                </AdminItemContainer>


                <AdminItemContainer>
                <Label className='pl-3 font-bold border-b border-[#ddd] p-2 text-md text-black' main>Third Section</Label>
                <div className=' flex flex-col gap-2 p-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("thirdSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.thirdSection?.title && <p className='text-red-500'>{errors.thirdSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className=''>Description</Label>
                            <Textarea placeholder='Description' {...register("thirdSection.description")} />
                        </div>
                    </div>

                            <div>
                    <Label className=''>Items</Label>
                <div className='border border-[#ddd] p-2  rounded-md flex flex-col gap-5'>


                    {thirdSectionFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-[#ddd] pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => thirdSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Image</Label>
                                    <Controller
                                        name={`thirdSectionItems.${index}.image`}
                                        control={control}
                                        rules={{ required: "Logo is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    <p className='text-xs text-gray-500'>{generateDimentions("commitment", "investingCards")}</p>
                                    {errors.thirdSectionItems?.[index]?.image && <p className='text-red-500'>{errors.thirdSectionItems?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`thirdSectionItems.${index}.imageAlt`)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`thirdSectionItems.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.thirdSectionItems?.[index]?.title && <p className='text-red-500'>{errors.thirdSectionItems?.[index]?.title.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Description</Label>
                                    <Textarea placeholder='Description' {...register(`thirdSectionItems.${index}.description`, {
                                        required: "Description is required"
                                    })} />
                                    {errors.thirdSectionItems?.[index]?.description && <p className='text-red-500'>{errors.thirdSectionItems?.[index]?.description.message}</p>}
                                </div>
                            </div>

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' className="text-white cursor-pointer" addItem onClick={() => thirdSectionAppend({ title: "", image: "", imageAlt: "", description: "" })}>Add Item</Button>
                    </div>
                </div>


                </div>
                </AdminItemContainer>




                <div className='flex flex-col gap-2'>
                    <Label className=''>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className=''>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex justify-center'>
                    <Button type='submit' className='text-white cursor-pointer w-full'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default CommitmentPage