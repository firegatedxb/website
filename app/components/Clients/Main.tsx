"use client"
import Sbttl from "../common/Sbttl";
import { Clients } from '@/public/types/Common';


const Main = ({ data }: { data: Clients }) => {
  return (
    <section className="">
      <div className="container py-15 lg:py-25 pb-12 lg:pb-[70px] border-b border-graylit">
        <div className="mb-4">
          <Sbttl title={data.title} />
        </div>
        <div dangerouslySetInnerHTML={{__html: data.description}}></div>
      </div>
    </section>
   );
}

export default Main;