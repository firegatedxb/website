"use client"
import { About } from "@/public/types/Common";
import Sbttl from "../common/Sbttl";
import Image from "next/image";

const Leadership = ({ data }: { data: About }) => {

  return (
    <section className="pt-66 pb-[50px]  lg:pb-[70px]  xl:pb-0 ">
      <div className="container">
        <div className="mb-5 lg:mb-12">
          <div className="mb-4">
            <Sbttl title={data.thirdSection.title} />
          </div>
          <h3 className="text-32 font-medium leading-[1.3125]">{data.thirdSection.description}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10    ">
            <div className="relative group"  >
                  <Image src={data.thirdSection.chairman.image}   alt={data.thirdSection.chairman.imageAlt} width={350} height={300} className="w-[350px] h-auto     object-cover xl:relative xl:bottom-[0px] z-[1] transition duration-300 transform group-hover:translate-x-2 " />

                 <div className="border border-graylit rounded-3xl z-[-1]  transition duration-300 group-hover:shadow-lg  xl:relative xl:bottom-[120px]  ">
                <div className="text-white relative">
                  <div className="rounded-3xl ml-auto pr-10 bg-secondary transition duration-300 group-hover:shadow-lg group-hover:bg-primary p-5 flex xl:items-end flex-col">
                    <div>
                      <h3 className="text-32 font-medium leading-[1.3125] mb-2">{data.thirdSection.chairman.name}</h3>
                      <p className="text-16 font-light">{data.thirdSection.chairman.imageAlt}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 lg:p-10">
                  <p>
                    {data.thirdSection.chairman.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group"  >
                  <Image src={data.thirdSection.ceo.image}   alt={data.thirdSection.ceo.imageAlt} width={350} height={300} className="w-[350px] h-auto     object-cover xl:relative xl:bottom-[0px] z-[1] transition duration-300 transform group-hover:translate-x-2 " />

                 <div className="border border-graylit rounded-3xl z-[-1]  transition duration-300 group-hover:shadow-lg  xl:relative xl:bottom-[120px] ]">
                <div className="text-white relative">
                  <div className="rounded-3xl ml-auto pr-10 bg-secondary transition duration-300 group-hover:shadow-lg group-hover:bg-primary p-5 flex xl:items-end flex-col">
                    <div>
                      <h3 className="text-32 font-medium leading-[1.3125] mb-2">{data.thirdSection.ceo.name}</h3>
                      <p className="text-16 font-light">{data.thirdSection.ceo.imageAlt}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 lg:p-10">
                  <p>
                    {data.thirdSection.ceo.description}
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Leadership;