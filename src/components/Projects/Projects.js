import React, { useContext } from "react";
import "./Projects.css";
import { Github, Link } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

// Images
import file_wave from "../../assets/file_wave.png";
import gemini from "../../assets/gemini.png";
import sudoku from "../../assets/sudoku.png";
import wikipedia from "../../assets/wikipedia.png";
import food from "../../assets/food.png";
import todo from "../../assets/todo.png";
import store from "../../assets/store.png";
import transaction from "../../assets/transaction.png";

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      title: "File Wave",
      description:
        "File Wave is a MERN stack-based file-sharing application designed to streamline the process of securely uploading and sharing files.",
      image: file_wave,
      live: "https://file-sharing-project-client.onrender.com/",
      github: "https://github.com/SanjayNarukulla/File-Sharing-Project",
      tags: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title: "Gemini Clone",
      description:
        "Project Gemini Clone is a cutting-edge web application built with Vite and React, integrating Google Generative AI to provide intelligent, real-time responses.",
      image: gemini,
      live: "https://sanjays-gemini-de3f36.netlify.app/",
      github: "https://github.com/SanjayNarukulla/gemini-clone",
      tags: ["React", "Google API"],
    },
    {
      title: "Store Rating App",
      description:
        "A role-based web app for rating stores with separate dashboards for Admin, Owner, and User to manage reviews, feedback, and store details.",
      image: store,
      github: "https://github.com/SanjayNarukulla/store-rating-app",
      live: "https://store-rating-app-1-r9py.onrender.com/login",
      tags: ["React", "NodeJS", "ExpressJS", "Postgres"],
    },
    {
      title: "Transaction Dashboard",
      description:
        "A dashboard app to monitor transactions with charts and user-friendly UI for data insights.",
      image: transaction,
      github: "https://github.com/SanjayNarukulla/Transaction-Dashboard",
      live: "https://transaction-dashboard-1-sj1k.onrender.com",
      tags: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title: "Sudoku Solver",
      description:
        "Sudoku Solver is an interactive and educational web application designed to help users solve Sudoku puzzles efficiently.",
      image: sudoku,
      github: "https://github.com/SanjayNarukulla/Suduko-Solver",
      live: "https://sanjays-sudoku-solver.netlify.app/",
      tags: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Wikipedia Search Application",
      description:
        "A custom Wikipedia search application that simplifies searching.",
      image: wikipedia,
      live: "http://sanjaywiki.ccbp.tech",
      github: "https://github.com/username/ecommerce",
      tags: ["HTML", "CSS", "Javascript", "API"],
    },
    {
      title: "Food Munch",
      description:
        "A Responsive Food Ordering website template built using HTML and CSS.",
      image: food,
      github: "https://github.com/username/ecommerce",
      live: "http://sanjaywebfood.ccbp.tech",
      tags: ["HTML", "CSS", "Bootstrap"],
    },
    {
      title: "ToDo",
      description: "A simple ToDo app built with HTML, CSS, and JavaScript.",
      image: todo,
      live: "http://sanjaytodos.ccbp.tech",
      github: "https://github.com/username/ecommerce",
      tags: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    },
  ];

  return (
    <div className={`${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={18} className="icon" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Link size={18} className="icon" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
