import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <button
        onClick={() => navigate("/")}
        className="fixed left-6 top-6 z-50 p-2 rounded-full shadow-out bg-maincard hover:bg-midtext transition-colors"
        aria-label="Go Back"
      >
        <FiArrowLeft className="text-maintext hover:text-accent" size={30} />
      </button>
      <div className="text-3xl font-bold mt-20">Projects Page (placeholder)</div>
    </div>
  );
};

export default ProjectsPage; 