import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

const ProjectDetailsModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            layoutId={`project-${project.id}`}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1a1a] border border-[#333] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button (Mobile) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-colors md:hidden"
            >
              <X size={20} />
            </button>

            {/* Left Side: Image/Media */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#111] relative overflow-hidden group">
               <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1a1a1a]" />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#E64500] font-[font1] mb-1">
                    {project.title}
                  </h2>
                  <p className="text-[#888] text-sm font-mono">
                    {project.subtitle || "Featured Project"}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="hidden md:block p-2 text-[#666] hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6 flex-grow">
                <p className="text-[#ccc] leading-relaxed text-sm md:text-base font-[font10]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-bold text-[#fff] uppercase tracking-wider mb-3 font-mono">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#252525] border border-[#333] rounded-md text-xs text-[#aaa] font-mono hover:border-[#E64500]/50 hover:text-[#E64500] transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex gap-4 pt-6 border-t border-[#333]">
                {project.siteLink?.live && (
                  <a
                    href={project.siteLink.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#E64500] hover:bg-[#ff5714] text-white py-2.5 rounded-lg font-medium transition-all transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.siteLink?.github && (
                  <a
                    href={project.siteLink.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#252525] hover:bg-[#333] text-white py-2.5 rounded-lg font-medium border border-[#333] transition-all transform hover:-translate-y-0.5"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
