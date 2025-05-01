import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t border-[#1e1e1e] p-10 flex flex-col space-y-4 items-center justify-center text-gray-300 text-xs md:text-sm font-mono mt-20">
      <h3 className="text-sm text-[#b7b7b7] font-[font10] ">
        Made in 🤍 with <span>DEV.PURVESH</span>
      </h3>

      <h3 className="text-[14px] text-center text-[#b7b7b7] font-mono ">
        Copyright © {new Date().getFullYear()} AMONGUS. All rights reserved.
      </h3>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://www.instagram.com/dev.purvesh/"
          className=" p-2 rounded-full bg-[#1E1E1E] w-15 h-10 flex items-center justify-center hover:bg-[#2b2b2b] hover:border-1 hover:border-[#5f5f5f] transition-all duration-150 ease-in-out"
        >
          <Instagram className="text-[#b7b7b7]" size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/purvesh-mali"
          className=" p-2 rounded-full bg-[#1E1E1E] w-15 h-10 flex items-center justify-center hover:bg-[#2b2b2b] hover:border-1 hover:border-[#5f5f5f] transition-all duration-150 ease-in-out"
        >
          <Linkedin className="text-[#b7b7b7]" size={20} />
        </a>
        <a
          href="https://www.github.com/PurveshMali/"
          className=" p-2 rounded-full bg-[#1E1E1E] w-15 h-10 flex items-center justify-center hover:bg-[#2b2b2b] hover:border-1 hover:border-[#5f5f5f] transition-all duration-150 ease-in-out"
        >
          <Github className="text-[#b7b7b7]" size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
