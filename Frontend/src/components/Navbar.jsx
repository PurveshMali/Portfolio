import { EllipsisVertical, RotateCw, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Welcome to the developer protocol.";
  const typingSpeed = 80; // milliseconds per character

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
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
      className={`flex fixed top-0 left-0 right-0 z-20 backdrop-blur-sm justify-between items-center bg-[#000000a4] px-4 py-3 border border-gray-400 space-x-4 md:space-x-15 transition-all duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Left icons */}
      <div className="flex items-center space-x-2">
        <div className="items-center space-x-1 hidden md:flex">
          <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        </div>
        <button className="hover:bg-[#1E1E1E] p-1 md:p-2 cursor-pointer rounded-full transition duration-300 ease-in-out">
          <RotateCw className="text-gray-400" size={18} />
        </button>
      </div>

      {/* Center typing text */}
      <div className="w-full mx-4 md:mx-10 flex justify-center h-full bg-[#1E1E1E] rounded-full p-1 md:p-2 overflow-hidden">
        <h3 className="text-[#59F3A6] text-[10px] md:text-sm font-mono whitespace-nowrap overflow-hidden relative">
          {text}
          <span className="absolute right-0 w-0.5 h-full bg-[#59F3A6] animate-blink"></span>
        </h3>
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

      {/* Right menu button */}
      <div>
        <button
          className="hover:bg-[#1E1E1E] p-1 md:p-2 cursor-pointer rounded-full transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(true)}
        >
          <EllipsisVertical className="text-gray-200" size={18} />
        </button>
      </div>

      {/* Menu overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%",  opacity: 0 }}
          animate={{ x: 0,  opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-3/4 md:w-2/4 lg:w-2/5 border-l-1  h-screen opacity-60 backdrop-blur-lg bg-[#000000ea] flex flex-col justify-center items-center z-50"
        >
          <div className="w-full h-full rounded-lg p-8 md:p-10 space-y-2 py-5 relative z-50">
            <motion.button
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 90, scale: 1.01 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              exit={{ rotate: 0, scale: 0 }}
              className="group absolute top-4 right-4 text-orange-500 hover:bg-[#1E1E1E]  p-2 cursor-pointer rounded-full transition duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              <X
                className="text-gray-200 group-hover:text-[#E64500]"
                size={20}
              />
            </motion.button>
            <h2 className="text-md md:text-2xl text-[#59F3A6] font-mono text-center">
              Developer Protocol
            </h2>
            <div className="flex flex-col items-center text-center space-y-6 mt-10">
              {["Home", "Projects", "Contact", "About"].map((item) => (
                <h1
                  key={item}
                  className="text-3xl md:text-6xl hover:text-[#E64500] cursor-pointer font-[font2] tracking-wide"
                >
                  {item}
                </h1>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
