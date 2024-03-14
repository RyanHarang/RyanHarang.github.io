import React from "react";
// Importing svg
import western from "../assets/svg/western.svg";
import download from "../assets/svg/download.svg";
// Importing pdf
import resume from "../assets/pdf/Ryan_Harang_resume.pdf";

export default function About() {
  return (
    <>
      <div id="about" className="dark:bg-dark-850 bg-dark-200">
        <div className="flex justify-center">
          <h1 className="xl:text-6xl text-3xl">About Me</h1>
        </div>
        <div className="flex justify-center">
          <div className="md:grid md:grid-cols-2 md:gap-8 sm:gap-2 md:mt-12">
            <div className="flex flex-col items-center xl:w-96 w-96">
              <img
                src={western}
                alt="Western Washington University"
                title="Western Washington University"
              />
            </div>
            <div className="flex flex-col items-center xl:w-128 md:w-96">
              <p className="xl:text-2xl text-xl">
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
                className="border-2 rounded w-full w-44 xl:text-xl md:text-base text-sm h-12 p-1 mt-4 mb-5 flex justify-center items-center overflow-hidden duration-1000 hover:bg-theme-hover"
              >
                Download Resume
                <img src={download} alt="Download Icon" className="h-8 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
