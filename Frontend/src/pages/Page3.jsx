import { Link, MoveRight } from "lucide-react";
import React from "react";
// import { motion, Reorder } from "motion/react"; // Correct import (motion/react was wrong)
import studentThumbnail from "../assets/thumbnails/studentThumbnail.png";
import beamongus from "../assets/thumbnails/beamongus.png";
import powerChoice from "../assets/thumbnails/powerChoice.png";
import hiresync from "../assets/thumbnails/hiresync.png";
import { getAllProjects } from "../api/projectAPI";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import FadeInSection from "../animations/FadeInSection";
import { useEffect } from "react";

const Page3 = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getAllProjects();
        setAllProjects(res.data);
        console.log(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  ///////////
  const projects = [
    {
      title: "EduConnect",
      description: "A platform for students to learn and earn.",
      tags: ["JavaScript", "React", "Tailwind", "MongoDB", "Node.js", "ML"],
      features: [
        { icon: "users", text: "Community Collaboration" },
        { icon: "code", text: "Code Sharing" },
        { icon: "chat", text: "Developer Discussions" },
      ],
      siteLink: {
        live: "https://student-portal-jvjs.vercel.app/",
        github: "https://github.com/PurveshMali/StudentPortal",
      },
      image: studentThumbnail,
      subtitle: "Collaborate and Share Code",
    },
    {
      title: "BeAmongUs",
      description:
        "A smart complaint management system for Municipal Corporation.",
      tags: ["JavaScript", "React", "Tailwind", "MongoDB", "Node.js"],
      features: [
        { icon: "lightbulb", text: "Innovative Solutions" },
        { icon: "clock", text: "Time-bound Challenges" },
        { icon: "trophy", text: "Award-winning Ideas" },
      ],
      siteLink: {
        live: "https://github.com/PurveshMali/Hack-a-Bit",
        github: "https://github.com/PurveshMali/Hack-a-Bit",
      },
      image: beamongus,
      subtitle: "Hack-a-Bit Project",
    },
    {
      title: "PowerChoice",
      description:
        "Environmental impact assessment of power plant fuel choice using data-driven predicctive modeling.",
      tags: [
        "JavaScript",
        "React",
        "ML",
        "Tailwind",
        "MongoDB",
        "Express.js",
        "Recharts",
      ],
      features: [
        { icon: "book", text: "Educational Projects" },
        { icon: "code", text: "Hands-on Coding" },
        { icon: "graduation-cap", text: "Learning by Doing" },
      ],
      siteLink: {
        live: "https://github.com/PurveshMali/PBL",
        github: "https://github.com/PurveshMali/PBL",
      },
      image: powerChoice,
      subtitle: "Project-Based Learning",
    },
    {
      title: "HireSync",
      description:
        "A mobile application which helps daily wage workers to find jobs.",
      tags: ["Flutter", "Firebase", "Dart", "ML"],
      features: [
        { icon: "react", text: "React Framework" },
        { icon: "paint-brush", text: "Tailwind CSS Styling" },
        { icon: "bolt", text: "Fast Performance" },
      ],
      siteLink: {
        github: "https://github.com/PurveshMali/HireSyncHackFest",
      },
      image: hiresync,
      subtitle: "React Application",
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
      <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 md:px-15">
        {allProjects.slice(0.3).map((project, index) => (
          <div key={project._id} onClick={() => setSelectedProject(project)}>
            <FadeInSection>
              <ProjectCard key={index} project={project} />
            </FadeInSection>
          </div>
        ))}
      </div>
      {/* ProjectDetailsModal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Page3;
