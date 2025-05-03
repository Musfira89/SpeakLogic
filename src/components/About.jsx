import React from "react";
import { motion } from "framer-motion";

const ThemeSection = () => {
  const blobPath =
    "M44.8,-65.4C58.2,-56.3,69.5,-43.6,74.3,-29.4C79.1,-15.3,77.5,-0.1,70.6,12.9C63.6,25.9,51.3,36.7,38.3,46.1C25.3,55.5,12.6,63.4,-0.3,63.8C-13.1,64.2,-26.1,57.2,-38.6,48C-51.1,38.9,-63.2,27.7,-67.5,13.8C-71.8,-0.2,-68.2,-16.9,-59.5,-30.3C-50.8,-43.8,-36.9,-53.9,-22.2,-61.3C-7.4,-68.7,8.2,-73.5,22.7,-70.3C37.3,-67.1,52.6,-55.5,44.8,-65.4Z";

  return (
    <section className="my-16 px-6 mb-32">
      <div className="relative bg-[#379f00] rounded-[2rem] py-12 px-6 md:px-28 text-white max-w-7xl mx-auto shadow-2xl overflow-hidden backdrop-blur-md">
        {/* --- Floating Blobs --- */}
        <svg
          className="absolute top-14 left-[-60px] w-44 opacity-30 z-0 drop-shadow-xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d={blobPath} transform="translate(100 100)" />
        </svg>

        <svg
          className="absolute bottom-16 right-[-70px] w-60 opacity-30 z-0 drop-shadow-xl"
          style={{ animation: "float 6s ease-in-out infinite" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d={blobPath} transform="translate(100 100)" />
        </svg>

        <svg
          className="absolute top-32 right-[30%] w-40 opacity-30 z-0 drop-shadow-xl"
          style={{ animation: "float 7s ease-in-out infinite" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d={blobPath} transform="translate(100 100)" />
        </svg>

        {/* --- Dot Grid Left --- */}
        <div className="absolute top-28 left-24 opacity-20 z-0">
          <svg width="100" height="100" viewBox="0 0 100 100">
            {[...Array(60)].map((_, i) => (
              <circle
                key={i}
                cx={(i % 8) * 11}
                cy={Math.floor(i / 8) * 11}
                r="2"
                fill="white"
              />
            ))}
          </svg>
        </div>

        {/* --- Dot Grid Right --- */}
        <div className="absolute bottom-28 right-28 opacity-20 z-0">
          <svg width="100" height="100" viewBox="0 0 100 100">
            {[...Array(60)].map((_, i) => (
              <circle
                key={i}
                cx={(i % 8) * 11}
                cy={Math.floor(i / 8) * 11}
                r="2"
                fill="white"
              />
            ))}
          </svg>
        </div>

        {/* --- Content --- */}
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-sm">
            Speak Logic About
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/90 text-base md:text-md max-w-2xl mx-auto mb-10 leading-relaxed text-justify"
          >
            We’re a nonprofit helping people become better communicators—not
            just by practice, but by learning how communication works. Speak
            Logic is where communication becomes a subject to study, not just a
            skill to try. Whether local or global, we help you use logic to
            speak, solve, and connect better.
          </motion.p>
          <button className="bg-white text-[#379f00] font-bold px-10 py-3 rounded-full border border-white shadow-md transition-all duration-300 hover:bg-[#47be07] hover:text-white">
            Learn more
          </button>
        </div>
      </div>

      {/* Float animation using raw CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default ThemeSection;
