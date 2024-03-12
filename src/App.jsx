// Importing Components
import UpWave from "./components/sub-components/UpWave";
import DownWave from "./components/sub-components/DownWave";
import UpButton from "./components/sub-components/UpButton";

import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
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
  );
}

export default App;
