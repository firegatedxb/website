import Image from "next/image";
import { mvvMain } from "./data";
import { mvvCard } from "./data";
const Mvv = () => {
  return ( 
    <section className="pt-10 pb-10 lg:pb-0 lg:pt-[120px] relative bg-secondary lg:bg-transparent">
      <div className="hidden lg:block absolute w-full h-screen top-0 left-0 bg-secondary z-[-1]"></div>
      <div className="container lg:border-b border-black/20 lg:pb-[120px]">
        <div className="text-white">
          <h2 className="text-white text-50 font-medium leading-[1.3] uppercase mb-5 lg:max-w-[48%]">{mvvMain.title}</h2>
          <p className="text-19 font-light leading-base max-w-8xl mb-4 lg:mb-6">{mvvMain.desc1}</p>
          <p className="text-19 font-light leading-base max-w-8xl">{mvvMain.desc2}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5 pt-10 lg:pt-25">
          {mvvCard.map((item) => (
              <div key={item.id} className="bg-graybg p-8 lg:p-15 shadow-lg flex flex-col rounded-2xl w-full">
                <div className="flex justify-center items-center mb-4 lg:mb-10 bg-primary rounded-2xl w-fit p-4">
                  <Image src={item.icon} alt={item.title} width={50} height={50} className="flex" />
                </div>
                <h3 className="text-50 font-medium leading-1.2 text-black uppercase mb-2 lg:mb-5">{item.title}</h3>
                <p className="text-16 font-light">{item.desc}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
   ); 
}
 
export default Mvv;