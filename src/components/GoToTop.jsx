import React from "react";
import { FiChevronsUp } from "react-icons/fi";

const GoToTop = ({ showGoTop, scrollUp }) => {
  return (
    <div className={showGoTop} onClick={scrollUp}>
      <div className="w-6 h-6">
        {/* Outer Circle */}
        <div className="innerCircle">
          {/* Inner Circle with Custom Background */}
          <button className="absolute inset-0 rounded-full shadow-out flex items-center justify-center">
            <FiChevronsUp className="text-maintext hover:scale-110" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoToTop;
