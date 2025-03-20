import React, { useState, useEffect } from "react";
import Sun from "../../assets/svg/mode/Sun.jsx";
import Moon from "../../assets/svg/mode/Moon.jsx";
import Hamburger from "../../assets/svg/hamburger/Hamburger.jsx";
import X from "../../assets/svg/hamburger/X.jsx";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-light-bg/70 dark:bg-dark-bg/70 fixed z-50 flex w-full items-center justify-between border-b p-4 shadow-lg backdrop-blur-md sm:w-5/6 sm:px-8 sm:py-4">
      <div className="flex items-center gap-12">
        <div className="text-lg font-bold sm:text-xl">
          <a href="#" draggable="false">
            Ryan Harang
          </a>
        </div>
        <nav className="hidden gap-8 sm:flex">
          <a
            href="#projects"
            draggable="false"
            className="after:bg-accent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#experience"
            draggable="false"
            className="after:bg-accent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Experience
          </a>
          <a
            href="#skills"
            draggable="false"
            className="after:bg-accent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </a>
        </nav>
        {menuOpen && (
          <nav className="bg-light-bg/70 dark:bg-dark-bg/70 absolute top-full left-0 flex w-full flex-col items-center gap-4 py-2 shadow-md backdrop-blur-md sm:hidden">
            <a
              href="#projects"
              draggable="false"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              draggable="false"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#skills"
              draggable="false"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </nav>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="cursor-pointer rounded-lg border p-1"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex cursor-pointer items-center justify-center rounded-lg border p-1 sm:hidden"
        >
          {menuOpen ? <X /> : <Hamburger />}
        </button>
      </div>
    </header>
  );
};

export default Header;
