import React, { useState } from "react";
import Footer from "../../components/Footer";
import Circle from "../../components/Circle";
import { Link } from "react-scroll";
import GradientTextButton from "../../components/GradientTextButton";
import GradientText from "../../components/GradientText";

const Home = ({ activeId, setActiveId }) => {
  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <>
      <div className="text-dark-blue font-display">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl :text-center">
          <a href="/">Fulya Çimendere</a>
        </h1>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={4}
          showBorder={false}
          className="custom-class justify-start mt-3 text-lg font-medium tracking-tight sm:text-lg"
        >
          Full Stack Developer
        </GradientText>
        {/* <h2 className="text-mid-blue mt-3 text-lg font-medium tracking-tight sm:text-lg">
          Full Stack Developer
        </h2> */}
        <p className="text-light-blue mt-4 max-w-xs leading-normal">
          Developer who loves creative design and the fusion of user experience
          with robust engineering.
        </p>
      </div>
      <div className="flex">
        {/* Circle Shape */}
        <div className="hidden sm:flex justify-center align-center circle-shape py-24">
          <Circle id={activeId} />
        </div>

        {/* Button Group */}

        <div className="hidden sm:flex button-group flex-col justify-center -gap-6 ">
          {["about", "project", "experience", "contact"].map((section) => (
            <GradientTextButton
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={true}
              className={`custom-class uppercase ${
                ["project", "experience"].includes(section) ? "ml-10" : ""
              }`}
            >
              <Link
                key={section}
                id={`link-${section}`}
                to={section}
                smooth={true}
                duration={500}
                onClick={() => handleClick(`link-${section}`)}
              >
                <span>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </Link>
            </GradientTextButton>
          ))}
        </div>
      </div>

      {/* Footer Group */}
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Home;
