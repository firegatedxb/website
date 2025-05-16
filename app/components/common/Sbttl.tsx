
interface SbttlProps {
  title: string;
}

const Sbttl = ({title}:SbttlProps) => {
  return (
    <h2 className="text-50 font-medium leading-[1.3] uppercase text-secondary" dangerouslySetInnerHTML={{__html: title}} >

    </h2>
   );
}

export default Sbttl;