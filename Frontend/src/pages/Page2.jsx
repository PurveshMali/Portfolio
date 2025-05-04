import { Quote } from "lucide-react";
import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "motion/react";

const Page2 = forwardRef((props, ref) => {
  const [text, setText] = useState("");
  const fullText =
    "I am a skilled software developer with a passion for creating innovative and user-friendly applications. I have a strong foundation in various programming languages and frameworks, and I am always eager to learn new technologies. My goal is to leverage my skills to build impactful solutions that enhance user experiences and drive business success.";
  const typingSpeed = 80; // milliseconds per character

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length - 1) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-auto px-6 py-10 md:px-10 lg:px-20 flex flex-col space-y-15 justify-center items-center"
    >
      <div 
      className="group hover:border-[#76757592] transition-all ease-in-out duration-500 w-full md:w-[80%] lg:w-[60%] border-2 border-[#1E1E1E] h-auto rounded-sm mx-auto">
        <div className="w-full bg-[#1E1E1E] h-10 flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
            <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
            <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
          <h1 className="font-mono text-[#59F3A6] text-sm md:text-base text-center flex-grow">
            Who am I?
          </h1>
        </div>

        <div className="flex justify-start items-start p-4">
          <div className="flex items-start space-x-1 w-full">
            <h3 className="text-[#E64500] font-bold text-sm">%</h3>
            <h3 className="text-gray-400 text-sm font-mono relative break-words leading-relaxed">
              {text}
              <span
                className="absolute bg-[#E64500] animate-blink"
                style={{ width: "2px", height: "1em" }}
              ></span>
            </h3>
          </div>
        </div>
      </div>

      {/* Custom CSS for blinking cursor */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
            display: inline-block;
            background-color: #E64500;
          }
        `}
      </style>

      {/* Quote Section */}
      <div className="w-full md:w-2/3 h-auto px-4 py-5 md:px-10 lg:px-20 flex flex-col justify-end items-end">
        <div className="w-full h-auto flex justify-start items-center px-4">
          <Quote
            className="text-[#E64500] font-bold transform rotate-180 relative bottom-[-15px] bg-black p-1"
            size={35}
          />
        </div>

        <div className="w-full h-auto py-4 border-2 border-[#393939] flex justify-center items-center px-4">
          <h3 className="text-gray-400 font-[font10] text-base text-center">
            With great power, comes great electricity bill
          </h3>
        </div>

        <div className="w-full h-auto flex justify-end items-center px-4">
          <Quote
            className="text-[#E64500] z-10 font-bold transform relative top-[-15px] bg-black p-1"
            size={35}
          />
        </div>

        <div className="md:w-2/8 w-2/5  h-auto py-4 border-2 border-[#393939] flex justify-center items-center px-4 relative top-[-36px]">
          <h3 className="text-[#59F3A6] font-[font10] text-sm text-center">
            - Dr. Who
          </h3>
        </div>
      </div>
    </div>
  );
});

export default Page2;
