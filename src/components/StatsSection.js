import React, { useEffect, useState, useRef } from "react";
import "../styles/stats.css";

const statsData = [
  { id: 1, icon: "🏢", label: "Years in Business", target: 14, suffix: "+" },
  { id: 2, icon: "👥", label: "Team Members", target: 245, suffix: "+" },
  { id: 3, icon: "🛋️", label: "Furniture Sold", target: 5000, suffix: "+" },
  { id: 4, icon: "🏠", label: "Homes Furnished", target: 690 },
  { id: 5, icon: "🏗️", label: "Projects Completed", target: 10000, suffix: "+" },
  { id: 6, icon: "😊", label: "Happy Clients", target: 10000, suffix: "+" },
];

const StatsSection = () => {
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current; // ✅ Store ref in variable

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      let duration = 3000;
      let steps = 50;
      let intervalTime = duration / steps;

      let increments = statsData.map((stat) => Math.ceil(stat.target / steps));
      let currentCounts = Array(statsData.length).fill(0);

      let interval = setInterval(() => {
        let newCounts = currentCounts.map((count, index) =>
          count + increments[index] >= statsData[index].target
            ? statsData[index].target
            : count + increments[index]
        );
        setCounters(newCounts);
        currentCounts = newCounts;

        if (newCounts.every((count, index) => count === statsData[index].target)) {
          clearInterval(interval);
        }
      }, intervalTime);
    }
  }, [visible]);

  return (
    <section id="stats-section" className={`stats-container ${visible ? "visible" : ""}`} ref={sectionRef}>
      <div className="stats-row">
        {statsData.slice(0, 2).map((stat, index) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon-box">{stat.icon}</div>
            <div className="stat-text">
              <h2 className="stat-number">
                {counters[index]}
                {stat.suffix || ""}
              </h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="stats-row">
        {statsData.slice(2, 6).map((stat, index) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon-box">{stat.icon}</div>
            <div className="stat-text">
              <h2 className="stat-number">
                {counters[index + 2]}
                {stat.suffix || ""}
              </h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
