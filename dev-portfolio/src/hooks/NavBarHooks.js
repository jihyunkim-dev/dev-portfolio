import { useEffect, useState } from "react";

export function NavBarHooks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const mainContainerHeight = window.innerHeight;

      if (window.scrollY > mainContainerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isVisible,
    activeSection,
  };
}
