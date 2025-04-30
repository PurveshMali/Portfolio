import { MoveRight } from "lucide-react";
import React from "react";
import reactLogo from "../assets/images/react.png";
import SkillCard from "../components/SkillCard";

const Page4 = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "C",
          img: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
          desc: "General-purpose procedural language used in systems programming.",
        },
        {
          name: "C++",
          img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
          desc: "Object-oriented programming language for high-performance apps.",
        },
        {
          name: "Java",
          img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          desc: "Popular OOP language used in enterprise and Android development.",
        },
        {
          name: "Python",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
          desc: "Versatile language used in AI, ML, automation, and more.",
        },
        {
          name: "JavaScript",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          desc: "Main language of the web for dynamic and interactive content.",
        },
        {
          name: "PHP",
          img: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
          desc: "Server-side scripting language for backend web development.",
        },
        {
          name: ".NET",
          img: "https://cdn.worldvectorlogo.com/logos/microsoft-net.svg",
          desc: "Microsoft’s framework for building Windows and web apps.",
        },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        {
          name: "React",
          img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
          desc: "Component-based JavaScript library for building UIs.",
        },
        {
          name: "Next.js",
          img: "https://imgs.search.brave.com/C9sOBdg8PXHdzxsPA7c_yL_X7_rukWp_hWK1cIVzj20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ0LzIvbmV4dC1q/cy1pY29uLWxvZ28t/cG5nX3NlZWtsb2dv/LTQ0OTgyNS5wbmc",
          desc: "React framework with SSR and static site generation.",
        },
        {
          name: "Node.js",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
          desc: "JavaScript runtime built on Chrome's V8 engine.",
        },
        {
          name: "Express",
          img: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp",
          desc: "Minimal and flexible Node.js web application framework.",
        },
        {
          name: "Tailwind",
          img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
          desc: "Utility-first CSS framework for styling with ease.",
        },
        {
          name: "Flutter",
          img: "https://cdn.iconscout.com/icon/free/png-256/free-flutter-2038877-1720090.png",
          desc: "UI toolkit by Google for building natively compiled apps.",
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          name: "MongoDB",
          img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
          desc: "NoSQL document-oriented database for modern apps.",
        },
        {
          name: "MySQL",
          img: "https://cdn-icons-png.flaticon.com/512/528/528260.png",
          desc: "Open-source relational database management system.",
        },
        {
          name: "Supabase",
          img: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
          desc: "Open-source Firebase alternative using PostgreSQL.",
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        {
          name: "VS Code",
          img: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
          desc: "Popular code editor from Microsoft with extensions.",
        },
        {
          name: "Postman",
          img: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png",
          desc: "API testing and development platform.",
        },
        {
          name: "Git",
          img: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
          desc: "Distributed version control system.",
        },
        {
          name: "GitHub",
          img: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
          desc: "Code hosting platform for version control and collaboration.",
        },
        {
          name: "MCP",
          img: "https://mintlify.s3.us-west-1.amazonaws.com/mcp/logo/dark.svg",
          desc: "A Model Context Protocol tool for building smart AI agents.",
        },
        {
          name: "Cursor",
          img: "https://avatars.githubusercontent.com/u/118309516?s=200&v=4",
          desc: "AI-powered coding assistant in VS Code-like IDE.",
        },
        {
          name: "Figma",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
          desc: "UI/UX design tool for interface prototyping.",
        },
        {
          name: "Docker",
          img: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
          desc: "Tool for packaging applications in containers.",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-auto px-4 py-10 md:px-10 lg:px-20 md:mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10">
        <div className="flex flex-col md:flex-row  items-center w-full md:w-auto space-y-2 space-x-6 md:mb-0">
          <h1 className="text-2xl md:text-3xl text-[#B3B3B3] font-[font10]">
            <span className="text-[#E64500]">#</span>
            skills
          </h1>
          <div className=" md:block w-24 md:w-100 h-[1px] bg-[#E64500]"></div>
        </div>
      </div>
      {/* Skills Cards */}
      <div className="mt-10 w-full">
        {skillsData.map((section, idx) => (
          <div key={idx} className="mb-16 w-full">
            {/* Category Title */}
            <div className="w-full flex justify-center items-center space-x-5">
              <div className="w-2/5 md:w-1/5 h-[1px] bg-[#1e1e1e]"></div>
              <h1 className="text-sm text-[#4E4E4E] font-bold font-[font1] text-center">
                {section.category}
              </h1>
              <div className="w-2/5 md:w-1/5 h-[1px] bg-[#1e1e1e]"></div>
            </div>

            {/* Skill Cards */}
            <div className="mt-10 flex justify-center items-center flex-wrap gap-5 md:gap-8 md:px-15">
              {section.skills.map((skill, i) => (
                <SkillCard
                  key={`${section.category}-${i}`}
                  name={skill.name}
                  img={skill.img}
                  desc={skill.desc}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
