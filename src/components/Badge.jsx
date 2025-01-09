import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="w-24 uppercase overflow-hidden text-center text-light-grey rounded-3xl border-2 bg-light-blue">
      {text}
    </div>
  );
};

export default Badge;
