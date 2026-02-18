import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Code2, Award, Calendar, Image as ImageIcon } from "lucide-react";

const EVENTS = [
    {
        id: 1,
        name: "Hack-a-Bit",
        year: "2025",
        role: "Winner",
        impact: "Built BeAmongUs — complaint management system for Municipal Corporation.",
        type: "hackathon",
        icon: Trophy,
        detailDescription: "BeAmongUs is a complaint management system designed for Municipal Corporation to streamline citizen grievances, track resolution status, and improve civic responsiveness.",
        techStack: ["React", "Node.js", "MongoDB", "REST API"],
        images: ["https://res.cloudinary.com/dpk2tsmvv/image/upload/v1769586143/beamongus_djwqp8.png", "https://res.cloudinary.com/dpk2tsmvv/image/upload/v1769585912/studentThumbnail_v04ve8.png"], // Add event image URLs here, e.g. ["/events/hackabit-1.jpg", "/events/hackabit-2.jpg"]
    },
    {
        id: 2,
        name: "Innohack 2.0",
        year: "July 2025",
        role: "6th Place among 256+ teams",
        impact: "Nationwide Cloud-Based Air Quality Prediction Platform.",
        type: "hackathon",
        icon: Code2,
        detailDescription: " Engineered a nationwide AI platform to predict and visualize real-time air quality, processing 9GB INSAT satellitedata with a Random Forest model to achieve 85%+ accuracy.",
        techStack: ["ML", "React", "Python", "SHAP"],
        images: [],
    },
    {
        id: 3,
        name: "Smart India Hackathon",
        year: "2025",
        role: "SemiFinalist",
        impact: "MineX",
        type: "hackathon",
        icon: Award,
        detailDescription: "PowerChoice helps users assess environmental impact of energy choices with predictive modeling and clear visualizations for sustainable decision-making.",
        techStack: ["Python", "ML", "Data Visualization"],
        images: [],
    },
];

const ROLE_STYLES = {
    Winner: "border-[#22c55e]/60 text-[#22c55e] bg-[#22c55e]/10",
    Finalist: "border-[#E64500]/60 text-[#E64500] bg-[#E64500]/10",
    Participant: "border-[#6B6B6B] text-[#a3a3a3] bg-[#2a2a2a]",
    SemiFinalist: "border-[red]/60 text-[red] bg-[red]/10",
};

