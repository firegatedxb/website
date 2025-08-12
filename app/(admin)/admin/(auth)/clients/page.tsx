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
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { ImageUploader } from "@/components/ui/image-uploader";
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import AdminItemContainer from "@/app/components/AdminItemContainer/AdminItemContainer";
import { generateDimentions } from "@/lib/generateDimentions";

interface Client {
    _id: string;
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    banner: string;
    bannerAlt: string;
    link: string;
    pageTitle: string;
}

export default function Team() {

    const [image, setImage] = useState<string>("");
    const [imageAlt, setImageAlt] = useState<string>("");
    const [link, setLink] = useState<string>("");
    const [clientList, setClientList] = useState<Client[]>([]);
    const { register, handleSubmit, setValue, control, watch } = useForm<Client>();
    const [metaTitle, setMetaTitle] = useState<string>("");
    const [metaDescription, setMetaDescription] = useState<string>("");

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

    const handleFetchClients = async () => {
        try {
            const response = await fetch("/api/admin/clients");
            if (response.ok) {
                const data = await response.json();

                setValue("title", data.data.title);
                setValue("description", data.data.description);
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setClientList(data.data.clients);
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
    //         const response = await fetch("/api/admin/team/meta");
    //         if (response.ok) {
    //             const data = await response.json();
    //             if (data) {
    //                 setMetaTitle(data.teamMeta.metaTitle);
    //                 setMetaDescription(data.teamMeta.metaDescription);
    //             }
    //         } else {
    //             const data = await response.json();
    //             alert(data.message);
    //         }
    //     } catch (error) {
    //         console.log("Error fetching meta details", error);
    //     }
    // }



    const handleAddClient = async () => {
        try {
            const response = await fetch("/api/admin/clients", {
                method: "POST",
                body: JSON.stringify({ image, imageAlt, link }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchClients();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error adding member", error);
        }
    }

    const handleEditClient = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/clients?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ image, imageAlt, link }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchClients();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error editing client", error);
        }
    }

    const handleDeleteClient = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/clients?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchClients();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting client", error);
        }
    }


    useEffect(() => {
        handleFetchClients();
    }, [])

    const onSubmit = async (data: Client) => {
        try {
            const response = await fetch("/api/admin/clients/intro", {
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
            const response = await fetch("/api/admin/clients/meta", {
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
                                        <div className="flex justify-between border-b  border-[#ddd] pb-2 p-5">
                                            <Label className="text-md font-bold text-black">Meta Section</Label>
                                            <Button className="text-white" onClick={submitMetaSection}>Save</Button>
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

            <form className="h-full w-full border-[#ddd] rounded-md" onSubmit={handleSubmit(onSubmit)}>
            <AdminItemContainer>
                <div className="flex justify-between border-b border-[#ddd] pb-2 p-5">
                    <Label className="text-md font-bold text-black">Intro Section</Label>
                    <Button className="text-white" type="submit">Save</Button>
                </div>
                <div className="mt-2 flex flex-col gap-2 h-fit p-5">
                <div>
                        <Label className="">Banner Image</Label>
                        <ImageUploader onChange={(url) => setValue("banner", url)} value={watch("banner")} />
                            <p className='text-xs text-gray-500'>{generateDimentions("clients", "banner")}</p>
                    </div>
                    <div>
                        <Label className="">Banner Alt Tag</Label>
                        <Input type="text" placeholder="Alt Tag" {...register("bannerAlt")} />
                    </div>
                <div>
                        <Label className="">Page Title</Label>
                        <Input type="text" placeholder="Title" {...register("pageTitle")} />
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
            </AdminItemContainer>
            </form>




            <AdminItemContainer>
                <div className="flex justify-between items-center border-b border-[#ddd] pb-4 mb-4 p-5">
                    <Label className="text-md font-bold text-black">Clients</Label>
                    <Dialog>
                        <DialogTrigger className="bg-primary cursor-pointer text-white h-9 text-sm px-2 py-1 rounded-md" onClick={() => { setImage(""); setImageAlt(""); setLink("") }}>Add Client</DialogTrigger>
                        <DialogContent>
                            <DialogHeader className="adminstyle">
                                <DialogTitle>Add Client</DialogTitle>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Label>Image</Label>
                                        <ImageUploader onChange={(url) => setImage(url)} value={image} />
                                            <p className='text-xs text-gray-500'>{generateDimentions("clients", "itemImage")}</p>
                                    </div>
                                    <div>
                                        <Label>Alt Tag</Label>
                                        <Input type="text" placeholder="Alt Tag" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label>Link</Label>
                                        <Input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
                                    </div>
                                </div>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md text-sm" onClick={handleAddClient}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-2  h-fit p-5">
                    {clientList.map((client, index) => (
                        <div key={index} className="relative flex  justify-between border border-[#ddd] p-1 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <Image src={client.image} alt={client.imageAlt} width={100} height={100} />
                                </div>
                            </div>
                            <div className="absolute top-1 right-1 flex gap-2">
                                <Dialog>
                                    <DialogTrigger className=" text-white px-2 py-1 rounded-md" onClick={() => { setImage(client.image); setImageAlt(client.imageAlt); setLink(client.link) }}>

                                            <MdEdit className="text-black cursor-pointer"/>

                                    </DialogTrigger>
                                    <DialogContent className="adminstyle">
                                        <DialogHeader>
                                            <DialogTitle>Edit Client</DialogTitle>
                                            <div className="flex flex-col gap-4">
                                                <div>
                                                    <Label>Image</Label>
                                                    <ImageUploader onChange={(url) => setImage(url)} value={image} />
                                                    <p className='text-xs text-gray-500'>{generateDimentions("clients", "itemImage")}</p>
                                                </div>
                                                <div>
                                                    <Label>Alt Tag</Label>
                                                    <Input type="text" placeholder="Alt Tag" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
                                                </div>
                                                <div>
                                                    <Label>Link</Label>
                                                    <Input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
                                                </div>
                                            </div>
                                        </DialogHeader>
                                        <DialogClose className="bg-black cursor-pointer text-white px-2 py-1 rounded-md" onClick={()=>handleEditClient(client._id)}>Save</DialogClose>
                                    </DialogContent>

                                </Dialog>

                                    <MdDelete className="mt-1 cursor-pointer text-black" onClick={()=>handleDeleteClient(client._id)}/>

                            </div>
                        </div>
                    ))}
                </div>
            </AdminItemContainer>
        </div>
    );
}

