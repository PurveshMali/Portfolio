import React from "react";

const ProjectCard = () => {
  return (
    <div className="px-25 w-full h-auto flex justify-between items-center space-x-10 mt-10">
      <div className="border-1 border-[#1e1e1e] w-1/3 h-auto display flex flex-col justify-center items-center">
        <div className="w-full h-auto">
          <img className="w-full aspect-3/2" src={thumbnail1} alt="" />
        </div>
        <div className="w-full h-auto flex flex-wrap justify-start items-start px-4 py-4 gap-2 border-b border-[#1e1e1e]">
          {projects[1].tags.map((skill, index) => (
            <div
              key={index}
              className="bg-black border-2 border-[#1e1e1e] py-1 px-4 rounded-md flex justify-center items-center"
            >
              <h3 className="text-sm font-[font10] text-gray-300">{skill}</h3>
            </div>
          ))}
        </div>

        <div className="w-full h-auto">
          <div className="w-full p-4">
            <h1 className="text-4xl tracking-tighter font-[font1] text-[#E64500] font-bold">
              Title
            </h1>
            <h3 className="text-[#B3B3B3] font-[font10] mt-2">
              Description Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Amet eligendi odio repellendus.
            </h3>
          </div>

          <div className="w-full p-4 flex justify-start space-x-5 items-center">
            <button className="border-2 border-[#1e1e1e] hover:border-[#e6450042] transition-all ease-in-out duration-100 cursor-pointer px-4 py-2 font-[font10]">
              Live Demo
            </button>
            <button className="border-2 border-[#1e1e1e] px-4 py-2 bg-[#202020] font-[font10]  hover:bg-black hover:border-[#1e1e1e] transition-all ease-in-out duration-100 cursor-pointer">
              Github Repo
            </button>
          </div>
        </div>
      </div>
      {/* <div className="border-1 w-1/3 h-30 "></div>
        <div className="border-1 w-1/3 h-30 "></div> */}
    </div>
  );
};

export default ProjectCard;
