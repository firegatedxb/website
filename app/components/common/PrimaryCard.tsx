import Image from "next/image";
import { StaticImageData } from "next/image";
interface crdProps {
  crdImg:string | StaticImageData,
  crdTitle:string,
  crdDesc:string
}
const PrimaryCard = ({crdImg,crdTitle,crdDesc}:crdProps) => {
  return (
    <div className="relative overflow-hidden hover:bg-secondary hover:border-white  rounded-xl border border-gray/20 group transition-all duration-300 ">
      <div className="overflow-hidden h-40 lg:h-[290px]">
        <Image src={crdImg} alt={crdTitle} width={400} height={400} className="w-full h-full group-hover:scale-105 transition-all duration-300 object-cover d-flex"></Image>
      </div>
      <div className="p-4 lg:p-[30px]  transition-all duration-300">
        <h3 className="mb-4 font-medium text-32 leading-1.3 text-black group-hover:text-white transition-colors duration-300">{crdTitle}</h3>
        <p className="text-gray group-hover:text-white transition-colors duration-300">{crdDesc}</p>
      </div>
    </div>
   );
}

export default PrimaryCard;