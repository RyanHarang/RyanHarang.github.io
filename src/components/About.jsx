import React from "react";
// Importing svg
import western from "../assets/svg/western.svg";
import download from "../assets/svg/download.svg";
// Importing pdf
import resume from "../assets/pdf/Ryan_Harang_resume.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="dark:bg-dark-850 bg-dark-200 lg:px-32 md:px-16 sm:px-8 px-4"
    >
      <div className="flex justify-center">
        <h2 className="xl:text-6xl md:text-5xl text-3xl">About Me</h2>
      </div>
      <div className="flex justify-center">
        <div className="md:grid md:grid-cols-2 md:gap-8 md:mt-12">
          <div className="flex flex-col items-center">
            <img
              src={western}
              alt="Western Washington University"
              title="Western Washington University"
              className="max-h-80"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="xl:leading-relaxed xl:text-2xl text-xl leading-relaxed">
              My developer journey began at{" "}
              <abbr title="Western Washington University">WWU</abbr> where I
              have been steadily expanding my horizons and skillset through
              classwork, club and research involvement as well as personal
              projects. Recently I have become increasingly interested and
              passionate about web developement and have been completing
              projects to progressively teach myself full-stack development,
              starting with frontend and later enhancing my work with backend
              skills.
            </p>
            <a
              href={resume}
              download="Ryan_Harang_resume.pdf"
              className="border-2 rounded w-full max-w-96 xl:text-xl md:text-base text-sm h-12 my-5 flex justify-center items-center duration-1000 hover:bg-theme-hover"
            >
              Download Resume
              <img src={download} alt="Download Icon" className="h-8 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
