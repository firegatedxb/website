import Main from "./Main";
import {MainffData,systemsCrdData} from "./data";
import ContentArea from "./ContentArea";
const Index = () => {
  return (
    <>
      {/* <InnerBanner pageTitle={"fire fighting system"} bannerBg={assets.ffbanner} /> */}
      <Main data={MainffData} />
      <ContentArea data={systemsCrdData} />
    </>
  );
}

export default Index;