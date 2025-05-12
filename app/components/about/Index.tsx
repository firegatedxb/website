import InnerBanner from "../common/InnerBanner";
import MainDesc from "./MainDesc";
import { assets } from "@/public/assets/assets";

const Index = () => {
  return ( 
    <>
      <InnerBanner pageTitle={"About Us"} bannerBg={assets.aboutBnr} />
      <MainDesc />
    </>
   );
}
 
export default Index;