const EventImageCarousel = ({ images, name }) => {
    const [index, setIndex] = useState(0);

    React.useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

    const imageToShow = images[index];

    return (
        <div className="relative w-full h-full bg-[#111]">
             <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                    key={imageToShow}
                    src={imageToShow}
                    alt={`${name} ${index + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            
            {/* Optional: Simple dot indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === index ? "bg-[#E64500]" : "bg-white/20"}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const HackathonsSection = () => {
    const [hoveredEventId, setHoveredEventId] = useState(null);
    const hoveredEvent = EVENTS.find((e) => e.id === hoveredEventId);


    return (
        <section
            id="hackathons"
            className="w-full px-4 py-12 md:py-16 md:px-10 lg:px-20"
            aria-labelledby="hackathons-section-title"
        >
            <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10">
                <div className="flex flex-col md:flex-row  items-center w-full md:w-auto space-y-2 space-x-6 md:mb-0">
                    <h1 className="text-2xl md:text-3xl text-[#B3B3B3] font-[font10]">
                        <span className="text-[#E64500]">#</span>
                        Competitive Coding 
                    </h1>
                    <div className=" md:block w-24 md:w-100 h-[1px] bg-[#E64500]"></div>
                </div>
            </div>

            <p className="mt-4 mb-10 text-[#8a8a8a] text-sm font-mono max-w-2xl mx-auto text-center md:text-left md:mx-0">
                Hackathons and competitive programming keep me sharp and shipping under
                constraints.
            </p>

            <div
                className="mt-8 md:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch"
                onMouseLeave={() => setHoveredEventId(null)}
            >
                {/* Left: Timeline + cards */}
                <div className="space-y-6 max-w-3xl flex-1 min-w-0">
                    {EVENTS.map((event, index) => {
                        const Icon = event.icon;
                        const roleStyle =
                            ROLE_STYLES[event.role] ?? ROLE_STYLES.Participant;
                        const isHovered = hoveredEventId === event.id;
                        return (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="group relative flex gap-4 md:gap-6"
                                onMouseEnter={() => setHoveredEventId(event.id)}
                            >
                                <div className="hidden md:flex flex-col items-center shrink-0">
                                    <div className={`w-10 h-10 rounded-full border-2 bg-[#0a0a0a] flex items-center justify-center transition-colors duration-300 ${isHovered ? "border-[#E64500]/60" : "border-[#252525] group-hover:border-[#E64500]/50"}`}>
                                        <Icon className={isHovered ? "text-[#E64500]" : "text-[#6B6B6B] group-hover:text-[#E64500]"} size={18} />
                                    </div>
                                    {index < EVENTS.length - 1 && (
                                        <div className="w-px flex-1 min-h-[40px] bg-[#252525] mt-2" />
                                    )}
                                </div>

                                <div className={`flex-1 border rounded-lg p-4 md:p-5 transition-all duration-300 cursor-default ${isHovered ? "border-[#E64500]/40 bg-[#0f0f0f]/90" : "border-[#212121] bg-[#0a0a0a]/50 hover:border-[#2d2d2d] hover:bg-[#0f0f0f]/80"}`}>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-lg md:text-xl font-[font10] text-[#e5e5e5]">
                                            {event.name}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#6B6B6B]">
                                            <Calendar size={12} />
                                            {event.year}
                                        </span>
                                        <span
                                            className={`inline-flex items-center px-2 py-0.5 rounded border text-xs font-mono ${roleStyle}`}
                                        >
                                            {event.role}
                                        </span>
                                    </div>
                                    <p className="text-[#a3a3a3] text-sm font-mono leading-relaxed">
                                        {event.impact}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Right: Detail card (reserved space, only visible on lg+) */}
                <div className="hidden lg:flex flex-1 min-w-[320px] max-w-[400px] items-start justify-start pt-0">
                    <AnimatePresence mode="wait">
                        {hoveredEvent ? (
                            <motion.div
                                key={hoveredEvent.id}
                                initial={{ opacity: 0, scale: 0.96, x: -16 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.96, x: -16 }}
                                transition={{
                                    type: "spring",
                                    damping: 26,
                                    stiffness: 340,
                                    mass: 0.8,
                                }}
                                className="w-full rounded-xl border border-[#252525] bg-[#0a0a0a]/95 backdrop-blur-sm overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                                style={{ transformOrigin: "left center" }}
                            >
                                {/* Image section */}
                                <div className="relative w-full aspect-[16/10] bg-[#111] border-b border-[#1a1a1a] overflow-hidden">
                                    {hoveredEvent.images && hoveredEvent.images.length > 0 ? (
                                        <EventImageCarousel images={hoveredEvent.images} name={hoveredEvent.name} />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-[#333]">
                                            <div className="flex flex-col items-center gap-2">
                                                <ImageIcon size={40} strokeWidth={1} />
                                                <span className="text-xs font-mono">Event images</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-5 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-[font10] text-[#e5e5e5] mb-1">
                                            {hoveredEvent.name}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#6B6B6B]">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {hoveredEvent.year}
                                            </span>
                                            <span className={`inline-flex px-2 py-0.5 rounded border text-xs font-mono ${ROLE_STYLES[hoveredEvent.role] ?? ROLE_STYLES.Participant}`}>
                                                {hoveredEvent.role}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-[#a3a3a3] text-sm font-mono leading-relaxed">
                                        {hoveredEvent.detailDescription || hoveredEvent.impact}
                                    </p>
                                    {hoveredEvent.techStack && hoveredEvent.techStack.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {hoveredEvent.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#1a1a1a] text-[#9a9a9a] border border-[#252525]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="placeholder"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-full rounded-xl border border-dashed border-[#252525] bg-[#0a0a0a]/30 flex items-center justify-center min-h-[280px]"
                            >
                                <p className="text-[#404040] text-sm font-mono">Hover a card for details</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default HackathonsSection;