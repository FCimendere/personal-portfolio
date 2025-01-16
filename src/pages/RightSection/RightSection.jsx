import React, { useEffect, useRef, useState } from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Projects/Project";
import Contact from "../Contacts/Contact";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import GoToTop from "../../components/GoToTop";

const RightSection = ({ onSectionChange }) => {
  const sections = ["about", "project", "experience", "contact"];
  const activeSection = useIntersectionObserver(sections);
  const [showButton, setShowButton] = useState(false);

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
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
  );
};

export default RightSection;
