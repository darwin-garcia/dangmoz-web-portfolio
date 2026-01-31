"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Partículas cargadas:", container);
  };

  const options = {
    // Fondo transparente para que se vea el color de tu sección Hero
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        // Al hacer click, añade más partículas
        onClick: { enable: true, mode: "push" },
        // Al pasar el mouse, las partículas se conectan
        onHover: { enable: true, mode: "grab" },
        // resize: true,
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 200, links: { opacity: 0.5 } },
      },
    },
    particles: {
      // AQUÍ ESTÁ EL CAMBIO DE COLORES
      // Pasamos un array con varios colores hexadecimales
      color: {
        value: ["#ffffff", "#00ff00ff","#007bffff", "#6f00ffff", "#ff0000ff"], 
      },
      links: {
        // Las líneas heredarán el color de la partícula de origen
        color: "random", 
        distance: 150,
        enable: false,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        // Velocidad sutil para que no maree al haber tantas
        speed: 1.5, 
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        // AQUÍ AUMENTAMOS LA CANTIDAD
        value: 240, 
      },
      interactivity: {
        events: {
            // ...
            onHover: { 
            enable: true, 
            mode: "grab" // <--- El modo "grab" es el que crea líneas magnéticas con el mouse
            }, 
        },
        modes: {
            grab: { 
            distance: 200, 
            links: { opacity: 0.5 } // Configuración de las líneas del mouse
            },
        },
      },
      opacity: {
        value: { min: 0.3, max: 0.7 }, // Opacidad variable para efecto de brillo
        animation: {
          enable: true,
          speed: 1,
          sync: false
        }
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        // CAMBIO: 'fixed' en lugar de 'absolute'
        // Esto hace que el fondo siga el scroll de la pantalla
        className="absolute inset-0 -z-10 " 
      />
    );
  }

  return null;
};

export default ParticleBackground;