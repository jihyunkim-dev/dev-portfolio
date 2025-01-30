import { useEffect, useState } from "react";

export function NavBarHooks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.getElementById("main");
      const introContainer = document.getElementById("intro");
      const mainContainerHeight = window.innerHeight;

      if (introContainer) {
        const introTop = introContainer.getBoundingClientRect().top;

        setIsVisible(introTop <= window.innerHeight);
      }

      // setIsVisible(window.scrollY > mainContainerHeight - 100);

      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isVisible,
    activeSection,
  };
}
