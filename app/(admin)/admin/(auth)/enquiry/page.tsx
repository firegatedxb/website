"use client"

import AdminItemContainer from '@/app/components/AdminItemContainer/AdminItemContainer';
import { Label } from '@radix-ui/react-label';
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import moment from "moment";
import { Textarea } from '@/components/ui/textarea';

const Enquiry = () => {

    const [enquiryList, setEnquiryList] = useState<{_id:string,name:string,email:string,phone:string,message:string,type:string,createdAt:string}[]>([]);

    const handleFetchEnquiry = async () => {
        try {
            const response = await fetch("/api/admin/enquiry");
            if (response.ok) {
                const data = await response.json();
                setEnquiryList(data.data);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error fetching enquiry", error);
        }
    }

    useEffect(() => {
        handleFetchEnquiry();
    }, [])

    const handleDeleteEnquiry = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/enquiry?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchEnquiry();
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting enquiry", error);
        }
    }
    
  return (
    <AdminItemContainer>
                <div className="flex justify-between items-center border-b border-[#ddd] pb-4 mb-4 p-5">
                    <Label className="text-md font-bold text-black">Enquiries</Label>
                </div>
                <div className="grid grid-cols-1 gap-2  h-fit p-5">
                    {enquiryList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((enquiry, index) => (
                        <div key={index} className="relative flex  justify-between border border-[#ddd] p-1 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                            <div>
                                <p>{enquiry.email}</p>
                            </div>
                            <div className="flex gap-5">
                            <Dialog>
                                
                        <DialogTrigger className="cursor-pointer"><IoEyeSharp /></DialogTrigger>
                        <DialogContent>
                            <DialogHeader className="adminstyle">
                                <DialogTitle>Enquiry Details</DialogTitle>
                                <div className="flex flex-col gap-4 h-[500px] overflow-y-auto">
                                    <div>
                                        <Label>Name</Label>
                                        <Input defaultValue={enquiry.name} readOnly />
                                    </div>
                                    <div>
                                        <Label>Email</Label>
                                        <Input defaultValue={enquiry.email} readOnly />
                                    </div>
                                    <div>
                                        <Label>Phone</Label>
                                        <Input defaultValue={enquiry.phone} readOnly />
                                    </div>
                                    <div>
                                        <Label>Message</Label>
                                        <Textarea defaultValue={enquiry.message} readOnly />
                                    </div>
                                    <div>
                                        <Label>Type</Label>
                                        <Input defaultValue={enquiry.type} readOnly />
                                    </div>
                                    <div>
                                        <Label>Created At</Label>
                                        <Input defaultValue={moment(enquiry.createdAt).format('LL')} readOnly />
                                    </div>
                                </div>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer">Close</DialogClose>
                        </DialogContent>

                    </Dialog>
                    <Dialog>
                        <DialogTrigger><MdDelete /></DialogTrigger>
                        <DialogContent>
                            <DialogHeader className="adminstyle">
                                <DialogTitle>Are you sure you want to delete this enquiry?</DialogTitle>
                            </DialogHeader>
                            <div className="flex gap-2 justify-end">
                            <DialogClose className="bg-red-500 text-white px-2 py-1 rounded-md text-sm cursor-pointer" onClick={() => handleDeleteEnquiry(enquiry._id)}>Delete</DialogClose>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer">Close</DialogClose>
                            </div>
                        </DialogContent>

                    </Dialog>
                    </div>
                        </div>
                    ))}
                </div>
            </AdminItemContainer>
  )
}

export default Enquiry