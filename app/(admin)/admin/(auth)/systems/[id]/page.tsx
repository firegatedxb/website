"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiAiGenerateText, RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'

interface SystemFormProps {
    name: string;
    slug: string;
    title: string;
    introTitle: string;
    introDescription: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    homeImage: string;
    homeImageAlt: string;
    pageTitle: string;
    componentTitle: string;
    componentDescription: string;
    components: {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
    }[];
}

const SystemForm = () => {

    const router = useRouter();
    const { id } = useParams();

    const { register, handleSubmit, setValue, watch, control, formState: { errors } } = useForm<SystemFormProps>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "components"
    });

    const handleAddSystem = async (data: SystemFormProps) => {
        try {
            const response = await fetch(`/api/admin/systems/indi?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                router.push("/admin/systems");
            }
        } catch (error) {
            console.log("Error in adding system", error);
        }
    }

    const fetchSystemData = async () => {
        try {
            const response = await fetch(`/api/admin/systems?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setValue("slug", data.data.slug);
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("homeImage", data.data.homeImage);
                setValue("homeImageAlt", data.data.homeImageAlt);
                setValue("pageTitle", data.data.title);
                setValue("componentTitle", data.data.componentTitle);
                setValue("componentDescription", data.data.componentDescription);
                setValue("components", data.data.components);
                setValue("title", data.data.title);
                setValue("introTitle", data.data.introTitle);
                setValue("introDescription", data.data.introDescription);
                setValue("description", data.data.description);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching system data", error);
        }
    }



    useEffect(() => {
        fetchSystemData();
    }, []);


    useEffect(() => {
        if (watch("slug") === undefined) return;
        const slug = watch("slug").replace(/\s+/g, '-');
        setValue("slug", slug);
    }, [watch("slug")])

    const handleAutoGenerate = () => {
        const pageTitle = watch("pageTitle");
        if (!pageTitle) return;
        const slug = pageTitle
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
        setValue("slug", slug);
    };

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-lg font-bold'>Edit System</h1>
            <form className='flex flex-col gap-5 border p-2 rounded-md' onSubmit={handleSubmit(handleAddSystem)}>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <Label className='pl-3 font-bold'>Page Title</Label>
                        <Input type='text' readOnly defaultValue={watch("pageTitle")} />
                    </div>
                    <div>
                        <Label className='pl-3 font-bold mb-1'>
                            Slug
                            <div className='flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer' onClick={handleAutoGenerate}>
                                <p>Auto Generate</p>
                                <RiAiGenerateText />
                            </div>
                        </Label>
                        <Input type='text' placeholder='Slug' {...register("slug", {
                            required: "Slug is required", pattern: {
                                value: /^[a-z0-9]+(-[a-z0-9]+)*$/,
                                message: "Slug must contain only lowercase letters, numbers, and hyphens (no spaces)"
                            }
                        })} />
                        {errors.slug && <p className='text-red-500'>{errors.slug.message}</p>}
                    </div>



                </div>

                <div className='flex flex-col gap-2'>
                    <div>
                        <Label className="pl-3 font-bold">Banner</Label>
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
                    <div>
                        <Label className='pl-3 font-bold'>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("bannerAlt")} />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div>
                        <Label className="pl-3 font-bold">In Home Image</Label>
                        <Controller
                            name="homeImage"
                            control={control}
                            rules={{ required: "In Home Image is required" }}
                            render={({ field }) => (
                                <ImageUploader
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        {errors.homeImage && (
                            <p className="text-red-500">{errors.homeImage.message}</p>
                        )}
                    </div>
                    <div>
                        <Label className='pl-3 font-bold'>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("homeImageAlt")} />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <Label className='pl-3 font-bold'>Intro Title</Label>
                        <Input type='text' placeholder='Title' {...register("introTitle", {
                            required: "Title is required"
                        })} />
                        {errors.introTitle && <p className='text-red-500'>{errors.introTitle.message}</p>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Label className='pl-3 font-bold'>Intro Description</Label>
                        <Textarea placeholder='Description' {...register("introDescription")} />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <Label className='pl-3 font-bold'>Component Title</Label>
                        <Input type='text' placeholder='Component Title' {...register("componentTitle", {
                            required: "Component Title is required"
                        })} />
                        {errors.componentTitle && <p className='text-red-500'>{errors.componentTitle.message}</p>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Label className='pl-3 font-bold'>Component Description</Label>
                        <Textarea placeholder='Component Description' {...register("componentDescription")} />
                    </div>
                </div>

                <Label className='pl-3 font-bold'>Components</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {fields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`components.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.components?.[index]?.image && <p className='text-red-500'>{errors.components?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`components.${index}.imageAlt`)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`components.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.components?.[index]?.title && <p className='text-red-500'>{errors.components?.[index]?.title.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Description</Label>
                                    <Textarea {...register(`components.${index}.description`, {
                                        required: "Description is required"
                                    })} />
                                    {errors.components?.[index]?.description && <p className='text-red-500'>{errors.components?.[index]?.description.message}</p>}
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => append({ title: "", description: "", image: "", imageAlt: "" })}>Add Component</Button>
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

export default SystemForm