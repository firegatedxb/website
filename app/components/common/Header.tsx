import React from "react";
import {assets} from '@/public/assets/assets'
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-sm h-[120px] left-spacing">

      <div className="logo">
        <Image src={assets.logo} width={200} height={200} alt="" className=""/>
      
      </div>

      <div className="flex h-full items-center gap-16">
        <div className="flex flex-col justify-end items-end ">
          
          <div className="flex items-center text-sm font-semibold text-gray-800">
        
            +971 (4) 432 7677
          </div>
          <div className="border-b w-full"></div>
          <nav className="flex-1">
            <ul className="flex justify-center space-x-6 text-sm font-medium text-gray-800">
              <li>
                <a href="#about" className="hover:text-primary">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-primary">
                  OUR SYSTEMS
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-primary">
                  CLIENTS
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-primary">
                  PARTNERS
                </a>
              </li>
              <li>
                <a href="#commitments" className="hover:text-primary">
                  COMMITMENTS
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="rghtsc flex h-full">
          <a
            href="#contact"
            className="rounded-l-[20px] p-13 bg-primary text-white  text-sm font-semibold flex items-center hover:bg-red-700 transition h-full"
          >
            CONTACT
            <span className="ml-1 text-lg"></span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
