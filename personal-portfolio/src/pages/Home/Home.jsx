import React from "react";
import Footer from "../../components/Footer";
import Circle from "../../components/Circle";
import { Link } from 'react-scroll';


const Home = () => {
  const handleClick = () => {
    // Some button logic
  }
  return (
    <div className="">
      <h1 className="">Fulya CIMENDERE</h1>
      <h2 className="">Full-stack Developer</h2>
      <p className="">I build accessible, pixel-perfect digital experiences for the web.</p>
      
      {/* Circle Shape */}
      <div className="circle-shape ">
        < Circle/>
      </div>

      {/* Button Group */}
      <div className="button-group ">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          About
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="resume"
          smooth={true}
          duration={500}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Resume
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Contact
        </Link>
    </div>

      {/* Footer Group */}
    <div>
      <Footer/>
    </div>
  </div>

  );
};

export default Home;
