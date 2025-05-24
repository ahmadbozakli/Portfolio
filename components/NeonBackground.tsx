// NeonBackground.jsx
"use client";
import { useEffect } from "react";

const NeonBackground = () => {
  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "neon-particle";

      const colors = ["", "cyan", "white"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      if (randomColor) particle.classList.add(randomColor);

      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 15 + 20}s`;
      particle.style.setProperty(
        "--random-x",
        `${(Math.random() - 0.5) * 100}px`
      );

      const container = document.getElementById("neon-particles");
      if (container) {
        container.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.remove();
          }
        }, 35000);
      }
    };

    // Create animated lines
    const createLine = () => {
      const line = document.createElement("div");
      line.className = "neon-line";
      line.style.top = `${Math.random() * 100}%`;
      line.style.animationDelay = `${Math.random() * 3}s`;

      const container = document.getElementById("neon-lines");
      if (container) {
        container.appendChild(line);

        setTimeout(() => {
          if (line.parentNode) {
            line.remove();
          }
        }, 6000);
      }
    };

    // Create floating tech symbols
    const createFloatingElement = () => {
      const symbols = ["◆", "◇", "▲", "△", "●", "○", "■", "□", "▼", "▽"];
      const element = document.createElement("div");
      element.className = "neon-float-item";
      element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      element.style.top = `${Math.random() * 100}%`;
      element.style.left = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 15}s`;
      element.style.animationDuration = `${Math.random() * 10 + 15}s`;

      const container = document.getElementById("neon-floating-elements");
      if (container) {
        container.appendChild(element);

        setTimeout(() => {
          if (element.parentNode) {
            element.remove();
          }
        }, 25000);
      }
    };

    // Initialize animations
    const particleInterval = setInterval(createParticle, 800);
    const lineInterval = setInterval(createLine, 4000);
    const floatingInterval = setInterval(createFloatingElement, 6000);

    // Create initial elements
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 200);
    }

    for (let i = 0; i < 3; i++) {
      setTimeout(createLine, i * 1000);
    }

    for (let i = 0; i < 5; i++) {
      setTimeout(createFloatingElement, i * 800);
    }

    // Mouse interaction
    const handleMouseMove = (e: any) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      // Move orbs slightly based on mouse position
      const orbs = document.querySelectorAll(".neon-orb");
      orbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.02;
        const translateX = (mouseX - 0.5) * 50 * factor;
        const translateY = (mouseY - 0.5) * 50 * factor;
        (
          orb as HTMLElement
        ).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      clearInterval(particleInterval);
      clearInterval(lineInterval);
      clearInterval(floatingInterval);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="neon-tech-bg">
      <div className="neon-grid"></div>
      <div className="neon-orbs">
        <div className="neon-orb neon-orb-1"></div>
        <div className="neon-orb neon-orb-2"></div>
        <div className="neon-orb neon-orb-3"></div>
      </div>
      <div className="neon-particles" id="neon-particles"></div>
      <div className="neon-lines" id="neon-lines"></div>
      <div className="neon-floating-elements" id="neon-floating-elements"></div>
    </div>
  );
};

export default NeonBackground;
