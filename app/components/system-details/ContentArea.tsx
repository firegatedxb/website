
import { StaticImageData } from "next/image";
import PrimaryCard from "../common/PrimaryCard";
import Sbttl from "../common/Sbttl";
interface FrameworkItem {
  id: number;
  img: StaticImageData | string;
    title: string;
    desc: string;
}
interface FrameworkI {
  heading:string;
  description:string;
  items: FrameworkItem[];
}
interface FrameworkSectionProps {

  data: FrameworkI;
}

const ContentArea: React.FC<FrameworkSectionProps> = ({
  data,

}) => {
  return (
    <section className="pb-[50px] lg:pb-25">
      <div className="container">
          <div>
            <div className="mb-4">
              <Sbttl title={data.heading} />
          </div>
          {data.description &&
            <p>{data.description}</p>
          }

          </div>
        <div className="mt-10 lg:mt-[70px]">
          <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              data.items.map(item =>(
                <PrimaryCard key={item.id} crdImg={item.img} crdTitle={item.title} crdDesc={item.desc} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
   );
}

export default ContentArea;