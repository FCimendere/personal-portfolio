import React from "react";
import EmailButton from "../../components/EmailButton";
// import { Email } from "@mui/icons-material";
import profil from "../../../public/profil.png";

const Contact = () => {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-mid-blue"
      id="contact"
      aria-label="contact"
    >
      {/* Section Header */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 bg-light-grey w-screen px-6 py-5 backdrop-blur
      md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 "
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-dark-blue lg:sr-only">
          Contact
        </h2>
      </div>

      {/* Card Container */}
      <div className="container mx-auto px-2 py-2 max-w-3xl bg-white p-6 rounded-3xl  shadow-lg border border-light-grey">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 bg-white p-6 rounded-3xl  shadow-lg border border-light-grey">
          {/* Thumbnail on the Left */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-light-grey shadow-custom-out">
            <img
              src={profil}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content on the Right */}
          <div className="flex-1">
            <h3 className="relative tracking-wider z-10 py-3  uppercase hover:text-dark-blue  hover:underline">
              Let's Connect
            </h3>
            <p className="text-light-blue mt-2">
              Hey There, I'm your friendly full-stack developer 🧙🏼‍♀️, currently
              coding in the Netherlands. Whether it's creating elegant UI magic
              or some math, I'm always up for something new.
            </p>

            <p> Need a dev who can mix tech with a little artistic flair?</p>
            <div className="mt-4">
              <EmailButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
