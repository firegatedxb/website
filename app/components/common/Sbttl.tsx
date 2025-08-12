import { slideInLeft } from "@/public/frameranimation/animation";
import { motion } from "framer-motion";

interface SbttlProps {
  title: string;
}

const Sbttl = ({ title }: SbttlProps) => {
  if (!title) return "";
  const texts =  title.replace(/\./g, '<span class="text-primary">.</span>')
  return (
    <motion.h2 variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={2} className="text-50 font-medium leading-[1.3] uppercase text-secondary" dangerouslySetInnerHTML={{__html: texts}} ></motion.h2>
   );
}

export default Sbttl;