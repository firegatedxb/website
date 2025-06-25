"use client"

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MdDelete, MdEdit } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";


export default function Projects() {

  const [oldSector, setOldSector] = useState<string>("");
  const [oldCountry, setOldCountry] = useState<string>("");
  const [sector, setSector] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [client, setClient] = useState<string>("");
  const [oldClient, setOldClient] = useState<string>("");
  const [projectList, setProjectList] = useState<{ _id: string, name: string, client: string, industry: string, scope: string, location: string, description: string }[]>([]);
  const [countryList, setCountryList] = useState<{ _id: string, name: string }[]>([]);
  const [clientList, setClientList] = useState<{ _id: string, name: string }[]>([]);
  const [sectorList, setSectorList] = useState<{ _id: string, name: string }[]>([]);
  const [metaTitle, setMetaTitle] = useState<string>("");
  const [metaDescription, setMetaDescription] = useState<string>("");
  const router = useRouter();

  const handleFetchProjects = async () => {
    try {
      const response = await fetch("/api/admin/project");
      if (response.ok) {
        const data = await response.json();
        setProjectList(data.data);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching industry", error);
    }
  }

  const handleAddClient = async () => {
    try {
      const response = await fetch("/api/admin/project/client", {
        method: "POST",
        body: JSON.stringify({ name: client }),
      });
      if (response.ok) {
        const data = await response.json();
        setClient("");
        alert(data.message);
        handleFetchClient();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error adding client", error);
    }
  }

  const handleFetchClient = async () => {
    try {
      const response = await fetch("/api/admin/project/client");
      if (response.ok) {
        const data = await response.json();
        setClientList(data.data);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching client", error);
    }
  }

  const handleEditClient = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/project/client?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify({ name: client, oldName: oldClient }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchClient();
        setOldClient("");
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
      const response = await fetch(`/api/admin/project/client?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchClient();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting client", error);
    }
  }

  const handleAddSector = async () => {
    try {
      const response = await fetch("/api/admin/sector", {
        method: "POST",
        body: JSON.stringify({ name: sector }),
      });
      if (response.ok) {
        const data = await response.json();
        setSector("");
        alert(data.message);
        handleFetchSector();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error adding sector", error);
    }
  }

  const handleFetchSector = async () => {
    try {
      const response = await fetch("/api/admin/sector");
      if (response.ok) {
        const data = await response.json();
        setSectorList(data.data);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching sector", error);
    }
  }

  const handleEditSector = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/sector?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify({ name: sector, oldName: oldSector }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchSector();
        setOldSector("");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error editing sector", error);
    }
  }

  const handleDeleteSector = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/sector?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchSector();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting sector", error);
    }
  }


  const handleFetchCountry = async () => {
    try {
      const response = await fetch("/api/admin/location");
      if (response.ok) {
        const data = await response.json();
        setCountryList(data.data);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching location", error);
    }
  }

  const handleAddCountry = async () => {
    try {
      const response = await fetch("/api/admin/location", {
        method: "POST",
        body: JSON.stringify({ name: country }),
      });
      if (response.ok) {
        const data = await response.json();
        setCountry("");
        alert(data.message);
        handleFetchCountry();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error adding location", error);
    }
  }

  const handleEditCountry = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/location?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify({ name: country, oldName: oldCountry }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchCountry();
        setOldCountry("");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error editing location", error);
    }
  }

  const handleDeleteCountry = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/location?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchCountry();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting location", error);
    }
  }

  const handleDeleteProject = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/project?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchProjects();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting project", error);
    }
  }

  const handleSaveMeta = async() => {
    try {
      const response = await fetch("/api/admin/project/meta",{
        method: "POST",
        body: JSON.stringify({ metaTitle, metaDescription }),
      });
      if(response.ok) {
        const data = await response.json();
        alert(data.message);
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error saving meta details", error);
    }
  }

  const fetchMeta = async() => {
    try {
      const response = await fetch("/api/admin/project/meta");
      if(response.ok) {
        const data = await response.json();

        setMetaTitle(data.data.metaTitle);
        setMetaDescription(data.data.metaDescription);
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching meta details", error);
    }
  }

  useEffect(() => {
    handleFetchProjects();
    handleFetchSector();
    handleFetchCountry();
    handleFetchClient();
    fetchMeta();
  }, [])

  return (
    <div className="flex flex-col gap-5 adminstyle">

      <div className="h-fit w-full p-4 pt-2 border border-[#ddd] rounded-md mt-5">
        <div className="flex justify-between border-b border-[#ddd] pb-2">
          <Label className="text-md font-bold text-secondary">Meta Section</Label>
          <Button onClick={handleSaveMeta} className="text-white cursor-pointer ">Save</Button>
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

      <div className="h-screen grid grid-cols-2 gap-5">

        <div className="flex flex-col gap-2 h-screen">
          <div className="h-1/2 w-full p-4 pt-2 border border-[#ddd] rounded-md overflow-y-hidden mb-3">
            <div className="flex justify-between justify-items-center align-items-center   border-b border-[#ddd] pb-3 mb-3">
              <Label className="text-md font-bold text-secondary">Sector</Label>
              <Dialog>
                <DialogTrigger className="bg-primary text-white px-2  cursor-pointer rounded-md text-sm h-9" onClick={() => setSector("")}>Add Sector</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle >Add Sector</DialogTitle>
                    <DialogDescription>
                      <Input type="text" placeholder="Sector Name" value={sector} onChange={(e) => setSector(e.target.value)} />
                    </DialogDescription>
                  </DialogHeader>
                  <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddSector}>Save</DialogClose>
                </DialogContent>

              </Dialog>
            </div>
            <div className="mt-2 flex flex-col gap-3 overflow-y-scroll h-full">
              {sectorList.map((item) => (
                <div className="flex justify-between border border-[#ddd] p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                 <p className="mb-0 text-sm stps">
                    {item.name}
                  </p>
                  <div className="flex gap-5">
                    <Dialog>
                      <DialogTrigger onClick={() => { setSector(item.name); setOldSector(item.name) }}><MdEdit /></DialogTrigger>
                      <DialogContent className="adminstyle">
                        <DialogHeader>
                          <DialogTitle><p className="text-sm">Edit Sector</p></DialogTitle>
                          <DialogDescription>
                            <Input type="text" placeholder="Sector Name" value={sector} onChange={(e) => setSector(e.target.value)} />
                          </DialogDescription>
                        </DialogHeader>
                        <DialogClose className="bg-black text-white cursor-pointer px-2 py-1 rounded-md" onClick={() => handleEditSector(item._id)}>Save</DialogClose>
                      </DialogContent>

                    </Dialog>



                    <Dialog>
                      <DialogTrigger><MdDelete /></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you sure?</DialogTitle>
                        </DialogHeader>
                        <div className="flex gap-2">
                          <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                          <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteSector(item._id)}>Yes</DialogClose>
                        </div>

                      </DialogContent>

                    </Dialog>

                  </div>
                </div>
              ))}

            </div>
          </div>


          <div className="h-1/2 w-full p-2 border  border-[#ddd] rounded-md overflow-y-hidden mb-3">
            <div className="flex justify-between align-items-center border-b border-[#ddd] pb-3 mb-3">
              <Label className="text-md font-bold text-secondary">Category</Label>
              <Dialog>
                <DialogTrigger className="bg-primary text-white cursor-pointer px-2 text-sm rounded-md h-9" onClick={() => setCountry("")}>Add Category</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Category</DialogTitle>
                    <DialogDescription>
                      <Input type="text" placeholder="Category Name" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </DialogDescription>
                  </DialogHeader>
                  <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddCountry}>Save</DialogClose>
                </DialogContent>

              </Dialog>
            </div>
            <div className="h-full">

              <div className="mt-2 flex flex-col gap-3 overflow-y-scroll h-full">
                {countryList.map((item) => (
                  <div className="flex justify-between border border-[#ddd] p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                    <p className="mb-0 text-sm stps">
                      {item.name}
                    </p>
                    <div className="flex gap-5">
                      <Dialog>
                        <DialogTrigger onClick={() => { setCountry(item.name); setOldCountry(item.name) }}><MdEdit /></DialogTrigger>
                        <DialogContent className="adminstyle">
                          <DialogHeader>
                            <DialogTitle><p className="text-sm">Edit Country</p></DialogTitle>
                            <DialogDescription>
                              <Input type="text" placeholder="Country Name" value={country} onChange={(e) => setCountry(e.target.value)} />
                            </DialogDescription>
                          </DialogHeader>
                          <DialogClose className="bg-black text-sm cursor-pointer text-white px-2 py-1 rounded-md" onClick={() => handleEditCountry(item._id)}>Save</DialogClose>
                        </DialogContent>

                      </Dialog>



                      <Dialog>
                        <DialogTrigger><MdDelete /></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                          </DialogHeader>
                          <div className="flex gap-2">
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteCountry(item._id)}>Yes</DialogClose>
                          </div>

                        </DialogContent>

                      </Dialog>

                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>


          <div className="h-1/2 w-full p-2 border border-[#ddd] rounded-md overflow-y-hidden adminstyle">
            <div className="flex justify-between align-items-center border-b border-[#ddd]   pb-3 mb-3">
              <Label className="text-md font-bold text-secondary">Clients</Label>
              <Dialog>
                <DialogTrigger className="bg-primary cursor-pointer text-white px-2 py-1 rounded-md text-sm h-9" onClick={() => setClient("")}>Add Client</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Client</DialogTitle>
                    <DialogDescription>
                      <Input type="text" placeholder="Client Name" value={client} onChange={(e) => setClient(e.target.value)} />
                    </DialogDescription>
                  </DialogHeader>
                  <DialogClose className="bg-black cursor-pointer text-white px-2 py-1 rounded-md" onClick={handleAddClient}>Save</DialogClose>
                </DialogContent>

              </Dialog>
            </div>
            <div className="h-full">

              <div className="mt-2 flex flex-col gap-3 overflow-y-scroll h-full">
                {clientList.map((item) => (
                  <div className="flex justify-between border border-[#ddd] p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                   <p className="mb-0 text-sm stps">
                      {item.name}
                    </p>
                    <div className="flex gap-5">
                      <Dialog>
                        <DialogTrigger onClick={() => { setClient(item.name); setOldClient(item.name) }}><MdEdit /></DialogTrigger>
                        <DialogContent>
                          <DialogHeader className="adminstyle">
                            <DialogTitle>Edit Client</DialogTitle>
                            <DialogDescription>
                              <Input type="text" placeholder="Client Name" value={client} onChange={(e) => setClient(e.target.value)} />
                            </DialogDescription>
                          </DialogHeader>
                          <DialogClose className="bg-black cursor-pointer text-white px-2 py-1 rounded-md" onClick={() => handleEditClient(item._id)}>Save</DialogClose>
                        </DialogContent>

                      </Dialog>



                      <Dialog>
                        <DialogTrigger><MdDelete /></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                          </DialogHeader>
                          <div className="flex gap-2">
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteClient(item._id)}>Yes</DialogClose>
                          </div>

                        </DialogContent>

                      </Dialog>

                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>

        <div className="h-screen w-full p-4 border border-[#ddd] rounded-md overflow-y-hidden">
          <div className="flex justify-between align-items-center border-b border-[#ddd] pb-3 mb- ">
            <Label className="text-md font-bold text-secondary">Projects</Label>
            <Button onClick={() => router.push("/admin/projects/add")} className="text-white h-9 text-sm cursor-pointer">Add Project</Button>
          </div>
          <div className="mt-2 flex flex-col gap-3 overflow-y-scroll h-full">
            {projectList.map((item) => (
              <div className="flex justify-between border border-[#ddd] p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
               <p className="mb-0 text-sm stps">
                  {item.name}
               </p>
                <div className="flex gap-5">
                  <MdEdit onClick={() => router.push(`/admin/projects/edit/${item._id}`)} />

                  <Dialog>
                    <DialogTrigger><MdDelete /></DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                      </DialogHeader>
                      <div className="flex gap-2">
                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteProject(item._id)}>Yes</DialogClose>
                      </div>

                    </DialogContent>

                  </Dialog>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
}
