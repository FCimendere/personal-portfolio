import React, { useEffect, useRef, useState } from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Projects/Project";
import Contact from "../Contacts/Contact";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import GoToTop from "../../components/GoToTop";
import DarkButton from "../../components/DarkButton";

const RightSection = ({ onSectionChange }) => {
  const sections = ["about", "project", "experience", "contact"];
  const activeSection = useIntersectionObserver(sections);
  const [showButton, setShowButton] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      // Check localStorage first
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      // Fall back to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.addEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  useEffect(() => {
    if (activeSection) {
      onSectionChange(`link-${activeSection}`);
    }
  }, [activeSection, onSectionChange]);

  useEffect(() => {
    // Update the DOM when dark mode changes
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const darkModeHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <DarkButton switchMode={darkModeHandler} isDark={!isDark} />

      <div className="space-y-16">
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        {showButton && (
          <GoToTop
            showGoTop="fixed bottom-5 right-7 z-50 cursor-pointer p-4"
            scrollUp={handleScrollToTop}
          />
        )}
      </div>
    </>
  );
};

export default RightSection;
