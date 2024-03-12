import React from "react";
// Importing svg
import email from "../assets/svg/email.svg";
// import phone from "../assets/svg/phone.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";

export default function Contact() {
  return (
    <>
      <div id="contact" className="dark:bg-dark-850 bg-dark-200">
        <div className="flex justify-center">
          <h1 className="text-4xl">Contact me</h1>
        </div>
        <div className="xl:mx-64 lg:mx-48 md:mx-20 sm:mx-12 mx-1 mt-3 grid grid-cols-2 justify-items-center">
          <ul className="grid grid-cols-1 gap-2">
            <a
              href="https://github.com/RyanHarang"
              target="_blank"
              className="flex items-center group"
            >
              <img
                src={github}
                alt="https://github.com/RyanHarang"
                className="lg:h-16 lg:w-16 h-10 w-10 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <p className="lg:text-xl text-md px-2 group-hover:underline">
                My Github
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/ryan-harang-a4461320a/"
              target="_blank"
              className="flex items-center group"
            >
              <img
                src={linkedin}
                alt="https://www.linkedin.com/in/ryan-harang-a4461320a/"
                className="lg:h-16 lg:w-16 h-10 w-10 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <p className="lg:text-xl text-md px-2 group-hover:underline">
                My LinkedIn
              </p>
            </a>
          </ul>
          <ul className="grid grid-cols-1 gap-2">
            <a
              href="mailto:harangryan@gmail.com"
              target="_blank"
              className="flex items-center group"
            >
              <img
                src={email}
                alt="Email me"
                className="lg:h-16 lg:w-16 h-10 w-10 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <p className="lg:text-xl text-sm px-2 group-hover:underline">
                harangryan@gmail.com
              </p>
            </a>

            {/*  <a href="tel:42522982906" target="_blank" className="flex items-center group">
              <img
                src={phone}
                alt="Call me"
                className="lg:h-16 lg:w-16 h-10 w-10 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <p className="lg:text-xl text-md px-2 group-hover:underline">425-229-8206</p>
            </a> */}
          </ul>
        </div>
      </div>
    </>
  );
}
