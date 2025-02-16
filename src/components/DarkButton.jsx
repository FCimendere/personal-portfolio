import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const DarkButton = ({ switchMode, isDark }) => {
  return (
    <div className="w-12 h-12 fixed right-6 top-6" onClick={switchMode}>
      {/* Outer Circle */}
      <div className="innerCircle">
        {/* Inner Circle with Custom Background */}
        <button
          className="absolute inset-0 flex items-center justify-center rounded-full shadow-out transition-all duration-300 
          bg-yellow-100 hover:bg-yellow-200 dark:bg-midtext"
        >
          {!isDark ? (
            <IoSunny className="text-orange-300 hover:scale-110" size={30} />
          ) : (
            <IoMoon
              className="text-midtext dark:text-accent hover:scale-110"
              size={30}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default DarkButton;
