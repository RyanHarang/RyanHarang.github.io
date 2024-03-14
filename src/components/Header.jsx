import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

// Importing svg
import dark from "../assets/svg/dark.svg";
import light from "../assets/svg/light.svg";
import hamburger from "../assets/svg/hamburger.svg";
import line from "../assets/svg/line.svg";

function Header() {
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
      className="bg-dark-150 dark:bg-dark-800 text-white py-4 sm:px-8 px-5 flex justify-between items-center fixed top-0 w-full z-50 h-16 opacity-80"
    >
      <h1 className="xl:text-3xl sm:text-xl text-lg font-semibold">
        Ryan Harang
      </h1>
      <div className="flex items-center">
        <button onClick={toggleMode} className="group mr-5 focus:outline-none">
          {darkMode ? (
            <div>
              <img
                src={dark}
                alt="Dark mode"
                className="h-9 w-9 transition-all duration-500 ease-in-out"
              />
            </div>
          ) : (
            <div>
              <img
                src={light}
                alt="Light mode"
                className="h-9 w-9 transition-all duration-500 ease-in-out"
              />
            </div>
          )}
          <span className="absolute bottom-0 transform sm:-translate-x-36 -translate-x-28 mb-4 opacity-0 group-hover:opacity-100 dark:bg-dark-700 bg-dark-200 sm:text-lg text-sm px-2 py-1 rounded-md">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-lg focus:outline-none"
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
          show={isOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div
              ref={(ref) => (divRef.current = ref)}
              className="absolute top-14 text-center xl:right-0 right-2 py-2 px-4 rounded bg-dark-100 dark:bg-dark-800"
            >
              <Link
                className="cursor-pointer xl:text-2xl block py-1 text-lg hover:text-dark-400 dark:hover:text-dark-400"
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={-500}
                duration={500}
              >
                Home
              </Link>
              <Link
                className="cursor-pointer xl:text-2xl block py-1 text-lg hover:text-dark-400 dark:hover:text-dark-400"
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                About
              </Link>
              <Link
                className="cursor-pointer xl:text-2xl block py-1 text-lg hover:text-dark-400 dark:hover:text-dark-400"
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className="cursor-pointer xl:text-2xl block py-1 text-lg hover:text-dark-400 dark:hover:text-dark-400"
                onClick={() => setIsOpen(!isOpen)}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                Contact
              </Link>
            </div>
          )}
        </Transition>
      </div>
    </header>
  );
}

export default Header;
