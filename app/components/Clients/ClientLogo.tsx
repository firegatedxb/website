"use client"
import { assets } from "@/public/assets/assets";
import Image from "next/image";
const items = [assets.cl1, assets.cl2, assets.cl3, assets.cl4, assets.cl5, assets.cl6, assets.cl7, assets.cl8, assets.cl9, assets.cl10,
assets.cl11, assets.cl12, assets.cl13, assets.cl14, assets.cl15, assets.cl16, assets.cl17, assets.cl18, assets.cl19, assets.cl20];

import { Clients } from '@/public/types/Common';


const ClientLogo = ({ data }: { data: Clients }) => {

  console.log(data)
  return (
    <section className="">
      <div className="container py-[50px] lg:py-25 pb-12 lg:pb-[70px] border-b border-graylit">
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