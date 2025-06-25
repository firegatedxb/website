
import {
    ArrowRightOnRectangleIcon,
  } from "@heroicons/react/24/outline";
  import ClientSideLink from "../client-side-link";
  import AdminNavbar from "@/app/components/AdminNavbar/Index";
import Image from "next/image";


  
  
  export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen bg-[#fbfbfb]">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md flex flex-col">
          
          <div className="flex-1">
            <div className=" py-5 px-4 flex flex-col gap-2 border-b border-gray-200 bg-white">
            <div>
              <div className="flex items-center justify-center">
                <Image src="/assets/img/logo.svg" alt="Logo" width={150} height={150}
                className="h-[35px] w-[200px]" />
              </div>
          <p className="mb-0 text-center text-[10px]  text-gray xl:mt-1">Protection Without Compromise</p>
        
            </div>
            </div>  
            <div className="flex-1 px-3 py-4 " >
            <nav className="space-y-1">
              <AdminNavbar />
            </nav>
            </div>
            </div>
  
          {/* Logout Section */}
          <div className="px-3    ">
           <div className="px-3 py-4 border-t border-gray-200">
           <ClientSideLink
              href="/admin/logout"
              name="Logout"
              icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}
              className="text-red-600 hover:bg-red-50 hover:text-red-700"
            />
           </div>
          </div>
        </aside>
  
        {/* Main content */}
        <main className="flex-1  h-screen overflow-y-auto p-8">{children}</main>
      </div>
    );
  }
  