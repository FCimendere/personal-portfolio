import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="w-24 uppercase overflow-hidden text-center text-maincard rounded-3xl border-2 border-border bg-badge">
      {text}
    </div>
  );
};

export default Badge;
