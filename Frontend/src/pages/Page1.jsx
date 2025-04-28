import { Link, Link2Icon, Percent } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import heroImage from "../assets/images/hero2.png"; // Adjust the path as necessary

const Page1 = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-20 py-5">
        <div>
          <h1 className="text-3xl text-white font-[font2]">
            DEV<span className="text-[#E64500] text-3xl font-bold">.</span>
            <span className="font-[font1]  ">PURVESH</span>
          </h1>
        </div>
        <div className="absolute flex space-x-4 top-15 right-0">
          <button className="text-[#E64500]  border-b-1 border-r-0 border-l-1 hover:border-b-3 hover:border-l-3 transition-all ease-in-out duration-150 hover:scale-98 hover:bg-[#1E1E1E] px-10 py-2 font-mono">
            Work Together
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full flex flex-col items-left justify-between px-20 py-20">
          <div className="flex justify-start items-center space-x-4">
            <h1 className="text-6xl font-[font6] tracking-wider text-[#E64500]">
              Hey There,
            </h1>
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
            >
              <Percent className="text-gray-300" size={100} />
            </motion.div>
          </div>
          <h1 className="text-[8vw] font-[font7] tracking-normal leading-30 text-[#E64500]">
            I'm Purvesh!
          </h1>
          <h3 className="font-mono text-[#B3B3B3] text-xl leading-10">
            Building Intelligent Experiences with Code & Creativity
          </h3>
        </div>

        <div className="group w-120 relative top-20 left-[-20] border-2 border-[#1E1E1E] z-10 mr-60">
          <img className="w-100 group-hover:scale-105 transition duration-450 ease-in-out" src={heroImage} alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default Page1;