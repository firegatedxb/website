import { Main } from "next/document";
import { services } from "./data";
import Image from "next/image";
import MainBtn from "../common/MainBtn";
const ServicesList = () => {
  return (
    <section className="">
      <div className="container">
        <div>
          {
            services.map((item) => (
              <div className="border-b border-graylit pb-15 lg:py-75" key={item.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <div className="relative flex justify-between items-center mb-6 lg:mb-10">
                      <h3 className="text-32 font-medium leading-1.3 text-black"><span>0{item.id}. </span>{item.title}</h3>
                      <div className="bg-primary p-3 lg:p-4 rounded-2xl w-fit">
                        <Image src={item.icon} alt={item.title} width={31.3} height={31.3}></Image>
                      </div>
                    </div>
                    <div>
                      <p>{item.desc}</p>
                    </div>
                     <div className="mt-auto">
                      <MainBtn btnTxt="VIEW MORE" />
                     </div>
                  </div>
                  <div>
                    <Image src={item.image} alt={item.title} width={400} height={400} className="w-full h-auto object-cover rounded-2xl"></Image>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default ServicesList;