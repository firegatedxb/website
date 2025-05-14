import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import Main from "./Main";
import SystemsList from "./SystemsList";
const Index = () => {
  return (
    <>
      <InnerBanner pageTitle={"Our Systems"} bannerBg={assets.systemsBnr} />
      <Main/>
      <SystemsList/>
    </>
  );
}

export default Index;