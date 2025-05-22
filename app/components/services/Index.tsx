import Main from "./Main";
import InnerBanner from "../common/InnerBanner";
import ServicesList from "./ServicesList";
import { Services } from '@/public/types/Common';


const Index = async ({ data }: { data: Services }) => {
  return (
    <>
      <InnerBanner data={data} />
    <Main data={data}/>
    <ServicesList data={data}/>
    </>
   );
}

export default Index;