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
    <header className="bg-light-bg/70 dark:bg-dark-bg/70 fixed z-50 flex w-5/6 items-center justify-between border-b px-8 py-4 shadow-lg backdrop-blur-md">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold">
          <a href="#">Ryan Harang</a>
        </div>
        <nav className="flex gap-4">
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
