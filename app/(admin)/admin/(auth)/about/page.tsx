"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import AdminItemContainer from '@/app/components/AdminItemContainer/AdminItemContainer';

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
        image: string;
        imageAlt: string;
    };
    secondSection: {
        title: string;
        description: string;
        vision: {
            logo: string;
            logoAlt: string;
            description: string;
        };
        mission: {
            logo: string;
            logoAlt: string;
            description: string;
        };
        values: {
            logo: string;
            logoAlt: string;
            description: string;
        };
    };
    thirdSection: {
        title: string;
        description: string;
        chairman: {
            name: string;
            image: string;
            imageAlt: string;
            description: string;
        };
        ceo: {
            name: string;
            image: string;
            imageAlt: string;
            description: string;
        };
    };
    certifications: {
        image: string;
        imageAlt: string;
        title: string;
    }[];
}

const AboutPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<SystemFormProps>();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "certifications"
    });

    const handleAddAbout = async (data: SystemFormProps) => {
        try {
            const response = await fetch(`/api/admin/about`, {
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

    const fetchAboutData = async () => {
        try {
            const response = await fetch(`/api/admin/about`);
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
                setValue("certifications", data.data.certifications);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching commitment data", error);
        }
    }



    useEffect(() => {
        fetchAboutData();
    }, []);


    return (
        <div className='flex flex-col gap-5 adminstyle'>
            <form className='flex flex-col gap-5 ' onSubmit={handleSubmit(handleAddAbout)}>


           <div> 
                <div className='flex flex-col gap-2'> 
                     <AdminItemContainer>
                                            <Label main>Banner Section</Label>
                      <div className='p-5'>            
                    <div>
                        <Label className="">Banner</Label>
                        <div className='  flex flex-col gap-5 mt-1'>
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
                        {errors.banner && (
                            <p className="text-red-500">{errors.banner.message}</p>
                        )}
                    </div>
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
           </div>
 
               <div> 
                <AdminItemContainer>
                            <Label main>First Section</Label>
                                   
                    <div className='flex flex-col gap-2 p-5'>
                        <div className='flex flex-col gap-1'>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("firstSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.firstSection?.title && <p className='text-red-500'>{errors.firstSection?.title.message}</p>}
                        </div>
                        <div>
                            <Label className="">Description</Label>
                            <Controller name="firstSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                            }} />
                        </div>
                        <div>
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
                        {errors.firstSection?.image && (
                            <p className="text-red-500">{errors.firstSection?.image.message}</p>
                        )}
                        </div>
                        <div>
                        <Label className=''>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("firstSection.imageAlt")} />
                        </div>
                    </div>

                </AdminItemContainer>
               </div>

               <div> 
                <AdminItemContainer>
                            <Label main>Second Section</Label>
                                   
                    <div className='flex flex-col gap-2 p-5'>
                        <div className='flex flex-col gap-1'>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <Label className=''>Description</Label>
                            <Controller name="secondSection.description" control={control} render={({ field }) => {
                                return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                            }} />
                        </div>

                        <div className='grid grid-cols-3 gap-5'>

                            <div className='border border-[#ddd] p-4 rounded-md flex flex-col gap-2'>
                                <div>
                                <p className='text-sm border-b border-[#ccc] mb-2 pb-2'>Mission</p>
                                <div>
                                <Label className=''>Logo</Label>
                                <Controller
                                    name="secondSection.mission.logo"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => ( 
                                        <ImageUploader 
                                            value={field.value}
                                            onChange={field.onChange}
                                            isLogo
                                        /> 
                                    )}
                                />
                                {errors.secondSection?.mission?.logo && (
                                    <p className="text-red-500">{errors.secondSection?.mission?.logo.message}</p>
                                )}
                                </div>
                                </div>
                                <div>
                                <Label className=''>Alt Tag</Label>
                                <Input type='text' placeholder='Alt Tag' {...register("secondSection.mission.logoAlt")} />
                                </div>
                                <div>
                                <Label className=''>Description</Label>
                                <Textarea placeholder='Description' {...register("secondSection.mission.description")} />
                                </div>
                            </div>


                            <div className='border border-[#ddd] p-4 rounded-md flex flex-col gap-2'>
                                <div>
                                <p className='text-sm border-b border-[#ccc] mb-2 pb-2'>Vision</p>
                                <div>
                                <Label className=''>Logo</Label>
                                <Controller
                                    name="secondSection.vision.logo"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                            isLogo
                                        />
                                    )}
                                />
                                {errors.secondSection?.vision?.logo && (
                                    <p className="text-red-500">{errors.secondSection?.vision?.logo.message}</p>
                                )}
                                </div>
                                </div>
                                <div>
                                <Label className=''>Alt Tag</Label>
                                <Input type='text' placeholder='Alt Tag' {...register("secondSection.vision.logoAlt")} />
                                </div>
                                <div>
                                <Label className=''>Description</Label>
                                <Textarea placeholder='Description' {...register("secondSection.vision.description")} />
                                </div>
                            </div>


                            <div className='border border-[#ddd] p-4 rounded-md flex flex-col gap-2'>
                                
                            <div><p className='text-sm border-b border-[#ccc] mb-2 pb-2'>Values</p>
                                <div>
                                <Label className=''>Logo</Label>
                                <Controller
                                    name="secondSection.values.logo"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                            isLogo
                                        />
                                    )}
                                />
                                {errors.secondSection?.values?.logo && (
                                    <p className="text-red-500">{errors.secondSection?.values?.logo.message}</p>
                                )}
                                </div>
                                </div>
                                <div>
                                <Label className='pl-3 font-bold'>Alt Tag</Label>
                                <Input type='text' placeholder='Alt Tag' {...register("secondSection.values.logoAlt")} />
                                </div>
                                <div>
                                <Label className='pl-3 font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("secondSection.values.description")} />
                                </div>
                            </div>



                        </div>

                    </div>

                </AdminItemContainer>
                </div>

                <div> 
                <AdminItemContainer>
                            <Label main>Third Section</Label>
                                    
                    <div className='flex flex-col gap-2 p-5'>
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



                    <div className='grid grid-cols-2 gap-5 p-5'>

                            <div className='border border-[#ddd] p-4 rounded-md flex flex-col gap-2'>
                                <div>
                                <Label className='  font-bold text-md border-[#ccc] mb-2 pb-2'>Chairman</Label>
                                <div>
                                <Label className=''>Image</Label>
                                <Controller
                                    name="thirdSection.chairman.image"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.thirdSection?.chairman?.image && (
                                    <p className="text-red-500">{errors.thirdSection?.chairman?.image.message}</p>
                                )}
                                </div>
                                </div>
                                <div>
                                <Label className=''>Alt Tag</Label>
                                <Input type='text' placeholder='Alt Tag' {...register("thirdSection.chairman.imageAlt")} />
                                </div>
                                <div>
                                <Label className=''>Name</Label>
                                <Input type='text' placeholder='Name' {...register("thirdSection.chairman.name")} />
                                </div>
                                <div>
                                <Label className=''>Description</Label>
                                <Textarea placeholder='Description' {...register("thirdSection.chairman.description")} />
                                </div>
                            </div>


                            <div className='border border-[#ddd] p-4 rounded-md flex flex-col gap-2'>
                               <div>
                               <Label className='  font-bold text-md border-[#ccc] mb-2 pb-2'>CEO</Label>
                                <div>
                                <Label className=''>Image</Label>
                                <Controller
                                    name="thirdSection.ceo.image"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.thirdSection?.ceo?.image && (
                                    <p className="text-red-500">{errors.thirdSection?.ceo?.image.message}</p>
                                )}
                                </div>
                               </div>
                                <div>
                                <Label className=''>Alt Tag</Label>
                                <Input type='text' placeholder='Alt Tag' {...register("thirdSection.ceo.imageAlt")} />
                                </div>
                                <div>
                                <Label className=''>Name</Label>
                                <Input type='text' placeholder='Name' {...register("thirdSection.ceo.name")} />
                                </div>
                                <div>
                                <Label className=''>Description</Label>
                                <Textarea placeholder='Description' {...register("thirdSection.ceo.description")} />
                                </div>
                            </div>




                        </div>

                </AdminItemContainer>
                </div>

                <AdminItemContainer>
               
                    <Label main>Certifications</Label>
                         
                <div className='grid grid-cols-2 gap-5 p-5'>


                    {fields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-r border-[#ddd] pb-5 even:border-r-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Image</Label>
                                    <Controller
                                        name={`certifications.${index}.image`}
                                        control={control}
                                        rules={{ required: "Logo is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.certifications?.[index]?.image && <p className='text-red-500'>{errors.certifications?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`certifications.${index}.imageAlt`)} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className=''>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`certifications.${index}.title`)} />
                                </div>
                            </div>

                        </div>
                    ))}

                    

                </div> 
                <div className='mb-5 mr-5 flex justify-end'>
                        <Button type='button' className="text-white cursor-pointer" addItem onClick={() => append({ image: "", imageAlt: "", title: "" })}>Add Item</Button>
                    </div>
                </AdminItemContainer>




                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex justify-center'>
                    <Button type='submit' className='text-white w-full cursor-pointer'>Submit</Button>
                </div> 

            </form>
        </div>
    )
}

export default AboutPage