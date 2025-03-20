import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Projects from "./components/Projects/ProjectList.jsx";
import Experience from "./components/Experience/ExperienceList.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="w-full sm:mx-auto sm:w-5/6">
      <Header />
      <main className="pt-16">
        <Intro />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
