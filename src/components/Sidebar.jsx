import React from "react";
import { Link } from "react-scroll";

// Importing svg
import home from "../assets/svg/home.svg";
import user from "../assets/svg/user.svg";
import code from "../assets/svg/code.svg";
import message from "../assets/svg/message.svg";

export default function Sidebar({ isOpen }) {
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
      >
        <ul className="flex flex-col justify-evenly h-full">
          <li className="mb-10">
            <Link
              to="intro"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="block px-6 py-3 cursor-pointer"
            >
              <img src={home} alt="Home" />
            </Link>
          </li>
          <li className="mb-10">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="block px-6 py-3 cursor-pointer"
            >
              <img src={user} alt="About" />
            </Link>
          </li>
          <li className="mb-10">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="block px-6 py-3 cursor-pointer"
            >
              <img src={code} alt="Projects" />
            </Link>
          </li>
          <li className="mb-10">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="block px-6 py-3 cursor-pointer"
            >
              <img src={message} alt="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
