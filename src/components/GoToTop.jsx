import React from "react";
import { FiChevronsUp } from "react-icons/fi";

const GoToTop = ({ showGoTop, scrollUp }) => {
  return (
    <div className={showGoTop} onClick={scrollUp}>
      <div className="relative right-6 w-16 h-16 rounded-full border-4 border-background shadow-custom-out overflow-hidden flex items-center justify-center">
        {/* Outer Circle */}
        <div className="absolute inset-2 rounded-full bg-background z-[-1]">
          {/* Inner Circle with Custom Background */}
          <button className="absolute inset-0 rounded-full shadow-custom-before flex items-center justify-center">
            <FiChevronsUp className="text-maintext" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoToTop;
