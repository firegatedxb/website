import Sbttl from "../common/Sbttl";
import { leaders } from "./data";
import Image from "next/image";
const Leadership = () => {
  return (
    <section className="pt-66 pb-36">
      <div className="container">
        <div className="mb-5 lg:mb-12">
          <div className="mb-4">
            <Sbttl title="Leadership" />
          </div>
          <h3 className="text-32 font-medium leading-[1.3125]">Visionary Leaders Behind Fire Gate&apos;s Success</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 h-[80dvh] items-end">
          {leaders.map((item,index) => (
            <div className="relative" key={index}>
              <div className="border border-graylit rounded-3xl z-[-1] h-full min-h-[400px] lg:min-h-[400px] ">
                <div className="text-white relative">
                  <Image src={item.image} width={400} height={400} alt={item.name} className="w-100 h-auto absolute bottom-0"></Image>
                  <div className="rounded-3xl ml-auto pr-10 bg-secondary p-5 flex items-end flex-col">
                    <div>
                      <h3 className="text-32 font-medium leading-[1.3125] mb-2">{item.name}</h3>
                      <p className="text-16 font-light">{item.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 lg:p-10">
                  <p>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;