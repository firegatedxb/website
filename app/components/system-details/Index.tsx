import Main from "./Main";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import ContentArea from "./ContentArea";
import { MainData, systemsCrdData } from "./data";
const Index = () => {
  return (
    <>
      <InnerBanner pageTitle={"Services"} bannerBg={assets.servicesBnr} />
      <Main data={MainData}/>
      <ContentArea data={systemsCrdData}/>
    </>
  );
}

export default Index;