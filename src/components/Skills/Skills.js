import React, { useContext } from "react";
import "./Skills.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function Skills() {
  const { theme } = useContext(ThemeContext);
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 30 },
        { name: "Tailwind CSS", level: 45 },
        { name: "HTML5/CSS3", level: 95 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "RESTful APIs", level: 95 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", level: 40 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "SQLite", level: 70 },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", level: 30 },
        { name: "AWS", level: 55 },
        { name: "Git", level: 70 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`skills-section ${theme === "dark" ? "dark-theme" : ""}`}
    >
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-label">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
