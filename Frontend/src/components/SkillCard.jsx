import React from "react";

const SkillCard = ({ name, img, desc }) => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[#070707] border aspect-1/1 w-25 lg:w-35 md:w-30 border-[#333333] text-gray-300 text-xs md:text-sm px-3 py-2 rounded-md font-mono hover:border-[#5e5e5e] overflow-hidden">
      <img src={img} alt={name} className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
      <h2 className="font-mono text-base md:text-lg mt-2 text-center">{name}</h2>

      {/* Overlay on Hover */}
      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 px-4 text-center">
        <h3 className="text-sm font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
