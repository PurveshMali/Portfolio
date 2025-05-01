import { useEffect, useState } from "react";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const moveHandler = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      // Add a new particle at the current mouse position
      setTrail((prev) => [
        ...prev.slice(-12), // Keep only the last 7 particles
        {
          x: clientX,
          y: clientY,
          id: Math.random(),
          value: Math.random() > 0.5 ? "1" : "0", // Random text for the trail
        },
      ]);
    };

    window.addEventListener("mousemove", moveHandler);

    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1)); // Remove the oldest particle
    }, 60); // Particle vanish interval

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block "
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 border border-orange-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Trail particles */}
      {trail.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-40 text-orange-600 text-[10px] font-bold opacity-80"
          style={{
            top: `${p.y - 2}px`, // Position the particle relative to the mouse cursor
            left: `${p.x - 2}px`, // Offset by -2px to center it
            transform: "translate(-50%, -50%)", // Center the particle at cursor
            animation: "fadeOut 0.6s forwards", // Fade out effect
          }}
        >
          {p.value}
        </div>
      ))}

      {/* Fading effect */}
      <style>{`
        @keyframes fadeOut {
          0% { opacity: 0.8; transform: scale(1) translate(-50%, -50%); }
          100% { opacity: 0; transform: scale(0.5) translate(-50%, -50%); }
        }
      `}</style>
    </>
  );
};

export default CursorTrail;
