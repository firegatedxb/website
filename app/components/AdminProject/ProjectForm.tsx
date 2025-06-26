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
import AdminItemContainer from '../AdminItemContainer/AdminItemContainer'

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
    status:string;
    metaTitle: string;
    metaDescription: string;
    featuredProject:string;
}

const ProjectForm = ({ editMode }: { editMode?: boolean }) => {

    const router = useRouter();
    const { id } = useParams();

    const [sectorList, setSectorList] = useState<{ name: string }[]>([]);
    const [locationList, setLocationList] = useState<{ name: string }[]>([]);
    const [clientList, setClientList] = useState<{ name: string }[]>([]);

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
                setValue("status", data.data.status);
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

    const fetchClient = async () => {
        try {
            const response = await fetch("/api/admin/project/client");
            if (response.ok) {
                const data = await response.json();
                setClientList(data.data);
            }
        } catch (error) {
            console.log("Error in fetching client", error);
        }
    }

    useEffect(() => {
        fetchSector().then(() => fetchLocation().then(() => fetchClient().then(() => ((editMode) ? fetchProjectData() : null))));
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
        <div className='flex flex-col gap-5 adminstyle'>
            <h1 className='text-md font-bold'>{editMode ? "Edit Project" : "Add Project"}</h1>
            <AdminItemContainer>
            <form className='flex flex-col gap-5 border-[#ddd] p-4 rounded-md' onSubmit={handleSubmit(handleAddProject)}>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <Label className=''>Name</Label>
                        <Input type='text' placeholder='Project Name' {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div>
                                            <Label className=''>
                                                Slug
                                                <div className='w-fit flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer' onClick={handleAutoGenerate}>
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
                        <Label className=''>Thumbnail</Label>
                        <ImageUploader onChange={(url)=>setValue("thumbnail",url)} value={watch("thumbnail")} />
                        {errors.thumbnail && <p className='text-red-500'>{errors.thumbnail.message}</p>}
                        </div>
                        <div>
                        <Label className=''>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("thumbnailAlt")} />
                    </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div>
                        <Label className=''>Cover Photo</Label>
                        <ImageUploader onChange={(url)=>setValue("coverPhoto",url)} value={watch("coverPhoto")} />
                        {errors.coverPhoto && <p className='text-red-500'>{errors.coverPhoto.message}</p>}
                        </div>
                        <div>
                        <Label className=''>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("coverPhotoAlt")} />
                    </div>
                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <Label className=''>Client</Label>
                    <Controller
                        name="client"
                        control={control}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue=""
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Client" />
                                </SelectTrigger>
                                <SelectContent>
                                    {clientList.map((item, index) => (
                                        <SelectItem key={index} value={item.name}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />

                </div>
                <div className='flex flex-col gap-2'>
                    <Label className=''>Sector</Label>
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
                    <Label className=''>Consultant</Label>
                    <Input type='text' placeholder='Consultant' {...register("consultant")} />
                </div>

                <div className='flex flex-col gap-2 '>
                    <Label className=''>Category</Label>
                    <Controller
                        name="location"
                        control={control}
                        rules={{ required: "Category is required" }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue=""
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Category" />
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
                    <Label className=''>Title</Label>
                    <Input type='text' placeholder='Title' {...register("title", { required: "Title is required" })} />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </div>


                <div>
                <Label className=''>Description</Label>
                    <Controller name="description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                        return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                    }} />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>


                <div className='flex flex-col gap-2'>
                    <Label className=''>Status</Label>
                    <Controller name="status" control={control} rules={{ required: "Status is required" }} render={({ field }) => {
                        return <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue=""
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent className=''>
                                
                                    <SelectItem value={"true"}>
                                    Completed
                                    </SelectItem>
                                    <SelectItem value={"false"}>
                                    Ongoing
                                    </SelectItem>
                            </SelectContent>
                        </Select>
                    }} />
                    {errors.status && <p className="text-red-500">{errors.status.message}</p>}
                </div>

                <div className='flex flex-col gap-2'>
                    <Label className=''>Featured Project</Label>
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
            </AdminItemContainer>
        </div>
    )
}

export default ProjectForm