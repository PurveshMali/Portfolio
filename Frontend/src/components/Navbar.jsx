import { Cross, EllipsisVertical, RotateCw, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Welcome to the developer protocol.";
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
    <div className="flex justify-center items-center bg-black px-4 py-3 border-b border-gray-400 space-x-15">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        </div>
        <button className="hover:bg-[#1E1E1E] p-2 cursor-pointer rounded-full transition duration-300 ease-in-out">
          <RotateCw className="text-gray-400" size={20} />
        </button>
      </div>

      <div className="w-full flex justify-center h-full bg-[#1E1E1E] rounded-full p-1">
        <h3 className="text-[#59F3A6] text-sm font-mono whitespace-nowrap overflow-hidden relative">
          {text}
          <span className="absolute right-0 w-0.5 h-full bg-[#59F3A6] animate-blink"></span>
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
            }
          `}
        </style>
      </div>

      <div>
        <button
          className="hover:bg-[#1E1E1E] p-2 cursor-pointer rounded-full transition duration-300 ease-in-out"
          onClick={() => {
            setIsMenuOpen(true);
          }} // Open menu on click
        >
          <EllipsisVertical className="text-gray-200" size={20} />
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ x: 0, y: -500, opacity: 1 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ x: 0, y: -500, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center z-50"
        >
          <div className="w-full h-full bg-black rounded-lg p-10 space-y-6">
            <button
              className="absolute top-4 right-4 text-orange-500 hover:bg-[#1E1E1E] p-2 cursor-pointer rounded-full transition duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)} // Close menu
            >
              <X className="text-gray-200" size={20} />
            </button>
            <h2 className="text-2xl text-[#59F3A6] font-mono text-center">
              Developer Protocol
            </h2>
            <div className="flex items-center justify-center flex-col text-lg text-gray-300 space-y-4">
              <h1 className="hover:text-[#E64500] cursor-pointer text-9xl font-[font2] tracking-wider ">
                Home
              </h1>
              <h1 className="hover:text-[#E64500] cursor-pointer text-9xl font-[font2] tracking-wider ">
                Projects
              </h1>
              <h1 className="hover:text-[#E64500] cursor-pointer text-9xl font-[font2] tracking-wider ">
                Contact
              </h1>
              <h1 className="hover:text-[#E64500] cursor-pointer text-9xl font-[font2] tracking-wider ">
                About
              </h1>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
