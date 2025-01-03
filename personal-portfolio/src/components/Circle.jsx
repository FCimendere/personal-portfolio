import React, { useEffect, useState } from "react";

const Circle = ({ id }) => {
  const [rotation, setRotation] = useState("rotate(0deg)");

  useEffect(() => {
    const getRotation = (id) => {
      switch (id) {
        case "link-about":
          return `rotate(140deg)`;
        case "link-project":
          return `rotate(170deg)`;
        case "link-resume":
          return `rotate(-170deg)`;
        case "link-contact":
          return `rotate(-140deg)`;
        default:
          return `rotate(0deg)`;
      }
    };

    setRotation(getRotation(id));
  }, [id]);

  return (
    <div className="relative w-60 h-60 rounded-full border-4 border-light-grey shadow-custom-out overflow-hidden">
      {/* Outer Circle */}
      <div className="absolute inset-0 rounded-full bg-light-grey z-[-1]">
        {/* Inner Circle with Custom Background */}
        <div className="absolute inset-4 bg-light-grey rounded-full shadow-custom-before">
          <div
            className="absolute w-[46%] h-1 bg-mid-blue rounded top-[50%] left-[5%] origin-right transition-transform duration-50"
            style={{ transform: rotation }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
