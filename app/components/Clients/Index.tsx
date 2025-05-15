import Main from "./Main";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import ClientLogo from "./ClientLogo";
const Index = () => {
  return (
    <>
    <InnerBanner pageTitle={"our clients"} bannerBg={assets.clientbnr} />
      <Main />
      <ClientLogo />
    </>
   );
}

export default Index;