import React from "react";

const ProjectSkeleton = () => {
  return (
    <div className="border border-[#212121] overflow-hidden flex flex-col bg-[#1a1a1a] animate-pulse h-full">
      {/* Image Placeholder */}
      <div className="w-full h-48 md:h-56 bg-[#2a2a2a]"></div>

      {/* Tags Placeholder */}
      <div className="p-4 flex flex-wrap gap-2 border-b border-t border-[#1e1e1e]">
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="w-16 h-6 bg-[#2a2a2a] rounded-md"
          ></div>
        ))}
      </div>

      {/* Content Placeholder */}
      <div className="p-4 flex flex-col justify-between flex-grow space-y-4">
        <div>
          {/* Title */}
          <div className="w-3/4 h-8 bg-[#2a2a2a] rounded mb-2"></div>
          {/* Description */}
          <div className="w-full h-4 bg-[#2a2a2a] rounded mb-1"></div>
          <div className="w-5/6 h-4 bg-[#2a2a2a] rounded"></div>
        </div>

        {/* Buttons Placeholder */}
        <div className="flex flex-wrap space-x-4 mt-6">
          <div className="w-24 h-10 bg-[#2a2a2a] rounded"></div>
          <div className="w-24 h-10 bg-[#2a2a2a] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
