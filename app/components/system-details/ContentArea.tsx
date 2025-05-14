import { it } from "node:test";
import PrimaryCard from "../common/PrimaryCard";
import Sbttl from "../common/Sbttl";
import { systemsCrdData } from "./data";
const ContentArea = () => {
  return ( 
    <section className="py-5 lg:py-25">
      <div className="container">
        <div className="mb-4">
          <Sbttl title="Core Components" />
        </div>
        <p>Engineered for precise response, compliance, and performance in high-risk environments. We supply and install a full range of solutions, including :</p>
        <div className="mt-10">
          <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              systemsCrdData.map(item =>(
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