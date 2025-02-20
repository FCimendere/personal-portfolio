import React, { useEffect, useState } from "react";

const Circle = ({ id }) => {
  const [rotation, setRotation] = useState("rotate(0deg)");

  useEffect(() => {
    const getRotation = (id) => {
      switch (id) {
        case "link-about":
          return `rotate(145deg)`;
        case "link-project":
          return `rotate(170deg)`;
        case "link-experience":
          return `rotate(190deg)`;
        case "link-contact":
          return `rotate(215deg)`;
        default:
          return `rotate(0deg)`;
      }
    };

    setRotation(getRotation(id));
  }, [id]);

  return (
    <div className="">
      {/* Outer Circle */}
      <div className="outCircle ">
        {/* Inner Circle with Custom Background */}
        <div className="innerCircle">
          <div
            className="absolute w-[42%] h-1 bg-maintext rounded top-[50%] left-[8%] origin-right transition-transform duration-500 ease-in-out "
            style={{ transform: rotation }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
