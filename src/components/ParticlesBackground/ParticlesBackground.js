// src/components/ParticlesBackground/ParticlesBackground.js
import React, { useCallback, useContext } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ThemeContext } from "../../context/ThemeContext";

const ParticlesBackground = () => {
  const { theme } = useContext(ThemeContext);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  

  return (
    <Particles
      key={theme}
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: theme === "dark" ? "#121212" : "#ffffff",
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: theme === "dark" ? "#ffffff" : "#000000",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: theme === "dark" ? "#ffffff" : "#000000",
            opacity: 0.4,
            width: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
