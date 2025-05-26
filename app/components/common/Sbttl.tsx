
interface SbttlProps {
  title: string;
}

const Sbttl = ({ title }: SbttlProps) => {
  if (!title) return "";
  const texts =  title.replace(/\./g, '<span class="text-primary">.</span>')
  return (
    <h2 className="text-50 font-medium leading-[1.3] uppercase text-secondary" dangerouslySetInnerHTML={{__html: texts}} >

    </h2>
   );
}

export default Sbttl;