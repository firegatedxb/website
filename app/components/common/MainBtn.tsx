import { assets } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";
interface MainBtnProps {
  btnTxt: string;
}
// MainBtn component
const MainBtn = ({btnTxt}:MainBtnProps) => {
  return (
    <Link href="#" className="flex cursor-pointer items-center bg-red-600 hover:bg-red-700 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase group">
      <span>{btnTxt}</span>
      <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center ">
        <Image src={assets.bluearrowRight} width={14} height={28} alt="read-more" className="w-full h-[14px] object-contain group-hover:animate-pulse"></Image>
      </span>
    </Link>
  );
}

export default MainBtn;