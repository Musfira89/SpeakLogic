import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { number: 1500, label: "Users Empowered" },
    { number: 50, label: "Educational Resources" },
    { number: 30, label: "Softwares" },
    { number: 200, label: "Happy Clients" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < stat.number) {
              newCounts[index] += Math.ceil(stat.number / 50); // speed factor
              if (newCounts[index] > stat.number) newCounts[index] = stat.number;
            }
            return newCounts;
          });
        }, 30);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full bg-[#e5f8d1] py-32 font-sora">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-5xl font-bold text-gray-700">
              {counts[index]}
            </p>
            <div className="w-8 h-1 bg-green-600 rounded-full mt-2"></div>
            <p className="text-sm text-gray-500 mt-3">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
