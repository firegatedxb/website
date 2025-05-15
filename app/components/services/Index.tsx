import Main from "./Main";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import ServicesList from "./ServicesList";
const Index = () => {
  return ( 
    <>
    <InnerBanner pageTitle={"Services"} bannerBg={assets.servicesBnr} />
    <Main/>
    <ServicesList/>
    </>
   );
}
 
export default Index;