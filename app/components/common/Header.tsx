import React from "react";
import { assets } from '@/public/assets/assets'
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex items-stretch justify-between gap-15 bg-white shadow-sm left-spacing">
      <div className="logo flex flex-col justify-center">
        <Image src={assets.logo} width={323} height={44} alt="" className="w-full h-auto" />
      </div>
      <div className="flex flex-col justify-end items-end ml-auto gap-5 min-w-[45%] pt-4">
        <Link href="tel:9744327677" className="flex items-center gap-2 text-17 font-bold text-gray-800  leading-tight  group">
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
        <div className="border-b w-full"></div>
        <nav className="">
          <ul className="flex justify-center space-x-6 text-17 font-medium text-gray-800 pb-5">
            <li>
              <Link href="#about" className="leading-tight hover:text-primary">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#services" className="leading-tight hover:text-primary">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="#systems" className="leading-tight hover:text-primary">
                OUR SYSTEMS
              </Link>
            </li>
            <li>
              <Link href="#projects" className="leading-tight hover:text-primary">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="#clients" className="leading-tight hover:text-primary">
                CLIENTS
              </Link>
            </li>
            <li>
              <Link href="#partners" className="leading-tight hover:text-primary">
                PARTNERS
              </Link>
            </li>
            <li>
              <Link href="#commitments" className="leading-tight hover:text-primary">
                COMMITMENTS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="rghtsc flex flex-col justify-center ml-[2px] bg-primary px-6 lg:px-13 rounded-l-[20px] group">
        <Link href="#contact" className="flex flex-1 justify-center items-center transition h-full w-full gap-2">
          <span className="text-white text-19 font-semibold">CONTACT</span>
          <span className="text-lg bg-white rounded-full flex justify-center items-center w-7 h-7 group-hover:animate-pulse">
            <svg width="7" height="14" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1L8.5 8L1.5 15" stroke="#263967" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
