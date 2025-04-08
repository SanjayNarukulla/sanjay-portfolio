import React, { useContext } from "react";
import "./home.css";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Hero from "../../assets/hero.png";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home-container ${theme}`}>
      <div className="text-content">
        <span className="hello-greet">
          Hello! <span className="wave">👋</span>
        </span>

        <p className="name-display">
          I'm <span className="highlight">Sanjay Narukulla</span>
        </p>

        <p className="role-display">Full Stack Developer</p>

        <div className="button-group">
          <a
            href="https://drive.google.com/file/d/1RxFlM3dcgMGiPjg6VHmwPQ3itkIAm5rF/view"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Download Resume
          </a>

          <a href="#contact" className="get-in-button">
            Get in Touch!
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://x.com/SanjayNarukulla?t=ySUPurzUxqHyLRwLgttsYQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter />
          </a>

          <a
            href="https://www.instagram.com/_sanjay14_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>

          <a
            href="https://www.linkedin.com/in/narukulla-sanjay/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/SanjayNarukulla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
        </div>
      </div>

      <div className="pic-container">
        <div className="image-bg-shape">
          <img src={Hero} className="hero-image" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
