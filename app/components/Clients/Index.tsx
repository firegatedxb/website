import Main from "./Main";
import InnerBanner from "../common/InnerBanner";
import ClientLogo from "./ClientLogo";
import { Clients } from '@/public/types/Common';


const Index = async ({ data }: { data: Clients }) => {
  return (
    <>
    <InnerBanner data={data} />
      <Main data={data}/>
      <ClientLogo />
    </>
   );
}

export default Index;