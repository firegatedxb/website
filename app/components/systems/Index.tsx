import InnerBanner from "../common/InnerBanner";
import Main from "./Main";
import SystemsList from "./SystemsList";
import { systems } from '@/public/types/Common';

const Index = async ({ data }: { data: systems }) => {
  return (
    <>
      <InnerBanner data={data} />
      <Main/>
      <SystemsList/>
    </>
  );
}

export default Index;