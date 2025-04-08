import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import "./App.css"

function App() {
  return (
    <>
      <ParticlesBackground id="particles" />

      <Navbar />

      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
