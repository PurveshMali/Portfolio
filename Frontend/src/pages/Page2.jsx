import React from "react";
import { useEffect, useState } from "react";

const Page2 = () => {
  const [text, setText] = useState("");
  const fullText =
    "I am a skilled software developer with a passion for creating innovative and user-friendly applications. I have a strong foundation in various programming languages and frameworks, and I am always eager to learn new technologies. My goal is to leverage my skills to build impactful solutions that enhance user experiences and drive business success.";
  const typingSpeed = 80; // milliseconds per character

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval); // stop when all characters are typed
      }
    }, typingSpeed);

    return () => clearInterval(interval); // clean up
  }, []);

  return (
    <div className="w-full h-100 bg-black px-20 mb-50 py-10">
      <div className="group hover:border-[#76757592] transition-all ease-in-out duration-500 w-[55%] border-r-2 border-l-2 border-b-2  border-[#1E1E1E] h-50 rounded-sm">
        <div className="w-full bg-[#1E1E1E] h-10 flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
            <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
            <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
          <h1 className="font-mono text-[#59F3A6] flex-grow text-center">
            Who am I?
          </h1>
        </div>

        <div className="flex justify-start items-start p-4 space-x-4 w-full h-full">
          <div className="w-full px-2 flex items-start justify-start space-x-1">
            <h3 className="text-[#E64500] font-bold text-sm px-1 ">%</h3>
            <h3 className="text-gray-400 text-sm font-mono relative break-words">
              {text}
              <span
                className="absolute bg-[#E64500] animate-blink"
                style={{ width: "2px", height: "1em" }}
              ></span>
            </h3>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
