import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  About  from "./pages/About/About";
// import  Contacts  from "./pages/Contacts/Contact";
import Home from "./pages/Home/Home";
import RightSection from "./pages/RightSection/RightSection";
import SplashCursor from "./components/SplashCursor";
// import  NoPage  from "./pages/NoPage/NoPage";
// import  Projects  from "./pages/Projects/Project";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-display md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* bg-light-grey flex px-6 py-12 lg:gap-4 */}
        <div className="left-section lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          {/* left-section flex-1 max-h-screen sticky top-0 overflow-y-auto */}
          <Home />
        </div>
        <div className="right-section pt-24 lg:w-[52%] lg:py-24">
          {/* flex-1 */}
          {/* <SplashCursor /> */}
          <RightSection />
        </div>
      </div>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="contacts" element={<Contacts />} />
    //       <Route path="projects" element={<Projects />} />
    //       <Route path="resume" element={<Resume />} />
    //       <Route path="*" element={<NoPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
