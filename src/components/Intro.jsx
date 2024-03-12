import React, { useState } from "react";
import { Link } from "react-scroll";
// Importing components
import DownButton from "./sub-components/DownButton.jsx";
// Importing svg
import email from "../assets/svg/email.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";

export default function Intro() {
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  const handleGithubHover = () => {
    setGithubHovered(!githubHovered);
  };

  const handleLinkedinHover = () => {
    setLinkedinHovered(!linkedinHovered);
  };

  const handleContactHover = () => {
    setContactHovered(!contactHovered);
  };

  const handleContactClick = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <div id="intro" className="flex justify-center mb-48">
      <div className="grid grid-cols-2 md:gap-10 gap-2">
        <div className="flex flex-col items-center">
          <h1 className="xl:text-6xl md:text-5xl text-3xl mb-6">Ryan Harang</h1>
          <p className="xl:text-3xl md:text-2xl text-xl mb-6 text-center">
            Software Developer
          </p>
          <p className="xl:text-3xl md:text-xl text-lg mb-6 text-center">
            Web Development and Design Enthusiast
          </p>
          <DownButton />
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/RyanHarang"
            target="_blank"
            className="border-2 rounded sm:w-64 w-44 h-16 mb-8 flex items-center overflow-hidden duration-1000 hover:bg-theme-hover"
            onMouseEnter={handleGithubHover}
            onMouseLeave={handleGithubHover}
          >
            <img
              src={github}
              alt="Github"
              className="h-16 transition-transform duration-700"
              style={{
                transform: githubHovered
                  ? "translateX(12.1rem)"
                  : "translateX(0)",
              }}
            />
            <h2 className="xl:text-2xl ml-3">Github</h2>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/ryan-harang-a4461320a/"
            target="_blank"
            className="border-2 rounded sm:w-64 w-44 h-16 mb-8 flex items-center overflow-hidden duration-1000 hover:bg-theme-hover"
            onMouseEnter={handleLinkedinHover}
            onMouseLeave={handleLinkedinHover}
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-16 transition-transform duration-700"
              style={{
                transform: linkedinHovered
                  ? "translateX(12.1rem)"
                  : "translateX(0)",
              }}
            />
            <h2 className="xl:text-2xl ml-3">LinkedIn</h2>
          </a>
          <br />
          <Link
            onClick={handleContactClick}
            className="border-2 rounded sm:w-64 w-44 h-16 mb-5 flex items-center overflow-hidden duration-1000 hover:bg-theme-hover"
            onMouseEnter={handleContactHover}
            onMouseLeave={handleContactHover}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img
              src={email}
              alt="Contact me"
              className="h-16 transition-transform duration-700"
              style={{
                transform: contactHovered
                  ? "translateX(12.1rem)"
                  : "translateX(0)",
              }}
            />
            <h2 className="xl:text-2xl ml-3">Contact</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
