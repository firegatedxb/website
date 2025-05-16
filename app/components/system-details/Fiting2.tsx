import Main from "./Main";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import ContentArea from "./ContentArea";
import { MainemcyData, systemsexitData } from "./data";
const Index = () => {
  return (
    <>
      <InnerBanner pageTitle={"Emergency Exit Lighting System "} bannerBg={assets.embanner} />
      <Main data={MainemcyData}/>
      <ContentArea data={systemsexitData}/>
    </>
  );
}

export default Index;