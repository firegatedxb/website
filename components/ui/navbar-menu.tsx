"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import arrow from "@/public/assets/img/home/arrow.svg";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  url,
  children,
  noMenu,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  url: string;
  children?: React.ReactNode;
  noMenu?: boolean;
}) => {

  return (
    <div
      onMouseEnter={() => (noMenu ? setActive(null) : setActive(item))}
      className="relative mr-0 ml-3 lg:ml-[25px] xl:ml-[35px] first:lg:ml-[45px] first:xl:ml-[65px]">
      <div className="flex gap-2 mb-0">
        <Link href={url}>
          <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-[#1F1F1F] font-medium hover:text-secondary dark:text-white text-xs uppercase transition-all duration-500 ease-in-out">
            <span className="flex gap-3 mediatext text-[17px] hover:text-primary transition-all duration-300 ">{item}</span>
          </motion.p>
        </Link>
        {!noMenu && <Image src={arrow} alt="arrow" className="arrowst" />}
      </div>
      {active !== null && !noMenu && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className="">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white absolute dark:bg-black backdrop-blur-sm mt-6 overflow-hidden rounded-[8px] dark:border-white/[0.2] shadow-xl">
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full px-3  ">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {



  return (
        <div className="relative">

      <nav
        onMouseLeave={() => setActive(null)} // resets the state
        className=" relative bg-[#F9F9F9] z-50 dark:bg-black dark:border-white/[0.2] shadow-input flex justify-center items-stretch  gap-2 xl:gap-[42px]  h-full">
        <div className="left-spacing pr-[20px] xxl:pr-[20px] xxxl:pr-[50px] w-full flex items-center justify-between gap-3 pt-[16.5px] pb-[21px]  ">
          <div className="flex items-center ">
            <Link href="/">
              <Image
                src="/assets/img/logo.svg"
                alt="Crest Logo"
                width={80}
                height={50}
                className="h-[41px] logocsi w-auto"
              />
            </Link>
          </div>
          <div>

            <div>
              <Link href="tel:9744327677" className="flex items-center justify-end gap-2 text-17 font-bold text-gray-800  leading-tight  group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-bounce">
              <g clipPath="url(#clip0_160_2538)">
                <path
                  d="M20.3365 20.4023C20.0724 20.9861 19.4771 21.4938 18.5507 21.9254C17.6284 22.3569 16.8068 22.5727 16.0857 22.5727C15.8845 22.5727 15.6707 22.5558 15.4444 22.5261C15.218 22.4923 15.0252 22.4627 14.87 22.4331C14.7107 22.3992 14.5053 22.3442 14.2454 22.2638C13.9855 22.1792 13.8011 22.1158 13.6879 22.0735C13.5747 22.0269 13.3651 21.9508 13.0633 21.8365C12.7614 21.7223 12.5728 21.6504 12.4973 21.625C10.4348 20.8635 8.41425 19.4885 6.44817 17.5C4.4779 15.5115 3.11547 13.4765 2.3609 11.395C2.33575 11.3188 2.26867 11.1285 2.15549 10.8238C2.0423 10.5192 1.96265 10.3119 1.92073 10.1977C1.87881 10.0835 1.81593 9.8973 1.73209 9.635C1.64825 9.37269 1.59375 9.16538 1.56021 9.00461C1.53087 8.84384 1.49733 8.65346 1.46799 8.425C1.43445 8.19654 1.42188 7.98077 1.42188 7.77769C1.42188 7.05423 1.63567 6.225 2.06326 5.29C2.49085 4.35923 2.9939 3.75846 3.57241 3.49192C4.23895 3.21269 4.87614 3.07307 5.4798 3.07307C5.61814 3.07307 5.71875 3.08577 5.78163 3.11115C5.84451 3.13654 5.94931 3.25077 6.09184 3.45384C6.23857 3.65692 6.39367 3.915 6.56555 4.22384C6.73742 4.53692 6.90091 4.83731 7.0686 5.12923C7.23209 5.42115 7.3872 5.70884 7.5423 5.99654C7.69322 6.28423 7.78963 6.46192 7.82317 6.53807C7.8609 6.60154 7.94474 6.72 8.0705 6.90192C8.19627 7.07961 8.29268 7.24038 8.35137 7.38C8.41425 7.51961 8.44779 7.65077 8.44779 7.78192C8.44779 7.97231 8.31784 8.205 8.06212 8.47577C7.80221 8.74654 7.52134 9.00038 7.21113 9.22884C6.90091 9.45731 6.62005 9.70269 6.36014 9.96077C6.10442 10.2188 5.97447 10.4346 5.97447 10.5996C5.97447 10.6885 5.99543 10.7942 6.04154 10.9127C6.08765 11.0354 6.12538 11.1327 6.16311 11.2088C6.20084 11.285 6.25953 11.395 6.34337 11.5346C6.42302 11.6742 6.47752 11.7631 6.50267 11.8012C7.19436 13.0577 7.99085 14.1408 8.89215 15.0504C9.79344 15.96 10.8624 16.7638 12.1117 17.4619C12.1494 17.4873 12.2374 17.5423 12.3758 17.6227C12.5141 17.7031 12.6231 17.7623 12.6944 17.8046C12.7698 17.8427 12.8662 17.885 12.9878 17.9273C13.1094 17.9738 13.21 17.995 13.3022 17.995C13.5034 17.995 13.7801 17.7835 14.1322 17.3646C14.4844 16.9458 14.8407 16.5269 15.2096 16.1165C15.5743 15.7062 15.8678 15.4988 16.0983 15.4988C16.2241 15.4988 16.3582 15.5327 16.4966 15.5919C16.6349 15.6554 16.79 15.7527 16.9703 15.8796C17.1463 16.0065 17.2637 16.0869 17.3308 16.1292L18.3327 16.6792C18.9992 17.0346 19.5568 17.3477 20.0053 17.6227C20.4497 17.8977 20.6928 18.0838 20.7306 18.1854C20.7557 18.2488 20.7683 18.3504 20.7683 18.49C20.7683 19.0992 20.63 19.7423 20.3533 20.415L20.3365 20.4023Z"
                  stroke="#E6321E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path d="M13.1914 1.42308C18.0165 2.09154 21.848 5.91193 22.5816 10.7604" stroke="#E6321E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M13.0352 5.22231C15.9319 5.77231 18.2208 8.05269 18.816 10.9592" stroke="#E6321E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_160_2538">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            +971 (4) 432 7677
              </Link>
              <div className="border-b w-full mb-[20px] mt-[15px] border-black opacity-15"></div>
            </div>

            <div className="flex space-x-[25px] xxl:space-x-[20px] xxxl:space-x-[50px] items-center">
              <div className="flex space-x-[15px] xxl:space-x-[20px] xxxl:space-x-[30px] items-center group">
                {children}
              </div>
            </div>

          </div>
        </div>

          <div className="rghtsc flex flex-col justify-center ml-[2px] bg-primary px-6 xl:px-13 rounded-l-[20px] group">
        <Link href="/contact" className="flex flex-1 justify-center items-center transition h-full w-full gap-2">
          <span className="text-white text-19 font-semibold">CONTACT</span>
          <span className="text-lg bg-white rounded-full flex justify-center items-center w-7 h-7 group-hover:animate-pulse">
            <svg width="7" height="14" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1L8.5 8L1.5 15" stroke="#263967" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </Link>

          </div>

      </nav>
        </div>



  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: LinkProps & { children: ReactNode }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black">
      {children}
    </Link>
  );
};
