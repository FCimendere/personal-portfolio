import React, { useState } from "react";
import Footer from "../../components/Footer";
import Circle from "../../components/Circle";
import { Link } from "react-scroll";

const Home = ({ activeId, setActiveId }) => {
  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="">
      <div className="text-dark-blue font-display">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl :text-center">
          <a href="/">Fulya Çimendere</a>
        </h1>
        <h2 className="text-mid-blue mt-3 text-lg font-medium tracking-tight sm:text-lg">
          Full Stack Developer
        </h2>
        <p className="text-light-blue mt-4 max-w-xs leading-normal">
          Developer who loves creative design and the fusion of user experience
          with robust engineering.
        </p>
      </div>
      <div className="flex">
        {/* Circle Shape */}
        <div className="justify-center align-center circle-shape py-24">
          <Circle id={activeId} />
        </div>

        {/* Button Group */}

        <div className="button-group flex flex-col justify-center gap-8 ">
          {["about", "project", "experience", "contact"].map((section) => (
            <Link
              key={section}
              id={`link-${section}`}
              to={section}
              smooth={true}
              duration={500}
              onClick={() => handleClick(`link-${section}`)}
              className={`relative block no-underline uppercase overflow-hidden w-40 text-center text-mid-blue rounded-3xl border border-light-grey shadow-custom-out 
              hover:none hover:shadow-custom-inset hover:text-mid-blue hover:border-dark-blue cursor-pointer
              ${["project", "experience"].includes(section) ? " ml-5" : ""}`}
            >
              <span className="relative tracking-wider z-10 py-3">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Group */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
