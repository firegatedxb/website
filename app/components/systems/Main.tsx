"use client";
import Sbttl from "../common/Sbttl";
import { systems } from "@/public/types/Common";

const Main = ({ data }: { data: systems }) => {
  const serviceArray = Array.isArray(data.systems)
    ? data.systems
    : [data.systems];
  console.log(data);
  console.log(serviceArray);
  return (
    <section className="">
      <div className="container py-[50px] lg:py-25 border-b border-graylit">
        <div className="mb-4">
          <Sbttl title={data.title} />
        </div>
        <div dangerouslySetInnerHTML={{__html: data.description}}></div>
      </div>
    </section>
  );
};

export default Main;
