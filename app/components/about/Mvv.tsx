"use client"
import Image from "next/image";
import { About } from '@/public/types/Common';


const Mvv = ({ data }: { data: About }) => {
  return (
    <section className="pt-[50px] pb-[50px] lg:pb-0 lg:pt-[120px] relative bg-secondary lg:bg-transparent">
      <div className="hidden lg:block absolute w-full h-screen top-0 left-0 bg-secondary z-[-1]"></div>
      <div className="container lg:border-b border-black/20 lg:pb-[120px]">
        <div className="text-white">
          <h2 className="text-white text-50 font-medium leading-[1.3] uppercase mb-5 lg:max-w-[48%]">{data.secondSection.title}</h2>
          <p className="text-19 font-light leading-base max-w-8xl mb-4 lg:mb-6">{data.secondSection.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5 pt-10 lg:pt-25">

    <div
      className="bg-graybg p-8 xl:p-15  flex flex-col rounded-2xl w-full transform transition duration-300 group hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="flex justify-center items-center mb-4 xl:mb-10 bg-primary rounded-2xl w-fit p-4 transition duration-300 group-hover:bg-secondary transform group-hover:-translate-y-1 ">
        <Image
          src={data.secondSection.mission.logo}
          alt={data.secondSection.mission.logoAlt}
          width={50}
          height={50}
          className="flex"
        />
      </div>
      <h3 className="text-50 font-medium leading-1.2 text-black uppercase mb-2 lg:mb-5 transition-colors duration-300 group-hover:text-primary">
        {data.secondSection.mission.logoAlt}
      </h3>
      <p className="text-16 font-light transition-opacity duration-300 opacity-90 group-hover:opacity-100">
        {data.secondSection.mission.description}
      </p>
    </div>
    <div
      className="bg-graybg p-8 xl:p-15  flex flex-col rounded-2xl w-full transform transition duration-300 group hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="flex justify-center items-center mb-4 xl:mb-10 bg-primary rounded-2xl w-fit p-4 transition duration-300 group-hover:bg-secondary transform group-hover:-translate-y-1 ">
        <Image
          src={data.secondSection.vision.logo}
          alt={data.secondSection.vision.logoAlt}
          width={50}
          height={50}
          className="flex"
        />
      </div>
      <h3 className="text-50 font-medium leading-1.2 text-black uppercase mb-2 lg:mb-5 transition-colors duration-300 group-hover:text-primary">
        {data.secondSection.vision.logoAlt}
      </h3>
      <p className="text-16 font-light transition-opacity duration-300 opacity-90 group-hover:opacity-100">
        {data.secondSection.vision.description}
      </p>
    </div>

    <div
      className="bg-graybg p-8 xl:p-15  flex flex-col rounded-2xl w-full transform transition duration-300 group hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="flex justify-center items-center mb-4 xl:mb-10 bg-primary rounded-2xl w-fit p-4 transition duration-300 group-hover:bg-secondary transform group-hover:-translate-y-1 ">
        <Image
          src={data.secondSection.values.logo}
          alt={data.secondSection.values.logoAlt}
          width={50}
          height={50}
          className="flex"
        />
      </div>
      <h3 className="text-50 font-medium leading-1.2 text-black uppercase mb-2 lg:mb-5 transition-colors duration-300 group-hover:text-primary">
        {data.secondSection.values.logoAlt}
      </h3>
      <p className="text-16 font-light transition-opacity duration-300 opacity-90 group-hover:opacity-100">
        {data.secondSection.values.description}
      </p>
    </div>

</div>

      </div>
    </section>
   );
}

export default Mvv;