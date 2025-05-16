import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const commitmentSection = {
  title: "Built on Commitment. Backed by Integrity.",
  description:
    "At Fire Gate, commitment isn’t a slogan, it’s the standard we hold ourselves to on every site, with every system, and in every interaction. Our work protects people, property, and continuity of operations, and we take that responsibility seriously. From project planning to post-installation service, we stand by our work through measurable performance, long-term support, and ethical practices.",
  items: [
    {
      id: 1,
      text: "Delivering fully compliant, authority-approved solutions",
      icon: assets.built1icon,
    },
    {
      id: 2,
      text: "Maintaining safety-first practices across all operations",
      icon: assets.built2icon,
    },
    {
      id: 3,
      text: "Reducing Impact Through Sustainable Sourcing and Waste Control",
      icon: assets.built3icon,
    },
    {
      id: 4,
      text: "Upholding the trust of our clients, partners, and team members",
      icon: assets.built4icon,
    },
  ],
};

const Built = () => {
  return (
    <div className="relative">
      <div className="container">
        <div className="lg:grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <div
              className="lg:w-[40%] mt-10 lg:mt-0 h-[350px] lg:h-full lg:absolute left-0 object-cover rounded-xl lg:rounded-tl-[0px]  lg:rounded-bl-[0px] bg-no-repeat bg-cover"
              style={{
                backgroundImage: "url('/assets/img/commitment/builtimage.jpg')",
              }}
            ></div>
          </div>
          <div className="col-span-3 lg:pl-10 lg:pr-32 flex flex-col gap-5 pt-[50px] md:pt-[70px] lg:pt-[100px] pb-[20px] md:pb-[30px] lg:pb-[70px]">
            <div className="flex flex-col">
              <h2 className="text-50 text-site-blue uppercase mb-5">
                {commitmentSection.title.split(".").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < commitmentSection.title.split(".").length - 1 && (
                      <span className="text-primary">.</span>
                    )}
                  </span>
                ))}
              </h2>

              <p className="text-gray text-19 mb-5">
                {commitmentSection.description}
              </p>

              {commitmentSection.items.map((item) => (
  <div
    key={item.id}
    className="flex justify-between items-center py-8 group border-b border-[#59595920] last:border-b-0 gap-3 transition-all duration-300 ease-in-out"
  >
    <p className="text-gray text-19 group-hover:text-primary transition-colors duration-300">
      {item.text}
    </p>
    <div className="bg-primary flex justify-center items-center rounded-lg min-w-[36px] min-h-[36px] md:min-w-[50px] md:min-h-[50px] transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:bg-site-blue">
      <Image
        src={item.icon}
        alt={item.text}
        className="transition-transform duration-300 ease-in-out group-hover:translate-y-[2px]"
      />
    </div>
  </div>
))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
