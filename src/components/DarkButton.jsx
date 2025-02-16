import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const DarkButton = ({ switchMode, isDark }) => {
  return (
    <button
      onClick={switchMode}
      className="fixed right-6 top-6 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 border-border hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <IoSunny className="h-5 w-5 text-yellow-200" />
      ) : (
        <IoMoon className="h-5 w-5 text-midtext dark:text-accent" />
      )}
    </button>
  );
};

export default DarkButton;
