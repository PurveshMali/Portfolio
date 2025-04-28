import { MoveRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react"; // Correct import (motion/react was wrong)
import thumbnail1 from "../assets/images/Rectangle 22.jpg"; // Adjust path if necessary

const Page3 = () => {
  const projects = [
    {
      title: "AirPulse",
      description: "Urban air quality monitoring dashboard",
      tags: ["React.js", "Node.js", "MongoDB", "APIs"],
      features: [
        { icon: "cloud", text: "Live Data" },
        { icon: "activity", text: "Real-time Graphs" },
        { icon: "settings", text: "Custom Alerts" },
      ],
      siteLink: {
        live: "https://airpulse.live",
        cached: "cached-airpulse",
      },
      image:
        "https://imgs.search.brave.com/BO3s7kZgr1os8h_vZNs82nbHMK8LakkMjw6iXfcWE58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9kYXJrLWFt/YmllbnQteW91dHVi/ZS10aHVtYm5haWwt/ZGVzaWduLXRlbXBs/YXRlLTZhYTI2OTVm/OTk0YTIyMGVkOWU5/YjRhZTk5ODM1NWE3/X3NjcmVlbi5qcGc_/dHM9MTU3MDg4MjY2/NQ",
      subtitle: "Breathe Better, Live Smarter",
    },
    {
      title: "SkillForge",
      description: "AI-driven career skill recommendations",
      tags: ["Python", "Flask", "ML", "TailwindCSS"],
      features: [
        { icon: "brain", text: "AI Matching" },
        { icon: "code", text: "Personalized Roadmaps" },
        { icon: "zap", text: "Instant Feedback" },
      ],
      siteLink: {
        live: "https://skillforge.app",
        cached: "cached-skillforge",
      },
      image:
        "https://imgs.search.brave.com/BO3s7kZgr1os8h_vZNs82nbHMK8LakkMjw6iXfcWE58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9kYXJrLWFt/YmllbnQteW91dHVi/ZS10aHVtYm5haWwt/ZGVzaWduLXRlbXBs/YXRlLTZhYTI2OTVm/OTk0YTIyMGVkOWU5/YjRhZTk5ODM1NWE3/X3NjcmVlbi5qcGc_/dHM9MTU3MDg4MjY2/NQ",
      subtitle: "Forge Your Future",
    },
    {
      title: "TaskNest",
      description: "Smart task management and team collaboration",
      tags: ["MERN Stack", "Socket.io", "Redux"],
      features: [
        { icon: "clipboard-list", text: "Real-Time Updates" },
        { icon: "users", text: "Team Boards" },
        { icon: "bell", text: "Smart Reminders" },
      ],
      siteLink: {
        live: "https://tasknest.app",
        cached: "cached-tasknest",
      },
      image:
        "https://imgs.search.brave.com/BO3s7kZgr1os8h_vZNs82nbHMK8LakkMjw6iXfcWE58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9kYXJrLWFt/YmllbnQteW91dHVi/ZS10aHVtYm5haWwt/ZGVzaWduLXRlbXBs/YXRlLTZhYTI2OTVm/OTk0YTIyMGVkOWU5/YjRhZTk5ODM1NWE3/X3NjcmVlbi5qcGc_/dHM9MTU3MDg4MjY2/NQ",
      subtitle: "Organize. Collaborate. Achieve.",
    },
  ];

  return (
    <div className="w-full h-auto px-4 py-10 md:px-10 lg:px-20">
  {/* Header */}
  <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10">
    <div className="flex items-center space-x-4 w-full md:w-auto mb-6 md:mb-0">
      <h1 className="text-2xl md:text-3xl text-[#B3B3B3] font-[font10]">
        <span className="text-[#E64500]">#</span>projects
      </h1>
      <div className="hidden md:block w-24 md:w-64 h-[1px] bg-[#FF4D00]"></div>
    </div>
    <div className="group flex items-center space-x-2 cursor-pointer">
      <h3 className="text-[#B3B3B3] text-sm md:text-base font-[font10]">
        View All
      </h3>
      <MoveRight
        className="text-[#B3B3B3] group-hover:text-[#E64500] transition-all duration-300"
        size={22}
      />
    </div>
  </div>

  {/* Projects Grid */}
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 md:px-15">
    {projects.map((project, index) => (
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        key={index}
        className="border border-[#1e1e1e] overflow-hidden flex flex-col hover:border-[#3b3b3b] transition-all duration-150 delay-75 ease-in-out"
      >
        <img
          className="w-full h-48 md:h-56 object-cover"
          src={project.image}
          alt={project.title}
        />
        <div className="p-4 flex flex-wrap gap-2 border-b border-t border-[#1e1e1e]">
          {project.tags.map((skill, idx) => (
            <span
              key={idx}
              className="bg-black border border-[#1e1e1e] text-gray-300 text-xs md:text-sm px-3 py-1 rounded-md font-[font10]"
            >
              {skill}
            </span>
          ))}
        </div>
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
            <a
              href={project.siteLink.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#1e1e1e] hover:border-[#e6450042] text-sm px-4 py-2 font-[font10] transition-all"
            >
              Live Demo
            </a>
            <a
              href="#"
              className="border-2 border-[#1e1e1e] bg-[#202020] hover:bg-black text-sm px-4 py-2 font-[font10] transition-all"
            >
              Github Repo
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default Page3;
