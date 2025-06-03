"use client";

import React, { useState } from "react";
import Sbttl from "../common/Sbttl";
import Image, { StaticImageData } from "next/image";
import { About } from "@/public/types/Common";
import { motion } from "framer-motion";
import { cardVariant } from "@/public/frameranimation/animation";


const Certifications = ({ data }: { data: About }) => {

  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);

  return (
    <section className="bg-graybg py-10 lg:py-25">
      <div className="container">
        <div className="mb-4 lg:mb-18">
          <Sbttl title="Certifications" />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            {data.certifications.map((item ,index) => (
              <motion.div
                key={index}
                {...cardVariant(0.4)}
                viewport={{ once: true, amount: 0.3 }}
                className="border group border-[#cccccc] transition duration-300 hover:shadow-lg rounded-2xl max-h-[350px] overflow-hidden relative p-5 xl:p-10 transform hover:-translate-y-1"
                onClick={() => setSelectedImage(item.image)}
                style={{ cursor: "pointer" }}
              >
                <h3 className="text-32 text-black font-medium leading-[1.3] mb-4 lg:mb-5">{item.title}</h3>
                <div className="overflow-hidden h-[205px]"><Image src={item.image} alt={item.title} width={400} height={500} className="m-auto"/></div>
              </motion.div>
            ))}
          </div>

        {/* Modal for Image Popup */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-[#000000a6] flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer"
            >
              &times;
            </button>
            <div
              className="relative p-4 bg-white rounded-xl max-w-[90%] max-h-[90%]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                width={500} height={800}
                alt="Selected Certification"
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
