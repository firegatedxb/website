"use client";
import Image from "next/image";
import { systems } from "@/public/types/Common";
import Link from "next/link";
import { assets } from "@/public/assets/assets";

const SystemsList = ({ data }: { data: systems }) => {
  console.log(data);
  return (
    <section className="py-10 lg:py-25">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-42">

          {data.systems.map((sys,index) => (
            <div className="relative overflow-hidden rounded-2xl lg:h-[651px] p-10 lg:p-20 flex flex-col group" key={index}>

              <div className="absolute bottom-0 left-0 w-full bg-linear-to-tl from-secondary from-100 via-secondary/40  to-transparent group-hover:from-secondary group-hover:from-60 group-hover:bg-linear-to-tr group-hover:via-secondary transition duration-300 h-full z-1"></div>
              <Image src={sys.image} alt={sys.imageAlt} width={789} height={651} className="w-full lg:h-[651px] absolute top-0 left-0 z-0"></Image>
              <div className="bg-primary rounded-xl flex items-center justify-center relative z-10 w-fit p-3">
                <Image src={sys.logo} alt={sys.logoAlt} width={50} height={50} className="w-10 h-10"></Image>
              </div>
              <div className="relative z-20 mt-auto translate-y-[95%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">

                 <Link href={sys.slug ? `/systems/${sys.slug}` : ""} >
                  <h3 className="text-white text-32 leading-1.3 font-medium mb-10 group-hover:mb-5 transition-all duration-300">{sys.title}</h3>
                  </Link>
                <p className="text-white mb-10">{sys.description}</p>
                <Link href={sys.slug ? `/systems/${sys.slug}` : ""} className="w-[50px] h-[50px] rounded-full border bg-white border-black flex items-center justify-center transition-opacity duration-500 ease-in-out  ">
                  <Image src={assets.redarrow} alt="" />
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SystemsList;