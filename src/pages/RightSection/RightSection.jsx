import React, { useEffect, useRef, useState } from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Projects/Project";
import Contact from "../Contacts/Contact";
// import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import GoToTop from "../../components/GoToTop";
import DarkButton from "../../components/DarkButton";
import { throttle } from "lodash";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cloudy from "../../assets/cloudy.png";
import hill from "../../assets/hill.png";
import balloon from "../../assets/balloon.png";
import clouds from "../../assets/clouds.png";

const sectionMap = {
  "link-about": 0,
  "link-project": 1,
  "link-experience": 2,
  "link-contact": 3,
};

const RightSection = ({ activeId }) => {
  const sections = ["about", "project", "experience", "contact"];
  // const activeSection = useIntersectionObserver(sections);
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
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScrollButtonVisibility = throttle(() => {
      setShowButton(window.scrollY > 300);
    }, 200); // Runs every 200ms instead of every frame

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  // useEffect(() => {
  //   if (activeSection) {
  //     onSectionChange(`link-${activeSection}`);
  //   }
  // }, [activeSection, onSectionChange]);

  useEffect(() => {
    if (activeId && sectionMap.hasOwnProperty(activeId)) {
      parallaxRef.current.scrollTo(sectionMap[activeId]);
    }
  }, [activeId]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // useEffect(() => {
  //   const handleParallaxScroll = () => {
  //     if (!parallaxRef.current) return;

  //     const container = parallaxRef.current.container;
  //     const scrollY = container.scrollTop;
  //     const pageHeight = window.innerHeight;

  //     const currentPage = Math.round(scrollY / pageHeight);
  //     const newActiveId = Object.entries(sectionMap).find(
  //       ([, value]) => value === currentPage
  //     )?.[0];

  //     if (newActiveId) {
  //       onSectionChange?.(newActiveId);
  //     }
  //   };

  //   const container = parallaxRef.current?.container;
  //   container?.addEventListener("scroll", handleParallaxScroll);

  //   return () => {
  //     container?.removeEventListener("scroll", handleParallaxScroll);
  //   };
  // }, [onSectionChange]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const darkModeHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <DarkButton switchMode={darkModeHandler} isDark={!isDark} />

      {/* <div className="space-y-16">
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
      </div> */}
      <div style={{ height: "100vh" }} className="relative">
        <Parallax ref={parallaxRef} pages={4}>
          <ParallaxLayer offset={0} speed={0.5}>
            <section id="about" className="min-h-screen">
              <About />
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.9}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={balloon}
              style={{
                display: "block",
                width: "15%",
                marginLeft: "70%",
                opacity: 0.5,
              }}
            />
            <img
              src={clouds}
              style={{
                display: "block",
                width: "15%",
                marginLeft: "20%",
                opacity: 0.5,
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <section id="project" className="min-h-screen">
              <Project />
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.7}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={cloudy}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "20%",
                opacity: 0.5,
              }}
            />
            <img
              src={cloudy}
              style={{
                display: "block",
                width: "15%",
                marginLeft: "60%",
                opacity: 0.5,
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.5}>
            <section id="experience" className="min-h-screen">
              <Experience />
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.9}
            speed={0.5}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={balloon}
              style={{
                display: "block",
                width: "15%",
                marginLeft: "80%",
                opacity: 0.8,
              }}
            />
            <img
              src={clouds}
              style={{
                display: "block",
                width: "15%",
                marginLeft: "20%",
                opacity: 0.5,
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.5}>
            <section id="contact" className="min-h-screen">
              <Contact />
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.4}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <img src={hill} style={{ width: "60%", opacity: 0.7 }} />
          </ParallaxLayer>
        </Parallax>
      </div>
      {showButton && (
        <GoToTop
          showGoTop="fixed bottom-5 right-7 z-50 cursor-pointer p-4 overflow-hidden"
          scrollUp={handleScrollToTop}
        />
      )}
    </>
  );
};

export default RightSection;
