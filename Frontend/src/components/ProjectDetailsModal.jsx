import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const SNAP_POINTS = {
  collapsed: "60%",
  expanded: "100%",
};

const ProjectDetailsModal = ({ project, onClose }) => {
  const [expanded, setExpanded] = useState(false);

useEffect(() => {
    setExpanded(false); // reset when new project opens
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => {
          if (info.offset.y > 120) onClose();
          if (info.offset.y < -120) setExpanded(true);
        }}
        initial={{ y: "100%" }}
        animate={{ y: 0, height: expanded ? SNAP_POINTS.expanded : SNAP_POINTS.collapsed }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="fixed bottom-0 left-0 right-0 z-50 mx-auto
                   bg-[#000000c5] border border-[#252525]
                   rounded-t-3xl p-5 md:p-8
                   w-full md:w-[75%] lg:w-[65%]"
      >
        {/* Drag Handle */}
        <div className="flex justify-center mb-4">
          <div className="h-1.5 w-14 rounded-full bg-gray-600/60" />
        </div>

        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E64500]">
            {project.title}
          </h2>
          <button onClick={onClose}>
            <X className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <p className="text-gray-400 mb-4">{project.subtitle}</p>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[70vh] pr-1">
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 border border-[#2a2a2a]
                           rounded-md text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pb-4">
            {project.siteLink?.live && (
              <a
                href={project.siteLink.live}
                target="_blank"
                className="border px-4 py-2 text-sm hover:border-[#E64500]"
              >
                Live Demo
              </a>
            )}
            {project.siteLink?.github && (
              <a
                href={project.siteLink.github}
                target="_blank"
                className="border px-4 py-2 text-sm bg-[#151515]"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
