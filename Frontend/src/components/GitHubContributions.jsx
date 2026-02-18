import React from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, MoveRight } from "lucide-react";

const GITHUB_USERNAME = "PurveshMali";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
// Dark-theme friendly contribution chart (service: ghchart.rshah.org)
const CHART_IMG_URL = `https://ghchart.rshah.org/40c463/${GITHUB_USERNAME}`;

const GitHubContributions = () => {
    return (
        <section
            id="github"
            className="w-full px-4 py-12 md:py-16 md:px-10 lg:px-20"
            aria-labelledby="github-section-title"
        >
            <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10">
                <div className="flex flex-col md:flex-row  items-center w-full md:w-auto space-y-2 space-x-6 md:mb-0">
                    <h1 className="text-2xl md:text-3xl text-[#B3B3B3] font-[font10]">
                        <span className="text-[#E64500]">#</span>
                        GitHub Contributions
                    </h1>
                    <div className=" md:block w-24 md:w-100 h-[1px] bg-[#E64500]"></div>
                </div>
                {/* <div className="group flex justify-center items-center space-x-2 cursor-pointer mt-4">
                    <h3 className="text-[#B3B3B3] text-sm md:text-base font-[font10]">
                        View All
                    </h3>
                    <MoveRight
                        className="text-[#B3B3B3] group-hover:text-[#E64500] transition-all duration-300"
                        size={22}
                    />
                </div> */}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-10 md:mt-14 max-w-4xl mx-auto"
            >
                <div className="border border-[#252525] rounded-lg bg-[#0a0a0a]/80 p-4 md:p-6 overflow-hidden hover:border-[#353535] transition-colors duration-300">
                    <p className="text-[#8a8a8a] text-sm font-mono mb-4 text-center md:text-left">
                        Building in public — regular commits, side projects, and open-source
                        contributions.
                    </p>
                    <a
                        href={GITHUB_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E64500] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                    >
                        <img
                            src={CHART_IMG_URL}
                            alt={`GitHub contribution graph for ${GITHUB_USERNAME}`}
                            className="w-full h-auto rounded border border-[#1e1e1e] bg-transparent invert hue-rotate-180 brightness-90 contrast-125"
                        />
                    </a>
                    <div className="mt-4 flex flex-wrap items-center justify-center md:justify-between gap-3">
                        <span className="text-[#6B6B6B] font-mono text-sm">
                            @{GITHUB_USERNAME}
                        </span>
                        <a
                            href={GITHUB_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#E64500] font-mono text-sm hover:text-[#ff5722] transition-colors border border-[#2a2a2a] hover:border-[#E64500]/50 px-3 py-1.5 rounded-md"
                        >
                            <Github size={16} />
                            View profile
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default GitHubContributions;