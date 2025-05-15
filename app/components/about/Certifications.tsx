import Image from "next/image";
import Sbttl from "../common/Sbttl";
import { certifications } from "./data";
const Certifications = () => {
  return (
    <section className="bg-graybg py-10 lg:py-25">
      <div className="container">
        <div className="mb-4 lg:mb-18">
          <Sbttl title="Certifications" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          {certifications.map((item,index) => (
            <div key={index} className="border border-[#cccccc] rounded-2xl max-h-[350px] overflow-hidden relative p-5 lg:p-10">
              <div className="">
                <h3 className="text-32 text-black font-medium leading-[1.3] mb-4 lg:mb-5">{item.title}</h3>
              </div>
              <div className="">
                <Image src={item.image} alt={item.title} width={400} height={500}></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;