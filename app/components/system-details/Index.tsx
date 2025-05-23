import Main from "./Main";
import ContentArea from "./ContentArea";
import {systems } from '@/public/types/Common';
import InnerBanner from "../common/InnerBanner";



const Index = async ({ data }: { data: systems }) => {
  return (
    <>
      <InnerBanner data={data} />
      <Main data={data}/>
      <ContentArea data={data}/>
    </>
  );
}

export default Index;