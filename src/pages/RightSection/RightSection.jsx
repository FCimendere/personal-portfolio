import React from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Projects/Project";
import Contact from "../Contacts/Contact";

const RightSection = () => {
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
    </div>
  );
};

export default RightSection;
