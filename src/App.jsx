import React, { useState } from "react";

// Importing Components
import UpWave from "./components/sub-components/UpWave";
import DownWave from "./components/sub-components/DownWave";
import UpButton from "./components/sub-components/UpButton";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="overflow-hidden bg-dark-100 dark:bg-dark-900 duration-500 text-dark-800 dark:text-dark-100">
        <Header />
        <hr className="md:py-32 py-20" />
        <Intro />
        <UpWave />
        <About />
        <DownWave />
        <ProjectSection />
        <UpWave />
        <Skills />
        <DownWave />
        <Experience />
        <UpWave />
        <Contact />
        <DownWave />
        <UpButton />
        <Footer />
      </div>
    </>
  );
}
