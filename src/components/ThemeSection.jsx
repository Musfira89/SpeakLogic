import React from "react";

const ThemeSection = () => {
  const blobPath =
    "M44.8,-65.4C58.2,-56.3,69.5,-43.6,74.3,-29.4C79.1,-15.3,77.5,-0.1,70.6,12.9C63.6,25.9,51.3,36.7,38.3,46.1C25.3,55.5,12.6,63.4,-0.3,63.8C-13.1,64.2,-26.1,57.2,-38.6,48C-51.1,38.9,-63.2,27.7,-67.5,13.8C-71.8,-0.2,-68.2,-16.9,-59.5,-30.3C-50.8,-43.8,-36.9,-53.9,-22.2,-61.3C-7.4,-68.7,8.2,-73.5,22.7,-70.3C37.3,-67.1,52.6,-55.5,44.8,-65.4Z";

  return (
    <section className="my-16 px-6">
      <div className="relative bg-[#379f00] rounded-3xl py-14 px-6 md:px-28 text-center text-white max-w-7xl mx-auto shadow-xl overflow-hidden">
        {/* --- Floating Blobs --- */}
        <svg
          className="absolute top-16 left-[-60px] w-44 opacity-20 z-0"
          style={{ animation: "float 8s ease-in-out infinite" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d={blobPath} transform="translate(100 100)" />
        </svg>

        <svg
          className="absolute bottom-16 right-[-70px] w-56 opacity-20 z-0"
          style={{ animation: "float 6s ease-in-out infinite" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d={blobPath} transform="translate(100 100)" />
        </svg>

        <svg
          className="absolute top-32 right-[30%] w-36 opacity-20 z-0"
          style={{ animation: "float 7s ease-in-out infinite" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff" d={blobPath} transform="translate(100 100)" />
        </svg>

        {/* --- Dot Grid Left --- */}
        <div className="absolute top-28 left-24 opacity-10 z-0">
          <svg width="100" height="100" viewBox="0 0 100 100">
            {[...Array(60)].map((_, i) => (
              <circle
                key={i}
                cx={(i % 8) * 11}
                cy={Math.floor(i / 8) * 11}
                r="1.9"
                fill="white"
              />
            ))}
          </svg>
        </div>

        {/* --- Dot Grid Right --- */}
        <div className="absolute bottom-28 right-28 opacity-10 z-0">
          <svg width="100" height="100" viewBox="0 0 100 100">
            {[...Array(60)].map((_, i) => (
              <circle
                key={i}
                cx={(i % 8) * 11}
                cy={Math.floor(i / 8) * 11}
                r="1.6"
                fill="white"
              />
            ))}
          </svg>
        </div>

        {/* --- Content --- */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm">
            Speak Logic Project’s Theme
          </h2>
          <p className="text-base md:text-md max-w-2xl mx-auto mb-10 leading-relaxed">
            Master communication through logical analysis. Identify errors,
            apply core principles, and transform the way you express,
            understand, and connect with others.
          </p>
          <button className="bg-[#47be07] text-white font-semibold px-8 py-3 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-[#47be07]">
            Get in Touch
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
