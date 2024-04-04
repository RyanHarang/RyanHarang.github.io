import React from "react";
// Importing svg
import email from "../assets/svg/email.svg";
// import phone from "../assets/svg/phone.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";

export default function Contact() {
  return (
    <section id="contact" className="dark:bg-dark-850 bg-dark-200">
      <div className="flex justify-center">
        <h2 className="text-4xl">Contact me</h2>
      </div>
      <div className="xl:mx-64 lg:mx-48 md:mx-20 sm:mx-12 mx-1 mt-3 grid grid-cols-2 justify-items-center">
        <ul className="grid grid-cols-1 gap-2">
          <li>
            <a
              href="https://github.com/RyanHarang"
              target="_blank"
              className="flex items-center group"
            >
              <img
                src={github}
                alt="https://github.com/RyanHarang"
                title="View my Github profile"
                loading="lazy"
                className="lg:h-16 lg:w-16 h-10 w-10 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <p className="lg:text-xl text-md px-2 group-hover:underline">
                My Github
              </p>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ryan-harang-a4461320a/"
              target="_blank"
              className="flex items-center group"
            >
              <img
                src={linkedin}
                alt="https://www.linkedin.com/in/ryan-harang-a4461320a/"
                title="View my LinkedIn profile"
                loading="lazy"
                className="lg:h-16 lg:w-16 h-10 w-10 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <p className="lg:text-xl text-md px-2 group-hover:underline">
                My LinkedIn
              </p>
            </a>
          </li>
        </ul>
        <ul className="grid grid-cols-1 gap-2">
          <li>
            <a
              href="mailto:harangryan@gmail.com"
              target="_blank"
              className="flex items-center group"
            >
              <img
                src={email}
                alt="Email me"
                title="Email me"
                loading="lazy"
                className="lg:h-16 lg:w-16 h-10 w-10 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <p className="lg:text-xl text-sm px-2 group-hover:underline">
                harangryan@gmail.com
              </p>
            </a>
          </li>

          {/* <li>
            <a
              href="tel:42522982906"
              target="_blank"
              className="flex items-center group"
            >
              <img
                src={phone}
                alt="Message me"
                title="Message me"
                className="lg:h-16 lg:w-16 h-10 w-10 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <p className="lg:text-xl text-md px-2 group-hover:underline">
                425-229-8206
              </p>
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
}
