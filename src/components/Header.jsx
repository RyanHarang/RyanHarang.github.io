import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

// Importing svg
import dark from "../assets/svg/dark.svg";
import light from "../assets/svg/light.svg";
import open from "../assets/svg/open.svg";
import hamburger from "../assets/svg/hamburger.svg";
import line from "../assets/svg/line.svg";

export default function Header({ toggleSidebar, isSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const divRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <header
      id="header"
      className="bg-dark-150 dark:bg-dark-800 py-4 sm:px-6 px-5 flex justify-between items-center fixed top-0 w-full z-50 h-16"
    >
      <h1 className="xl:text-3xl text-xl font-semibold">Ryan Harang</h1>
      <div className="flex items-center">
        <button
          onClick={toggleMode}
          className="group mr-5 "
          aria-label="Toggle mode"
        >
          {darkMode ? (
            <div>
              <img
                src={dark}
                alt="Dark mode"
                aria-labelledby="mode-tip"
                className="h-9 w-9 transition-all duration-500 ease-in-out"
              />
            </div>
          ) : (
            <div>
              <img
                src={light}
                alt="Light mode"
                aria-labelledby="mode-tip"
                className="h-9 w-9 transition-all duration-500 ease-in-out"
              />
            </div>
          )}
          <span
            id="mode-tip"
            className="absolute w-28 bottom-0 transform -translate-x-36 mb-4 opacity-0 group-hover:opacity-100 dark:bg-dark-700 bg-dark-200 text-lg px-1 py-1 rounded-md"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
        <button
          onClick={() => toggleSidebar()}
          className={`transition-all duration-400 sm:block hidden ${
            !isSidebarOpen && "rotate-180"
          }`}
        >
          <img src={open} alt="Toggle sidebar" className="w-10 h-8" />
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-1 text-lg"
        >
          {isOpen ? (
            <img
              src={line}
              alt="Close menu"
              title="Close menu"
              className="h-12 w-12"
            />
          ) : (
            <img
              src={hamburger}
              alt="Open menu"
              title="Open menu"
              className="h-12 w-12"
            />
          )}
        </button>

        <Transition
          className="sm:hidden"
          show={isOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <nav
              aria-label="Navigation Menu"
              ref={(ref) => (divRef.current = ref)}
              className="opacity-80 absolute top-14 text-center lg:w-32 w-full right-0 py-2 px-4 rounded bg-dark-150 dark:bg-dark-800"
            >
              <Link
                className="cursor-pointer text-2xl block py-1 hover:text-dark-400 dark:hover:text-dark-400"
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                role="button"
                tabIndex="0"
                to="intro"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                Home
              </Link>
              <Link
                className="cursor-pointer text-2xl block py-1 hover:text-dark-400 dark:hover:text-dark-400"
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                role="button"
                tabIndex="0"
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                About
              </Link>
              <Link
                className="cursor-pointer text-2xl block py-1 hover:text-dark-400 dark:hover:text-dark-400"
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                role="button"
                tabIndex="0"
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className="cursor-pointer text-2xl block py-1 hover:text-dark-400 dark:hover:text-dark-400"
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                role="button"
                tabIndex="0"
                to="contact"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                Contact
              </Link>
            </nav>
          )}
        </Transition>
      </div>
    </header>
  );
}
