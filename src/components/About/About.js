import React, { useContext } from "react";
import "./about.css";
import { Globe, Server, Code2 } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`about-wrapper ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="about-container">
        <h3 className="about-main-title">About Me</h3>
        <p className="about-description">
          I’m a passionate developer driven by curiosity and a love for
          learning. I enjoy tackling challenges, pushing boundaries, and
          constantly refining my skills to deliver meaningful and effective
          solutions. With a strong work ethic and a focus on continuous growth,
          I strive to turn ideas into impactful digital experiences.
        </p>

        <div className="about-grid">
          {/* Frontend */}
          <div className="about-card">
            <div className="icon-box blue">
              <Globe color="black" />
            </div>
            <h3 className="about-title">Frontend Development</h3>
            <p className="about-text">
              Creating responsive and interactive user interfaces using modern
              frameworks and best practices.
            </p>
          </div>

          {/* Backend */}
          <div className="about-card">
            <div className="icon-box green">
              <Server color="black" />
            </div>
            <h3 className="about-title">Backend Development</h3>
            <p className="about-text">
              Building scalable server-side applications and RESTful APIs with
              modern technologies.
            </p>
          </div>

          {/* Clean Code */}
          <div className="about-card">
            <div className="icon-box purple">
              <Code2 color="black" />
            </div>
            <h3 className="about-title">Clean Code</h3>
            <p className="about-text">
              Writing maintainable, efficient, and well-documented code
              following industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
