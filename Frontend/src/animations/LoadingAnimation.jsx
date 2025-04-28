import React from "react";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  const colors = ["#FF5722", "#FFEB3B", "#4CAF50"]; // Orange, Yellow, Green

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="flex items-center space-x-2">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              scale: [1, 1.3, 1],  // Scale up and back down
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: colors.length * 0.2, // total delay before this circle restarts
              ease: "easeInOut",
              delay: index * 0.3, // each circle starts after a gap
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
