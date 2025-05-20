"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import { useForm, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiAiGenerateText } from "react-icons/ri";

interface ProjectFormProps {
    name: string;
    slug:string;
    client: string;
    sector: string;
    consultant: string;
    location: string;
    title: string;
    description: string;
    thumbnail: string;
    thumbnailAlt: string;
    coverPhoto: string;
    coverPhotoAlt: string;
    metaTitle: string;
    metaDescription: string;
    featuredProject:string;
}

const ProjectForm = ({ editMode }: { editMode?: boolean }) => {

    const router = useRouter();
    const { id } = useParams();

    const [sectorList, setSectorList] = useState<{ name: string }[]>([]);
    const [locationList, setLocationList] = useState<{ name: string }[]>([]);

    const { register, handleSubmit, setValue, watch,control, formState: { errors } } = useForm<ProjectFormProps>();

    const handleAddProject = async (data: ProjectFormProps) => {
        try {
            const response = await fetch(editMode ? `/api/admin/project?id=${id}` : "/api/admin/project", {
                method: editMode ? "PATCH" : "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                router.push("/admin/projects");
            }
        } catch (error) {
            console.log("Error in adding project", error);
        }
    }

    const fetchProjectData = async () => {
        try {
            const response = await fetch(`/api/admin/project?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setValue("name", data.data.name);
                setValue("slug", data.data.slug);
                setValue("client", data.data.client);
                setValue("sector", data.data.sector);
                setValue("consultant", data.data.consultant);
                setValue("thumbnail", data.data.thumbnail);
                setValue("thumbnailAlt", data.data.thumbnailAlt);
                setValue("coverPhoto", data.data.coverPhoto);
                setValue("coverPhotoAlt", data.data.coverPhotoAlt);
                setValue("location", data.data.location);
                setValue("title", data.data.title);
                setValue("description", data.data.description);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("featuredProject", data.data.featuredProject);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching project data", error);
        }
    }



    const fetchSector = async () => {
        try {
            const response = await fetch("/api/admin/sector");
            if (response.ok) {
                const data = await response.json();
                setSectorList(data.data);
            }
        } catch (error) {
            console.log("Error in fetching sector", error);
        }
    }

    const fetchLocation = async () => {
        try {
            const response = await fetch("/api/admin/location");
            if (response.ok) {
                const data = await response.json();
                setLocationList(data.data);
            }
        } catch (error) {
            console.log("Error in fetching location", error);
        }
    }

    useEffect(() => {
        fetchSector().then(() => fetchLocation().then(() => ((editMode) ? fetchProjectData() : null)));
    }, []);


          useEffect(()=>{
              if(watch("slug") === undefined) return;
              const slug = watch("slug").replace(/\s+/g, '-');
              setValue("slug", slug);
          },[watch("slug")])

          const handleAutoGenerate = () => {
            const name = watch("name");
            if (!name) return;
            const slug = name
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
            setValue("slug", slug);
          };

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-lg font-bold'>{editMode ? "Edit Project" : "Add Project"}</h1>
            <form className='flex flex-col gap-5 border p-2 rounded-md' onSubmit={handleSubmit(handleAddProject)}>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <Label className='pl-3 font-bold'>Name</Label>
                        <Input type='text' placeholder='Project Name' {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div>
                                            <Label className='pl-3 font-bold mb-1'>
                                                Slug
                                                <div className='flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer' onClick={handleAutoGenerate}>
                                                    <p>Auto Generate</p>
                                                    <RiAiGenerateText />
                                                </div>
                                                </Label>
                                            <Input type='text' placeholder='Product Slug' {...register("slug", { required: "Slug is required",pattern: {
                            value: /^[a-z0-9]+(-[a-z0-9]+)*$/,
                            message: "Slug must contain only lowercase letters, numbers, and hyphens (no spaces)"
                          } })} />
                                            {errors.slug && <p className='text-red-500'>{errors.slug.message}</p>}
                                        </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                        <Label className='pl-3 font-bold'>Thumbnail</Label>
                        <ImageUploader onChange={(url)=>setValue("thumbnail",url)} value={watch("thumbnail")} />
                        {errors.thumbnail && <p className='text-red-500'>{errors.thumbnail.message}</p>}
                        </div>
                        <div>
                        <Label className='pl-3 font-bold'>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("thumbnailAlt")} />
                    </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div>
                        <Label className='pl-3 font-bold'>Cover Photo</Label>
                        <ImageUploader onChange={(url)=>setValue("coverPhoto",url)} value={watch("coverPhoto")} />
                        {errors.coverPhoto && <p className='text-red-500'>{errors.coverPhoto.message}</p>}
                        </div>
                        <div>
                        <Label className='pl-3 font-bold'>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("coverPhotoAlt")} />
                    </div>
                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Client</Label>
                    <Input type='text' placeholder='Client Name' {...register("client", { required: "Client is required" })} />
                    {errors.client && <p className='text-red-500'>{errors.client.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Sector</Label>
                    <Controller
                        name="sector"
                        control={control}
                        rules={{ required: "Sector is required" }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue=""
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Sector" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sectorList.map((item, index) => (
                                        <SelectItem key={index} value={item.name}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.sector && <p className="text-red-500">{errors.sector.message}</p>}

                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Consultant</Label>
                    <Input type='text' placeholder='Consultant' {...register("consultant", { required: "Consultant is required" })} />
                    {errors.consultant && <p className='text-red-500'>{errors.consultant.message}</p>}
                </div>

                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Location</Label>
                    <Controller
                        name="location"
                        control={control}
                        rules={{ required: "Location is required" }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue=""
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Location" />
                                </SelectTrigger>
                                <SelectContent className='bg-white'>
                                    {locationList.map((item, index) => (
                                        <SelectItem key={index} value={item.name}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                </div>

                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Title</Label>
                    <Input type='text' placeholder='Title' {...register("title", { required: "Title is required" })} />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </div>


                <div>
                <Label className='pl-3 font-bold'>Description</Label>
                    <Controller name="description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                        return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                    }} />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>

                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Featured Project</Label>
                    <Controller name="featuredProject" control={control} rules={{ required: "Featured Project is required" }} render={({ field }) => {
                        return <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue=""
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Featured Project" />
                            </SelectTrigger>
                            <SelectContent>
                                
                                    <SelectItem value={"true"}>
                                        Yes
                                    </SelectItem>
                                    <SelectItem value={"false"}>
                                        No
                                    </SelectItem>
                            </SelectContent>
                        </Select>
                    }} />
                    {errors.featuredProject && <p className="text-red-500">{errors.featuredProject.message}</p>}
                </div>


                <div className='flex flex-col gap-2 mt-16'>
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

export default ProjectForm