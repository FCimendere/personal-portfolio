import React, { useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import Circle from "../../components/Circle";
import { Link } from "react-scroll";

const Home = () => {
  const ref = useRef("");

  const handleClick = (id) => {
    ref.current = id;
    console.log(ref.current);
  };

  return (
    <div className="">
      <div className="text-dark-blue font-display">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <a href="/">Fulya Çimendere</a>
        </h1>
        <h2 className="text-mid-blue mt-3 text-lg font-medium tracking-tight sm:text-lg">
          Full Stack Developer
        </h2>
        <p className="text-light-blue mt-4 max-w-xs leading-normal">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>
      <div className="flex">
        {/* Circle Shape */}
        <div className="justify-center align-center circle-shape py-24">
          <Circle ref={ref} />
        </div>

        {/* Button Group */}
        <div className="button-group flex flex-col justify-center gap-8">
          <Link
            id="link-about"
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleClick("link-about")}
            className="relative block no-underline uppercase overflow-hidden w-30 text-center text-mid-blue rounded-3xl border-2 border-light-grey shadow-custom-out 
            hover:none hover:bg-mid-blue hover:text-light-grey hover:border-dark-blue cursor-pointer"
          >
            <span className="relative tracking-wider z-10 py-10">About</span>
          </Link>
          <Link
            id="link-project"
            to="project"
            smooth={true}
            duration={500}
            onClick={() => handleClick("link-project")}
            className="ml-10 relative block no-underline uppercase overflow-hidden w-40 text-center text-mid-blue rounded-3xl border-2 border-light-grey shadow-custom-out 
            hover:none hover:bg-mid-blue hover:text-light-grey hover:border-dark-blue cursor-pointer"
          >
            <span className="relative tracking-wider z-10 py-10">Projects</span>
          </Link>
          <Link
            id="link-resume"
            to="resume"
            smooth={true}
            duration={500}
            onClick={() => handleClick("link-resume")}
            className="ml-10 relative block no-underline uppercase overflow-hidden w-40 text-center text-mid-blue rounded-3xl border-2 border-light-grey shadow-custom-out 
            hover:none hover:bg-mid-blue hover:text-light-grey hover:border-dark-blue cursor-pointer"
          >
            <span className="relative tracking-wider z-10 py-10">Resume</span>
          </Link>
          <Link
            id="link-contact"
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleClick("link-contact")}
            className="relative block no-underline uppercase overflow-hidden w-30 text-center text-mid-blue rounded-3xl border-2 border-light-grey shadow-custom-out 
            hover:none hover:bg-mid-blue hover:text-light-grey hover:border-dark-blue cursor-pointer"
          >
            <span className="relative tracking-wider z-10 py-10 px-5">
              Contact
            </span>
          </Link>
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
