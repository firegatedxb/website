import Main from "./Main";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import ContentArea from "./ContentArea";
const Index = () => {
  return (
    <>
      <InnerBanner pageTitle={"Services"} bannerBg={assets.servicesBnr} />
      <Main/>
      <ContentArea/>
    </>
  );
}

export default Index;