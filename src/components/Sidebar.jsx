import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

// Importing svg
import home from "../assets/svg/home.svg";
import user from "../assets/svg/user.svg";
import code from "../assets/svg/code.svg";
import message from "../assets/svg/message.svg";

export default function Sidebar({ isOpen }) {
  const [activeLink, setActiveLink] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY;

      // Define sections and offsets
      const sections = [
        { id: "intro", offset: -200 },
        { id: "about", offset: -140 },
        { id: "projects", offset: -140 },
        { id: "contact", offset: -700 },
      ];

      // Find section currently in view
      let inViewSection = null;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (
          scrollPosition >=
          document.getElementById(section.id).offsetTop + section.offset
        ) {
          inViewSection = section.id;
        } else {
          break;
        }
      }

      // Update active link
      setActiveLink(inViewSection);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-full sm:block hidden fixed top-16 right-0 z-40 ${
        isOpen && "bg-dark-150 dark:bg-dark-800"
      } ease-in-out transition-all duration-500`}
    >
      <nav
        className={`h-full text-dark-800 dark:text-dark-100 ${
          isOpen ? "w-20" : "w-0"
        }`}
        aria-label="Navigation sidebar"
      >
        <ul className="flex flex-col justify-evenly h-full">
          <li className="mb-10">
            <Link
              to="intro"
              role="button"
              smooth={true}
              offset={-200}
              duration={300}
              className={`block px-6 py-3 cursor-pointer ${
                activeLink === "intro" &&
                "border-theme-hover border-2 rounded-full"
              }`}
            >
              <img src={home} alt="Home" title="Home" />
            </Link>
          </li>
          <li className="mb-10">
            <Link
              to="about"
              role="button"
              smooth={true}
              offset={-90}
              duration={300}
              className={`block px-6 py-3 cursor-pointer ${
                activeLink === "about" &&
                "border-theme-hover border-2 rounded-full"
              }`}
            >
              <img src={user} alt="About" title="About" />
            </Link>
          </li>
          <li className="mb-10">
            <Link
              to="projects"
              role="button"
              smooth={true}
              offset={-90}
              duration={300}
              className={`block px-6 py-3 cursor-pointer ${
                activeLink === "projects" &&
                "border-theme-hover border-2 rounded-full"
              }`}
            >
              <img src={code} alt="Projects" title="Projects" />
            </Link>
          </li>
          <li className="mb-10">
            <Link
              to="contact"
              role="button"
              smooth={true}
              offset={-300}
              duration={300}
              className={`block px-6 py-3 cursor-pointer ${
                activeLink === "contact" &&
                "border-theme-hover border-2 rounded-full"
              }`}
            >
              <img src={message} alt="Contact" title="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
