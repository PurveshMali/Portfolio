import React from "react";
import { motion, Reorder } from "framer-motion"; // ✅ Corrected import
import { MoveRight } from "lucide-react";
import { Tooltip } from "react-tooltip";

const ProjectCard = ({ project }) => {
  const [tags, setTags] = React.useState(project.tags);

  return (
    <div className="group border border-[#212121] overflow-hidden flex flex-col hover:border-[#2d2d2d] hover:bg-gradient-to-br from-[#343434] to-[#000000] transition-all duration-150 delay-75 ease-in-out cursor-pointer">
      <img
        className="w-full h-48 md:h-56 object-cover group-hover:scale-101 transition-transform duration-300 ease-in-out"
        src={project.image}
        alt={project.title}
      />
      {/* Reorderable Tags */}
      <div className="p-4 flex flex-wrap gap-2 border-b border-t border-[#1e1e1e]">
        <Reorder.Group
          axis="x"
          values={tags}
          onReorder={setTags}
          className="flex flex-wrap gap-2"
        >
          {tags.map((skill, idx) => (
            <Reorder.Item
              key={skill}
              value={skill}
              whileHover={{ rotate: -5, scale: 1.01 }}
              className="cursor-grab bg-black border border-[#1e1e1e] text-gray-300 text-xs md:text-sm px-3 py-1 rounded-md font-mono hover:border-[#3b3b3b]"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Drag to play with tags"
            >
              {skill}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-[#E64500] text-xl md:text-2xl font-bold font-[font1] mb-2">
            {project.title}
          </h2>
          <p className="text-[#B3B3B3] font-[font10] text-sm md:text-base">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap space-x-4 mt-6">
          {project.siteLink?.live && (
            <a
              href={project.siteLink.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#1e1e1e] hover:border-[#e6450087] text-sm px-4 py-2 font-[font10] transition-all duration-350 ease-in-out"
            >
              Live Demo
            </a>
          )}
          {project.siteLink?.github && (
            <a
              href={project.siteLink.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#1e1e1e] bg-[#202020] hover:bg-black text-sm px-4 py-2 font-[font10] transition-all"
            >
              Github Repo
            </a>
          )}
        </div>
      </div>
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#e64500b4", color: "white" }}
      />
    </div>
  );
};

export default ProjectCard;
