import { Link, MoveRight } from "lucide-react";
import React from "react";
import { motion, Reorder } from "motion/react"; // Correct import (motion/react was wrong)
import thumbnail1 from "../assets/images/Rectangle 22.jpg"; // Adjust path if necessary

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

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
        github: "https://github.com/PurveshMali/",
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
        github: "https://github.com/PurveshMali/",
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
        github: "https://github.com/PurveshMali/",
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
        <div className="flex flex-col md:flex-row  items-center w-full md:w-auto space-y-2 space-x-6 md:mb-0">
          <h1 className="text-2xl md:text-3xl text-[#B3B3B3] font-[font10]">
            <span className="text-[#E64500]">#</span>
            projects
          </h1>
          <div className=" md:block w-24 md:w-100 h-[1px] bg-[#E64500]"></div>
        </div>
        <div className="group flex justify-center items-center space-x-2 cursor-pointer mt-4">
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
      <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 md:px-15">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Page3;
