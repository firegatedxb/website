import { systemsData } from "./data";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";
const SystemsList = () => {
  return (
    <section className="py-10 lg:py-25">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-42">
          {systemsData.map((sys,index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl lg:h-[651px] p-10 lg:p-20 flex flex-col group">
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-tl from-secondary from-100 via-secondary/40  to-transparent group-hover:from-secondary group-hover:from-60 group-hover:bg-linear-to-tr group-hover:via-secondary transition duration-300 h-full z-1"></div>
              <Image src={sys.mainImg} alt={sys.title} width={789} height={651} className="w-full lg:h-[651px] absolute top-0 left-0 z-0"></Image>
              <div className="bg-primary rounded-xl flex items-center justify-center relative z-10 w-fit p-3">
                <Image src={sys.icon} alt={sys.title} width={50} height={50} className="w-10 h-10"></Image>
              </div>
              <div className="relative z-20 mt-auto translate-y-[95%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h3 className="text-white text-32 leading-1.3 font-medium mb-10 group-hover:mb-5 transition-all duration-300">{sys.title}</h3>
                <p className="text-white mb-10">{sys.desc}</p>
                <Link href={`systems/${sys.id}`} className="w-[50px] h-[50px] rounded-full border bg-white border-black flex items-center justify-center transition-opacity duration-500 ease-in-out  ">
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