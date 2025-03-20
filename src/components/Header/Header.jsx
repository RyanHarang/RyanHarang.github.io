import React, { useState, useEffect } from "react";
import Sun from "../../assets/svg/mode/Sun.jsx";
import Moon from "../../assets/svg/mode/Moon.jsx";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <header className="bg-light-bg/70 dark:bg-dark-bg/70 fixed z-50 flex w-full items-center justify-between border-b p-4 shadow-lg backdrop-blur-md sm:w-5/6 sm:px-8 sm:py-4">
      <div className="flex items-center gap-4 sm:gap-12">
        <div className="text-lg font-bold sm:text-xl">
          <a href="#">Ryan Harang</a>
        </div>
        <nav className="flex gap-2 text-sm sm:gap-8 sm:text-base">
          <a
            href="#projects"
            className="after:bg-accent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="after:bg-accent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="after:bg-accent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </a>
        </nav>
      </div>
      <button
        onClick={toggleMode}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="cursor-pointer rounded-lg border p-1"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};

export default Header;
