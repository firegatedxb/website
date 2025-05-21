import Main from "./Main";
import ContentArea from "./ContentArea";
import { MainemcyData, systemsexitData } from "./data";
const Index = () => {
  return (
    <>
      {/* <InnerBanner pageTitle={"Emergency Exit Lighting System "} bannerBg={assets.embanner} /> */}
      <Main data={MainemcyData}/>
      <ContentArea data={systemsexitData}/>
    </>
  );
}

export default Index;