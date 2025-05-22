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

interface SystemFormProps {

    metaTitle: string;
    metaDescription: string;
    aboutSection: {
        title: string;
        description: string;
        image: string;
        items: {
            number: string;
            value: string;
        }[];
    };
    banners: {
        image: string;
        imageAlt: string;
        title: string;
    }[];
    partners: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
        }[];
    };
    services: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
        }[];
    };
    systems: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
        }[];
    };
    certifications: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
        }[];
    };
    projects: {
        title: string;
        description: string;
    };
    socials: {
        title: string;
        email: string;
        phone: string;
        items: {
            title: string;
            link: string;
        }[];
    };
}

const HomePage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<SystemFormProps>();

    const { fields: bannerFields, append: bannerAppend, remove: bannerRemove } = useFieldArray({
        control,
        name: "banners"
    });

    const { fields: aboutSectionFields, append: aboutSectionAppend, remove: aboutSectionRemove } = useFieldArray({
        control,
        name: "aboutSection.items"
    });

    const { fields: servicesFields, append: servicesAppend, remove: servicesRemove } = useFieldArray({
        control,
        name: "services.items"
    });

    const { fields: systemsFields, append: systemsAppend, remove: systemsRemove } = useFieldArray({
        control,
        name: "systems.items"
    });

    const { fields: certificationsFields, append: certificationsAppend, remove: certificationsRemove } = useFieldArray({
        control,
        name: "certifications.items"
    });


    const { fields: partnersFields, append: partnersAppend, remove: partnersRemove } = useFieldArray({
        control,
        name: "partners.items"
    });

    const { fields: socialsFields, append: socialsAppend, remove: socialsRemove } = useFieldArray({
        control,
        name: "socials.items"
    });

    const handleAddCommitment = async (data: SystemFormProps) => {
        try {
            const response = await fetch(`/api/admin/home`, {
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
            const response = await fetch(`/api/admin/home`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("socials", data.data.socials);
                setValue("aboutSection", data.data.aboutSection);
                setValue("aboutSection.items", data.data.aboutSection.items);
                setValue("banners", data.data.banners);
                setValue("partners", data.data.partners);
                setValue("partners.items", data.data.partners.items);
                setValue("services", data.data.services);
                setValue("services.items", data.data.services.items);
                setValue("systems", data.data.systems);
                setValue("systems.items", data.data.systems.items);
                setValue("certifications", data.data.certifications);
                setValue("certifications.items", data.data.certifications.items);
                setValue("projects", data.data.projects);
                setValue("socials.items", data.data.socials.items);
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
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddCommitment)}>

            <div className='flex flex-col gap-2'>
            <Label className='pl-3 font-bold border-b p-2 text-lg'>Banner Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>
                <Label className='pl-3 font-bold'>Banners</Label>

                    {bannerFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => bannerRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`banners.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.banners?.[index]?.image && <p className='text-red-500'>{errors.banners?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`banners.${index}.imageAlt`)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`banners.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.banners?.[index]?.title && <p className='text-red-500'>{errors.banners?.[index]?.title.message}</p>}
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => bannerAppend({ image: "", imageAlt: "", title: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>About Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("aboutSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.aboutSection?.title && <p className='text-red-500'>{errors.aboutSection?.title.message}</p>}
                        </div>
                        <div>
                                                <Label className="text-sm font-bold">Description</Label>
                                                <Controller name="aboutSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                                    return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                                                }} />
                                            </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Image</Label>
                            <Controller
                                name="aboutSection.image"
                                control={control}
                                rules={{ required: "Image is required" }}
                                render={({ field }) => (
                                    <ImageUploader
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            {errors.aboutSection?.image && <p className='text-red-500'>{errors.aboutSection?.image.message}</p>}
                        </div>
                    </div>

                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {aboutSectionFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => aboutSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Number</Label>
                                    <Input type='text' placeholder='Number' {...register(`aboutSection.items.${index}.number`)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Value</Label>
                                    <Input type='text' placeholder='Value' {...register(`aboutSection.items.${index}.value`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.aboutSection?.items?.[index]?.value && <p className='text-red-500'>{errors.aboutSection?.items?.[index]?.value.message}</p>}
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => aboutSectionAppend({ number: "", value: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>

                
                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Partners Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`partners.title`)} />
                                </div>
                            </div>
                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {partnersFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => partnersRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`partners.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.partners?.items?.[index]?.image && <p className='text-red-500'>{errors.partners?.items?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`partners.items.${index}.imageAlt`)} />
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => partnersAppend({ image: "", imageAlt: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>

                
                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Services Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`services.title`)} />
                                </div>
                            </div>
                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {servicesFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-1 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => servicesRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
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
                                    {errors.services?.items?.[index]?.image && <p className='text-red-500'>{errors.services?.items?.[index]?.image.message}</p>}
                                    <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`services.items.${index}.imageAlt`)} />
                                </div>
                                </div>
                                <div className=''>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`services.items.${index}.title`)} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Description</Label>
                                    <Textarea placeholder='Description' {...register(`services.items.${index}.description`)} />
                                </div>
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => servicesAppend({ image: "", imageAlt: "", title: "", description: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>

                
                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Systems Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("systems.title", {
                                required: "Title is required"
                            })} />
                            {errors.systems?.title && <p className='text-red-500'>{errors.systems?.title.message}</p>}
                        </div>
                    </div>

                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {systemsFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => systemsRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`systems.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Logo is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.systems?.items?.[index]?.image && <p className='text-red-500'>{errors.systems?.items?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`systems.items.${index}.imageAlt`)} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`systems.items.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.systems?.items?.[index]?.title && <p className='text-red-500'>{errors.systems?.items?.[index]?.title.message}</p>}
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => systemsAppend({ title: "", image: "", imageAlt: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>

                
                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Certifications Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("certifications.title", {
                                required: "Title is required"
                            })} />
                            {errors.certifications?.title && <p className='text-red-500'>{errors.certifications?.title.message}</p>}
                        </div>
                    </div>

                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {certificationsFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => certificationsRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`certifications.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.certifications?.items?.[index]?.image && <p className='text-red-500'>{errors.certifications?.items?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`certifications.items.${index}.imageAlt`)} />
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => certificationsAppend({ image: "", imageAlt: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>

                
                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Projects Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("projects.title", {
                                required: "Title is required"
                            })} />
                            {errors.projects?.title && <p className='text-red-500'>{errors.projects?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("projects.description", {
                                required: "Description is required"
                            })} />
                            {errors.projects?.description && <p className='text-red-500'>{errors.projects?.description.message}</p>}
                        </div>
                    </div>

                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Socials Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("socials.title", {
                                required: "Title is required"
                            })} />
                            {errors.socials?.title && <p className='text-red-500'>{errors.socials?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Email</Label>
                            <Input type='text' placeholder='Email' {...register("socials.email", {
                                required: "Email is required"
                            })} />
                            {errors.socials?.email && <p className='text-red-500'>{errors.socials?.email.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Phone</Label>
                            <Input type='text' placeholder='Phone' {...register("socials.phone", {
                                required: "Phone is required"
                            })} />
                            {errors.socials?.phone && <p className='text-red-500'>{errors.socials?.phone.message}</p>}
                        </div>
                    </div>

                            <div>
                    <Label className='pl-3 font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {socialsFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => socialsRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`socials.items.${index}.title`)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Link</Label>
                                    <Input type='text' placeholder='Link' {...register(`socials.items.${index}.link`)} />
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => socialsAppend({ title: "", link: "" })}>Add Item</Button>
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
                    <Button type='submit'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default HomePage