"use client";
import Sbttl from "../common/Sbttl";

import {systems } from '@/public/types/Common';


const Main = ({ data }: { data: systems }) => {
console.log(data);
  return (
    <section className="">
      <div className="container py-15 lg:py-25    ">

          <div>
            <div className="mb-4">
              <Sbttl title={data.introTitle} />
            </div>
            <p className="text-gray">{data.introDescription}</p>
          </div>

          </div>
    </section>
  );
}

export default Main;