"use client";
import PrimaryCard from "../common/PrimaryCard";
import Sbttl from "../common/Sbttl";

import {systems } from '@/public/types/Common';


const ContentArea = ({ data }: { data: systems }) => {
  return (
    <section className="pb-[50px] lg:pb-25">
      <div className="container">
          <div>
            <div className="mb-4">
              <Sbttl title={data.componentTitle} />
          </div>
          {data.componentDescription &&
            <p className="text-gray">{data.componentDescription}</p>
          }

          </div>
        <div className="mt-10 lg:mt-[70px]">
          <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              data.components.map((item,index) =>(
                <PrimaryCard key={index} crdImg={item.image} crdTitle={item.title} crdDesc={item.description} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
   );
}

export default ContentArea;