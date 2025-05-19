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

interface Client {
    _id: string;
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
}

export default function Team() {

    const [image, setImage] = useState<string>("");
    const [imageAlt, setImageAlt] = useState<string>("");
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
                console.log(data)
                setValue("title", data.data[0].title);
                setValue("description", data.data[0].description);
                setValue("banner", data.data[0].banner);
                setValue("bannerAlt", data.data[0].bannerAlt);
                setValue("pageTitle", data.data[0].pageTitle);
                setClientList(data.data[0].clients);
                setMetaTitle(data.data[0].metaTitle);
                setMetaDescription(data.data[0].metaDescription);
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
                body: JSON.stringify({ image, imageAlt }),
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
                body: JSON.stringify({ image, imageAlt }),
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
        <div className="h-screen grid grid-cols-1 gap-5">

            <div className="h-fit w-full p-2 border-2 border-gray-300 rounded-md mt-5">
                                        <div className="flex justify-between border-b-2 pb-2">
                                            <Label className="text-sm font-bold">Meta Section</Label>
                                            <Button onClick={submitMetaSection}>Save</Button>
                                        </div>
                                        <div className="mt-2 grid grid-cols-1 gap-2  h-fit">
                                            <div>
                                                <Label>Meta title</Label>
                                                <Input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
                                            </div>
                                            <div>
                                                <Label>Meta Description</Label>
                                                <Input type="text" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>

            <form className="h-full w-full p-2 border-2 border-gray-300 rounded-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between border-b-2 pb-2">
                    <Label className="text-sm font-bold">Intro Section</Label>
                    <Button type="submit">Save</Button>
                </div>
                <div className="mt-2 flex flex-col gap-2 h-fit">
                <div>
                        <Label className="text-sm font-bold">Banner Image</Label>
                        <ImageUploader onChange={(url) => setValue("banner", url)} value={watch("banner")} />
                    </div>
                    <div>
                        <Label className="text-sm font-bold">Banner Alt Tag</Label>
                        <Input type="text" placeholder="Alt Tag" {...register("bannerAlt")} />
                    </div>
                <div>
                        <Label className="text-sm font-bold">Page Title</Label>
                        <Input type="text" placeholder="Title" {...register("pageTitle")} />
                    </div>
                    <div>
                        <Label className="text-sm font-bold">Title</Label>
                        <Input type="text" placeholder="Title" {...register("title")} />
                    </div>
                    <div>
                        <Label className="text-sm font-bold">Description</Label>
                        <Controller name="description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                            return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                        }} />
                    </div>
                </div>
            </form>




            <div className="h-full w-full p-2 border-2 border-gray-300 rounded-md">
                <div className="flex justify-between border-b-2 pb-2">
                    <Label className="text-sm font-bold">Clients</Label>
                    <Dialog>
                        <DialogTrigger className="bg-primary text-white px-2 py-1 rounded-md" onClick={() => { setImage(""); setImageAlt(""); }}>Add Client</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Client</DialogTitle>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Label>Image</Label>
                                        <ImageUploader onChange={(url) => setImage(url)} value={image} />
                                    </div>
                                    <div>
                                        <Label>Alt Tag</Label>
                                        <Input type="text" placeholder="Alt Tag" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
                                    </div>
                                </div>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddClient}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-2  h-fit">
                    {clientList.map((client, index) => (
                        <div key={index} className="relative flex  justify-between border p-1 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <Image src={client.image} alt={client.imageAlt} width={100} height={100} />
                                </div>
                            </div>
                            <div className="absolute top-1 right-1 flex gap-2">
                                <Dialog>
                                    <DialogTrigger className=" text-white px-2 py-1 rounded-md" onClick={() => { setImage(client.image); setImageAlt(client.imageAlt) }}>

                                            <MdEdit className="text-black cursor-pointer"/>

                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edit Client</DialogTitle>
                                            <div className="flex flex-col gap-4">
                                                <div>
                                                    <Label>Image</Label>
                                                    <ImageUploader onChange={(url) => setImage(url)} value={image} />
                                                </div>
                                                <div>
                                                    <Label>Alt Tag</Label>
                                                    <Input type="text" placeholder="Alt Tag" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
                                                </div>
                                            </div>
                                        </DialogHeader>
                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleEditClient(client._id)}>Save</DialogClose>
                                    </DialogContent>

                                </Dialog>
                                
                                    <MdDelete className="mt-1 cursor-pointer text-black" onClick={()=>handleDeleteClient(client._id)}/>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

