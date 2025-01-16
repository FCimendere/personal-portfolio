import { center } from "@cloudinary/url-gen/qualifiers/textAlignment";
import React from "react";
import { FiChevronsUp } from "react-icons/fi";

const GoToTop = ({ showGoTop, scrollUp }) => {
  return (
    <div className={showGoTop} onClick={scrollUp}>
      <div className="relative w-16 h-16 rounded-full border-4 border-light-grey shadow-custom-out overflow-hidden flex items-center justify-center">
        {/* Outer Circle */}
        <div className="absolute inset-2 rounded-full bg-light-grey z-[-1]">
          {/* Inner Circle with Custom Background */}
          <button className="absolute inset-0 bg-light-grey rounded-full shadow-custom-before flex items-center justify-center">
            <FiChevronsUp size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoToTop;
