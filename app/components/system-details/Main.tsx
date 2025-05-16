import Sbttl from "../common/Sbttl";

interface FrameworkItem {

    title: string;
    desc: string;

}

interface FrameworkSectionProps {
  data: FrameworkItem[];
}

const Main: React.FC<FrameworkSectionProps> = ({
  data,

}) => {
  return (
    <section className="">
      <div className="container py-15 lg:py-25    ">
        {data.map((Item, index)=>(
          <div key={index}>
            <div className="mb-4">
              <Sbttl title={Item.title} />
            </div>
            <p>{Item.desc}</p>
          </div>
        ))}
          </div>
    </section>
  );
}

export default Main;