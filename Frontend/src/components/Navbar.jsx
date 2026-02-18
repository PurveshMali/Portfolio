import { EllipsisVertical, RotateCw, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

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

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        type: "spring", 
        damping: 25, 
        stiffness: 200 
      }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <div
        className={`flex fixed top-0 left-0 right-0 z-40 backdrop-blur-md justify-between items-center bg-[#000000a4] px-4 py-3 border-b border-gray-800/50 space-x-4 md:space-x-15 transition-all duration-500 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Left icons */}
        <div className="flex items-center space-x-2">
          <div className="items-center space-x-1 hidden md:flex">
            <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
            <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
            <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="hover:bg-[#1E1E1E] p-1 md:p-2 cursor-pointer rounded-full transition duration-300 ease-in-out"
          >
            <RotateCw className="text-gray-400 group-hover:rotate-180 transition-transform duration-500" size={18} />
          </button>
        </div>

        {/* Center typing text */}
        <div className="w-full mx-4 md:mx-10 flex justify-center h-full bg-[#1E1E1E] rounded-full p-1 md:p-2 overflow-hidden border border-[#2a2a2a]">
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
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed top-0 right-0 w-3/4 md:w-1/2 lg:w-1/3 h-full bg-[#0a0a0a] border-l border-[#222] z-50 flex flex-col shadow-2xl"
            >
              {/* Close Button */}
              <div className="absolute top-5 right-5 z-50">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[#1E1E1E] transition-colors group"
                >
                  <X className="text-gray-400 group-hover:text-[#E64500] transition-colors" size={24} />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
                <h2 className="text-sm md:text-base text-[#59F3A6] font-mono tracking-widest uppercase mb-4 opacity-80">
                  Developer Protocol
                </h2>
                
                <nav className="flex flex-col items-center space-y-4">
                  {["Home", "About", "Skills", "Projects", "Hackathons", "Contact"].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="text-3xl md:text-5xl font-[font2] text-gray-300 hover:text-[#E64500] transition-colors duration-300 cursor-pointer tracking-wide"
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>

                <div className="absolute bottom-10 text-center">
                  <p className="text-xs text-gray-600 font-mono">
                    © 2025 Portfolio. All systems operational.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
