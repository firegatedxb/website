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
import { Textarea } from "@/components/ui/textarea";

interface Client {
    _id: string;
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    name: string;
    logo: string;
    logoAlt: string;
    website: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
}

interface Accreditation {
    _id: string;
    accreditImage: string;
    accreditImageAlt: string;
}

export default function Team() {

    const [image, setImage] = useState<string>("");
    const [imageAlt, setImageAlt] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [logo, setLogo] = useState<string>("");
    const [logoAlt, setLogoAlt] = useState<string>("");
    const [website, setWebsite] = useState<string>("");
    const [partnerList, setPartnerList] = useState<Client[]>([]);
    const { register, handleSubmit, setValue, control, watch } = useForm<Client>();
    const [metaTitle, setMetaTitle] = useState<string>("");
    const [metaDescription, setMetaDescription] = useState<string>("");
    const [accreditList, setAccreditList] = useState<Accreditation[]>([]);
    const [accreditTitle, setAccreditTitle] = useState<string>("");
    const [accreditDescription, setAccreditDescription] = useState<string>("");
    const [accreditImage, setAccreditImage] = useState<string>("");
    const [accreditImageAlt, setAccreditImageAlt] = useState<string>("");

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

    const handleFetchData = async () => {
        try {
            const response = await fetch("/api/admin/partners");
            if (response.ok) {
                const data = await response.json();

                setValue("title", data.data.title);
                setValue("description", data.data.description);
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setPartnerList(data.data.partners);
                setAccreditList(data.data.accredit);
                setMetaTitle(data.data.metaTitle);
                setMetaDescription(data.data.metaDescription);
                setAccreditTitle(data.data.accreditTitle);
                setAccreditDescription(data.data.accreditDescription);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error fetching partners", error);
        }
    }

    // const handleFetchMetaDetails = async () => {
    //     try {
    //         const response = await fetch("/api/admin/partners/meta");
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



    const handleAddPartner = async () => {
        try {
            const response = await fetch("/api/admin/partners", {
                method: "POST",
                body: JSON.stringify({ name,description, logo, logoAlt, image, imageAlt,website }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchData();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error adding partner", error);
        }
    }

    const handleSaveAccreditInfo = async () => {
        try {
            const response = await fetch("/api/admin/partners/accredit/intro", {
                method: "PATCH",
                body: JSON.stringify({ accreditTitle, accreditDescription }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchData();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error adding accredit", error);
        }
    }

    const handleAddAccredit = async () => {
        try {
            const response = await fetch("/api/admin/partners/accredit", {
                method: "POST",
                body: JSON.stringify({ accreditImage, accreditImageAlt }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchData();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error adding accredit", error);
        }
    }

    const handleEditPartner = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/partners?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ image, imageAlt, name,description, logo, logoAlt, website }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchData();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error editing partner", error);
        }
    }

    const handleEditAccredit = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/partners/accredit?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ accreditImage, accreditImageAlt }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchData();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error editing accredit", error);
        }
    }

    const handleDeletePartner = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/partners?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchData();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting partner", error);
        }
    }

    const handleDeleteAccredit = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/partners/accredit?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchData();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting accredit", error);
        }
    }

    useEffect(() => {
        handleFetchData();
    }, [])

    const onSubmit = async (data: Client) => {
        try {
            const response = await fetch("/api/admin/partners/intro", {
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
            const response = await fetch("/api/admin/partners/meta", {
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

            <div className="h-fit w-full p-4 border border-[#ddd] rounded-md mt-5">
                                        <div className="flex justify-between border-b border-[#ddd] pb-2">
                                            <Label className="text-md font-bold text-secondary">Meta Section</Label>
                                            <Button onClick={submitMetaSection} className="text-white cursor-pointer">Save</Button>
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

            <form className="h-full w-full p-4 border border-[#ddd] rounded-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between border-b border-[#ddd] pb-2">
                    <Label className="text-md font-bold text-secondary">Intro Section</Label>
                    <Button type="submit" className="text-white cursor-pointer">Save</Button>
                </div>
                <div className="mt-2 flex flex-col gap-2 h-fit">
                <div>
                        <Label className="text-sm font-bold">Banner</Label>
                        <ImageUploader  value={watch("banner")} onChange={(url) => setValue("banner", url)} />
                    </div>
                    <div>
                        <Label className="text-sm font-bold">Banner Alt</Label>
                        <Input type="text" placeholder="Banner Alt" {...register("bannerAlt")} />
                    </div>
                    <div>
                        <Label className="text-sm font-bold">Page Title</Label>
                        <Input type="text" placeholder="Page Title" {...register("pageTitle")} />
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




            <div className="h-full w-full p-4 border border-[#ddd] rounded-md adminstyle">
                <div className="flex justify-between border-b border-[#ddd] pb-4 mb-4">
                    <Label className="text-md font-bold text-secondary">Partners</Label>
                    <Dialog>
                        <DialogTrigger className="bg-primary h-9 text-white cursor-pointer px-2 text-sm py-1 rounded-md" onClick={() => {setName(""); setLogo(""); setLogoAlt(""); setImage(""); setImageAlt(""); setWebsite(""); }}>Add Partner</DialogTrigger>
                        <DialogContent className="h-[500px] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Add Partner</DialogTitle>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Label>Name</Label>
                                        <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label className="text-sm font-bold">Description</Label>
                                        <ReactQuill theme="snow" value={description} onChange={(value) => setDescription(value)} />
                                    </div>
                                    <div>
                                        <Label>Logo</Label>
                                        <ImageUploader onChange={(url) => setLogo(url)} value={logo} />
                                    </div>
                                    <div>
                                        <Label>Logo Alt Tag</Label>
                                        <Input type="text" placeholder="Logo Alt Tag" value={logoAlt} onChange={(e) => setLogoAlt(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label>Image</Label>
                                        <ImageUploader onChange={(url) => setImage(url)} value={image} />
                                    </div>
                                    <div>
                                        <Label>Alt Tag</Label>
                                        <Input type="text" placeholder="Alt Tag" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label>Website</Label>
                                        <Input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                    </div>
                                </div>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddPartner}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-4  h-fit">
                    {partnerList.map((partner, index) => (
                        <div key={index} className="relative flex  justify-between border border-[#ddd] p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <p className="text-sm ">{partner.name}</p>
                                </div>
                            </div>
                            <div className="absolute top-1 right-1 flex gap-2">
                                <Dialog>
                                    <DialogTrigger className=" text-white px-2 py-1 rounded-md" onClick={() => {setName(partner.name); setLogo(partner.logo); setLogoAlt(partner.logoAlt); setImage(partner.image); setImageAlt(partner.imageAlt);setDescription(partner.description);setWebsite(partner.website); }}>

                                            <MdEdit className="text-black cursor-pointer"/>

                                    </DialogTrigger>
                                    <DialogContent className="h-[500px] overflow-y-auto adminstyle">
                                        <DialogHeader>
                                            <DialogTitle>Edit Partner</DialogTitle>
                                            <div className="flex flex-col gap-4">
                                                <div>
                                                    <Label>Name</Label>
                                                    <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div>
                                                    <Label>Description</Label>
                                                    <ReactQuill theme="snow" value={description} onChange={(value) => setDescription(value)} />
                                                </div>
                                                <div>
                                                    <Label>Logo</Label>
                                                    <ImageUploader onChange={(url) => setLogo(url)} value={logo} />
                                                </div>
                                                <div>
                                                    <Label>Logo Alt Tag</Label>
                                                    <Input type="text" placeholder="Logo Alt Tag" value={logoAlt} onChange={(e) => setLogoAlt(e.target.value)} />
                                                </div>
                                                <div>
                                                    <Label>Image</Label>
                                                    <ImageUploader onChange={(url) => setImage(url)} value={image} />
                                                </div>
                                                <div>
                                                    <Label>Alt Tag</Label>
                                                    <Input type="text" placeholder="Alt Tag" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
                                                </div>
                                                <div>
                                                    <Label>Website</Label>
                                                    <Input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                                </div>
                                            </div>
                                        </DialogHeader>
                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md cursor-pointer" onClick={()=>handleEditPartner(partner._id)}>Save</DialogClose>
                                    </DialogContent>

                                </Dialog>

                                    <MdDelete className="mt-1 cursor-pointer text-black cursor-pointer" onClick={()=>handleDeletePartner(partner._id)}/>

                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="h-full w-full p-4 border border-[#ddd] rounded-md">
                <div className="flex justify-between border-b border-[#ddd] pb-2 mb-2">
                    <Label className="text-md font-bold text-secondary">Accreditation</Label>
                    <Button className="text-white cursor-pointer" onClick={handleSaveAccreditInfo}>Save</Button>
                </div>
                <div>
                    <Label className="text-sm font-bold">Title</Label>
                    <Input type="text" placeholder="Title" value={accreditTitle} onChange={(e) => setAccreditTitle(e.target.value)} />
                </div>
                <div>
                    <Label className="text-sm font-bold">Description</Label>
                    <Textarea placeholder="Description" value={accreditDescription} onChange={(e) => setAccreditDescription(e.target.value)} />
                </div>

                    <div className="flex justify-end mt-5 ">
                <Dialog>
                        <DialogTrigger className="bg-primary  cursor-pointer text-white px-2 text-sm py-1 rounded-md" onClick={() => {setAccreditImage(""); setAccreditImageAlt(""); }}>Add Accreditation</DialogTrigger>
                        <DialogContent className="">
                            <DialogHeader>
                                <DialogTitle>Add Accreditation</DialogTitle>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <Label>Image</Label>
                                        <ImageUploader onChange={(url) => setAccreditImage(url)} value={accreditImage} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Alt Tag</Label>
                                        <Input type="text" placeholder="Alt Tag" value={accreditImageAlt} onChange={(e) => setAccreditImageAlt(e.target.value)} />
                                    </div>
                                </div>
                            </DialogHeader>
                            <DialogClose className="bg-black cursor-pointer text-white px-2 py-1 rounded-md" onClick={handleAddAccredit}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
                    </div>
                <div className="mt-2 grid grid-cols-1 gap-2  h-fit">
                    {accreditList.map((accredit, index) => (
                        <div key={index} className="relative flex  justify-between border border-[#ddd]p-1 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <Image src={accredit.accreditImage} alt={accredit.accreditImageAlt} width={100} height={100} />
                                </div>
                            </div>
                            <div className="absolute top-1 right-1 flex gap-2">
                                <Dialog>
                                    <DialogTrigger className=" text-white px-2 py-1 rounded-md" onClick={() => {setAccreditImage(accredit.accreditImage); setAccreditImageAlt(accredit.accreditImageAlt); }}>

                                            <MdEdit className="text-black cursor-pointer"/>

                                    </DialogTrigger>
                                    <DialogContent className="">
                                        <DialogHeader>
                                            <DialogTitle>Edit Accreditation</DialogTitle>
                                            <div className="flex flex-col gap-4">
                                                <div>
                                                    <Label>Image</Label>
                                                    <ImageUploader onChange={(url) => setAccreditImage(url)} value={accreditImage} />
                                                </div>
                                                <div>
                                                    <Label>Alt Tag</Label>
                                                    <Input type="text" placeholder="Alt Tag" value={accreditImageAlt} onChange={(e) => setAccreditImageAlt(e.target.value)} />
                                                </div>
                                            </div>
                                        </DialogHeader>
                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleEditAccredit(accredit._id)}>Save</DialogClose>
                                    </DialogContent>

                                </Dialog>

                                    <MdDelete className="mt-1 cursor-pointer text-black" onClick={()=>handleDeleteAccredit(accredit._id)}/>

                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

