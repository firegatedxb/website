"use client"
import Image from "next/image";

import { Clients } from '@/public/types/Common';


const ClientLogo = ({ data }: { data: Clients }) => {


  return (
    <section className="">
      <div className="container py-[50px] lg:py-25 pb-[50px] lg:pb-20 border-b border-graylit">
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 scale-[1.01] ">
          {data.clients.map((item, i) => (
              <div key={i} className="border-b group border-r border-[#59595920]">
              <Image src={item.image} alt={item.imageAlt} width={315} height={216} className="grayscale-[1] group-hover:grayscale-0 transition-all duration-300  "/>
            </div>
          ))}
        </div>
        </div>
        </div>
    </section>
   );
}

export default ClientLogo;