import InnerBanner from "../common/InnerBanner";
import MainDesc from "./MainDesc";
import { assets } from "@/public/assets/assets";
import Mvv from "./Mvv";
import Leadership from "./Leadership";
import Certifications from "./Certifications";
import { About } from '@/public/types/Common';


const Index = async ({ data }: { data: About }) => {
  return (
    <>
      <InnerBanner data={data} />
      <MainDesc data={data}/>
      <Mvv data={data}/>
      <Leadership data={data}/>
      <Certifications data={data}/>
      {/* <Clients /> */}
    </>
   );
}

export default Index;