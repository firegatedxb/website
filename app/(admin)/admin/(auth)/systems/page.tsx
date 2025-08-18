"use client"

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MdDelete, MdEdit } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from "react-hook-form";
import { ImageUploader } from "@/components/ui/image-uploader";
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import { Textarea } from "@/components/ui/textarea";
import { RiPagesFill } from "react-icons/ri";
import Link from "next/link";
import AdminItemContainer from "@/app/components/AdminItemContainer/AdminItemContainer";
import { generateDimentions } from "@/lib/generateDimentions";

interface System {
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    _id: string;
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    logo: string;
    logoAlt: string;
}

export default function Team() {

    const [image, setImage] = useState<string>("");
    const [imageAlt, setImageAlt] = useState<string>("");
    const [systemList, setSystemList] = useState<System[]>([]);
    const { register, handleSubmit, setValue, control, watch } = useForm<System>();
    const [metaTitle, setMetaTitle] = useState<string>("");
    const [metaDescription, setMetaDescription] = useState<string>("");
    const [logo, setLogo] = useState<string>("");
    const [logoAlt, setLogoAlt] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    // const handleFetchMdDetails = async () => {
    //     try {
    //         const response = await fetch("/api/admin/team/md");
    //         if (response.ok) {
    //             const data = await response.json();
    //             if (data.data) {
    //                 setValue("name", data.data.mdName);
    //                 setValue("designation", data.data.mdDesignation);
    //                 setValue("image", data.data.mdImage);
    //                 setValue("description", data.data.mdDescription);
    //                 setValue("mdImageAlt", data.data.mdImageAlt);
    //             }
    //         } else {
    //             const data = await response.json();
    //             alert(data.message);
    //         }
    //     } catch (error) {
    //         console.log("Error fetching industry", error);
    //     }
    // }

    const handleFetchSystems = async () => {
        try {
            const response = await fetch("/api/admin/systems");
            if (response.ok) {
                const data = await response.json();

                setValue("title", data.data.title);
                setValue("description", data.data.description);
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setSystemList(data.data.systems);
                setMetaTitle(data.data.metaTitle);
                setMetaDescription(data.data.metaDescription);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error fetching members", error);
        }
    }

    // const handleFetchMetaDetails = async () => {
    //     try {
    //         const response = await fetch("/api/admin/systems/meta");
    //         if (response.ok) {
    //             const data = await response.json();
    //             if (data) {
    //                 setMetaTitle(data.systemsMeta.metaTitle);
    //                 setMetaDescription(data.systemsMeta.metaDescription);
    //             }
    //         } else {
    //             const data = await response.json();
    //             alert(data.message);
    //         }
    //     } catch (error) {
    //         console.log("Error fetching meta details", error);
    //     }
    // }



    const handleAddSystem = async () => {
        try {
            const response = await fetch("/api/admin/systems", {
                method: "POST",
                body: JSON.stringify({ image, imageAlt, title, description, logo, logoAlt }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchSystems();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error adding system", error);
        }
    }

    const handleEditSystem = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/systems?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ image, imageAlt, title, description, logo, logoAlt }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchSystems();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error editing system", error);
        }
    }

    const handleDeleteSystem = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/systems?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchSystems();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting system", error);
        }
    }


    useEffect(() => {
        handleFetchSystems();
    }, [])

    const onSubmit = async (data: System) => {
        try {
            const response = await fetch("/api/admin/systems/intro", {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error saving details", error);
        }
    }

    const submitMetaSection = async () => {
        try {
            const response = await fetch("/api/admin/systems/meta", {
                method: "POST",
                body: JSON.stringify({ metaTitle, metaDescription }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error saving meta details", error);
        }
    }

    return (
        <div className="h-screen grid grid-cols-1 gap-5 adminstyle">

            <AdminItemContainer>
                                        <div className="flex justify-between border-b border-[#ddd] pb-2 p-5">
                                            <Label className="text-md font-bold text-black">Meta Section</Label>
                                            <Button onClick={submitMetaSection} className="text-white cursor-pointer">Save</Button>
                                        </div>
                                        <div className="mt-2 grid grid-cols-1 gap-2  h-fit p-5">
                                            <div>
                                                <Label>Meta title</Label>
                                                <Input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
                                            </div>
                                            <div>
                                                <Label>Meta Description</Label>
                                                <Input type="text" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
                                            </div>
                                        </div>
                                    </AdminItemContainer>

<AdminItemContainer>
            <form className="h-full w-full border-[#ddd] rounded-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between border-b border-[#ddd] pb-2 p-5">
                    <Label className="text-md font-bold text-black">Intro Section</Label>
                    <Button type="submit" className="text-white h-9 text-sm cursor-pointer">Save</Button>
                </div>
                <div className="mt-2 flex flex-col gap-2 h-fit p-5">
                <div>
                        <Label className="">Banner Image</Label>
                        <ImageUploader onChange={(url) => setValue("banner", url)} value={watch("banner")}/>
                            <p className='text-xs text-gray-500'>{generateDimentions("systems", "banner")}</p>
                    </div>
                    <div>
                        <Label className="">Banner Alt</Label>
                        <Input type="text" placeholder="Banner Alt" {...register("bannerAlt")} />
                    </div>
                    <div>
                        <Label className="">Page Title</Label>
                        <Input type="text" placeholder="Page Title" {...register("pageTitle")} />
                    </div>
                    <div>
                        <Label className="">Title</Label>
                        <Input type="text" placeholder="Title" {...register("title")} />
                    </div>
                    <div>
                        <Label className="">Description</Label>
                        <Controller name="description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                            return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                        }} />
                    </div>
                </div>
            </form>
            </AdminItemContainer>




           <div className="mb-5">
           <AdminItemContainer>
                <div className="flex justify-between border-b border-[#ddd] pb-3 mb-3 p-5">
                    <Label className="text-md font-bold text-secondary">Systems</Label>
                    <Dialog>
                        <DialogTrigger className="bg-primary h-9 text-white px-2 py-1 rounded-md text-sm cursor-pointer" onClick={() => { setLogo(""); setLogoAlt(""); setImage(""); setImageAlt(""); setTitle(""); setDescription(""); }}>Add System</DialogTrigger>
                        <DialogContent className="h-[500px] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Add System</DialogTitle>
                                <div className="flex flex-col gap-4">
                                <div>
                                        <Label>Logo</Label>
                                        <ImageUploader onChange={(url) => setLogo(url)} value={logo} isLogo/>
                                        <p className='text-xs text-gray-500'>{generateDimentions("systems", "itemLogo")}</p>
                                    </div>
                                    <div>
                                        <Label>Logo Alt Tag</Label>
                                        <Input type="text" placeholder="Logo Alt Tag" value={logoAlt} onChange={(e) => setLogoAlt(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label>Title</Label>
                                        <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label>Description</Label>
                                        <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label>Image</Label>
                                        <ImageUploader onChange={(url) => setImage(url)} value={image} />
                                        <p className='text-xs text-gray-500'>{generateDimentions("systems", "itemImage")}</p>
                                    </div>
                                    <div>
                                        <Label>Alt Tag</Label>
                                        <Input type="text" placeholder="Alt Tag" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
                                    </div>

                                </div>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 cursor-pointer py-1 h-9 text-sm rounded-md" onClick={handleAddSystem}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-2  h-fit p-5">
                    {systemList?.map((system, index) => (
                        <div key={index} className="relative flex  justify-between border border-[#ddd] p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <p className="text-sm font-medium">{system.title}</p>
                                </div>
                            </div>
                            <div className="absolute top-1 right-1 flex gap-4">
                                <Dialog>
                                    <DialogTrigger className=" text-white px-2 py-1 rounded-md" onClick={() => { setLogo(system.logo); setLogoAlt(system.logoAlt); setTitle(system.title); setDescription(system.description); setImage(system.image); setImageAlt(system.imageAlt) }}>

                                            <MdEdit className="text-black cursor-pointer"/>


                                    </DialogTrigger>
                                    <DialogContent className="h-[500px] overflow-y-auto adminstyle">
                                        <DialogHeader>
                                            <DialogTitle>Edit System</DialogTitle>
                                            <div className="flex flex-col gap-4">
                                                <div>
                                                    <Label>Logo</Label>
                                                    <ImageUploader onChange={(url) => setLogo(url)} value={logo} isLogo/>
                                                    <p className='text-xs text-gray-500'>{generateDimentions("systems", "itemLogo")}</p>
                                                </div>
                                                <div>
                                                    <Label>Logo Alt Tag</Label>
                                                    <Input type="text" placeholder="Logo Alt Tag" value={logoAlt} onChange={(e) => setLogoAlt(e.target.value)} />
                                                </div>
                                                <div>
                                                    <Label>Title</Label>
                                                    <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                                </div>
                                                <div>
                                                    <Label>Description</Label>
                                                    <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                                </div>
                                                <div>
                                                    <Label>Image</Label>
                                                    <ImageUploader onChange={(url) => setImage(url)} value={image} />
                                                    <p className='text-xs text-gray-500'>{generateDimentions("systems", "itemImage")}</p>
                                                </div>
                                                <div>
                                                    <Label>Alt Tag</Label>
                                                    <Input type="text" placeholder="Alt Tag" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
                                                </div>
                                            </div>
                                        </DialogHeader>
                                        <DialogClose className="bg-black text-white px-2 cursor-pointer py-1 rounded-md" onClick={()=>handleEditSystem(system._id)}>Save</DialogClose>
                                    </DialogContent>

                                </Dialog>

                                    <Link href={`/admin/systems/${system._id}`}><RiPagesFill className="mt-1 cursor-pointer text-black"/></Link>

                                    <MdDelete className="mt-1 cursor-pointer text-black" onClick={()=>handleDeleteSystem(system._id)}/>

                            </div>
                        </div>
                    ))}
                </div>
            </AdminItemContainer>
           </div>
        </div>
    );
}

