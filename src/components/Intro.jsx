import React from "react";
import { Link } from "react-scroll";
// Importing components
import DownButton from "./sub-components/DownButton.jsx";
// Importing svg
import email from "../assets/svg/email.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";

export default function Intro() {
  const handleContactClick = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <section id="intro" className="flex justify-center mb-48">
      <div className="xl:ml-16 grid grid-cols-2 md:gap-10 gap-2">
        <div className="flex flex-col items-center">
          <h1 className="xl:text-6xl md:text-5xl text-3xl mb-6">Ryan Harang</h1>
          <p className="xl:text-3xl md:text-2xl text-xl mb-6 text-center">
            Software Developer
          </p>
          <p className="xl:text-3xl md:text-xl text-lg mb-6 text-center">
            Web Development and Design Specialist
          </p>
          <DownButton />
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/RyanHarang"
            target="_blank"
            rel="noopener"
            className="slider-container border-2 rounded h-16 mb-8 flex items-center overflow-hidden duration-1000 hover:bg-theme-hover"
          >
            <img src={github} alt="Github" className="slider h-16" />
            <h2 className="xl:text-2xl ml-3">Github</h2>
            <p className="arrow sm:inline hidden w-full text-4xl text-end mr-3">
              &rarr;
            </p>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/ryan-harang-a4461320a/"
            target="_blank"
            rel="noopener"
            className="slider-container border-2 rounded h-16 mb-8 flex items-center overflow-hidden duration-1000 hover:bg-theme-hover"
          >
            <img src={linkedin} alt="LinkedIn" className="slider h-16" />
            <h2 className="xl:text-2xl ml-3">LinkedIn</h2>
            <p className="arrow sm:inline hidden w-full text-4xl text-end mr-3">
              &rarr;
            </p>
          </a>
          <br />
          <Link
            onClick={handleContactClick}
            className="slider-container border-2 rounded h-16 mb-5 flex items-center overflow-hidden duration-1000 hover:bg-theme-hover"
            role="button"
            tabIndex="0"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img src={email} alt="Contact me" className="slider h-16" />
            <h2 className="xl:text-2xl ml-3">Contact</h2>
            <p className="arrow sm:inline hidden w-full text-4xl text-end mr-3">
              &rarr;
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
