import "./App.css";
import Home from "./pages/Home/Home";
import RightSection from "./pages/RightSection/RightSection";
import { useState } from "react";

function App() {
  const [activeId, setActiveId] = useState("");

  const handleSectionChange = (sectionId) => {
    setActiveId(sectionId);
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-display md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* bg-light-grey flex px-6 py-12 lg:gap-4 */}
        <div className="left-section lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          {/* left-section flex-1 max-h-screen sticky top-0 overflow-y-auto */}
          <Home activeId={activeId} setActiveId={setActiveId} />
        </div>
        <div className="right-section pt-24 lg:w-[52%] lg:py-24">
          {/* flex-1 */}
          {/* <SplashCursor /> */}
          <RightSection onSectionChange={handleSectionChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
