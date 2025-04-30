import { Percent } from "lucide-react";
import React, { useRef } from "react";
import { motion } from "framer-motion"; // Correct import (motion/react was wrong)
import heroImage from "../assets/images/me.png"; // Adjust path if necessary
import Page2 from "./Page2";

const Page1 = () => {
  const page2Ref = useRef(null);
  const handleScroll = () => {
    page2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full bg-black text-white md:mt-20 mt-15 lg:mt-20">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 md:px-10 lg:px-20">
        <div>
          <h1 className="text-2xl md:text-3xl font-[font2]">
            DEV<span className="text-[#E64500] font-bold">.</span>
            <span className="font-[font1]">PURVESH</span>
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-end w-full px-6 md:px-10 lg:px-20 py-0 md:py-6 gap-5">
        {/* Left Text Section */}
        <div className="flex flex-col md:items-start items-center space-y-6 w-full md:w-1/2">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl md:text-5xl font-[font6] tracking-wide text-[#E64500]">
              Hey there,
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <Percent className="text-gray-300 hidden md:block" size={50} />
            </motion.div>
          </div>

          <h1 className="text-[12vw] md:text-[6vw] font-[font7] text-[#E64500] leading-[0.8]">
            I'm Purvesh!
          </h1>

          <h3 className="font-mono text-[#B3B3B3] text-center md:text-left text-base md:text-xl leading-relaxed">
            Building Intelligent Experiences with Code & Creativity
          </h3>
          <div className="hidden md:flex space-x-4">
            <button className="px-8 py-2 border-1 border-[#1E1E1E] text-medium text-[#E64500] font-mono hover:border-[#3d3d3d] transition-all ease-in-out duration-300 hover:px-10 hover:tracking-wider ">
              Work Together
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="group relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-b-3 border-b-[#E64500] overflow-hidden rounded-md ">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              src={heroImage}
              alt="Hero"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-6 py-10 md:px-10 lg:px-20 flex justify-center items-center">
        <button
          className="px-8 py-2 border-1 border-[#1E1E1E] text-medium text-[#E64500] font-mono hover:border-[#3d3d3d] transition-all ease-in-out duration-300 hover:px-10 hover:tracking-wider "
          onClick={handleScroll}
        >
          Know Me 👇
        </button>
      </div>

      <Page2 ref={page2Ref} />
    </div>
  );
};

export default Page1;
