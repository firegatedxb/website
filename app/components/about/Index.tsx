import InnerBanner from "../common/InnerBanner";
import MainDesc from "./MainDesc";
import { assets } from "@/public/assets/assets";
import Mvv from "./Mvv";
import Leadership from "./Leadership";
import Certifications from "./Certifications";


const Index = () => {
  return (
    <>
      <InnerBanner pageTitle={"About FIre Gate"} bannerBg={assets.aboutBnr} />
      <MainDesc />
      <Mvv />
      <Leadership />
      <Certifications />
      {/* <Clients /> */}
    </>
   );
}

export default Index;