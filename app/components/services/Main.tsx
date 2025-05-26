"use client"
import Sbttl from "../common/Sbttl";

import { Services } from '@/public/types/Common';


const Main = ({ data }: { data: Services }) => {
  const serviceArray = Array.isArray(data.services) ? data.services : [data.services];

  return (
    <section className="">
      <div className="container py-[50px] lg:py-25 border-b border-graylit">
      {serviceArray.map((service, index) => (
          <div key={index}>
            <div className="mb-4">
              <Sbttl title={service.title} />
            </div>

          <p className="text-gray font-19">{service.description} </p>
    </div>
      ))}
      </div>
    </section>
   );
}

export default Main;