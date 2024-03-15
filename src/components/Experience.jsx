import React from "react";
// Importing components
import Job from "./sub-components/Job";

export default function Experience() {
  return (
    <section className="flex flex-col items-center mb-28 mx-2">
      <h2 className="flex justify-center xl:text-6xl text-4xl">Experience</h2>
      <div id="experience" className="xl:w-9/12 w-11/12 flex flex-col">
        <Job
          title="CS Teaching Assistant"
          company="Western Washington University"
          desc="Starting in Fall 2023 I have been guiding students to a more
            comprehensive knowledge of course content as well as grading
            assignments for a lower level Computer Science class."
        />
        <Job
          title="CS Research Assistant"
          company="Western Washington University"
          desc="Since Spring 2023 I have spearheaded the transfer of site content to
            React and improved user experience for the Index In-Bounds Lab. I am
            now working on curating the back-end with a database system to
            publish lab work."
        />
        <Job
          title="Project Intern"
          company="The Ladder"
          desc="While residing in Redruth, I played a key role in leading a
            collaborative effort with a non-profit, The Ladder. Together, we
            developed an interactive audio system that runs through Alexa."
        />
        <Job
          title="Personal Care Assistant"
          company="Consumer Direct Care WA"
          desc="While working as a PCA I facilitated and supported daily activities
            for a client with cerebral palsy, including cooking, cleaning, and
            exercise."
        />
        <Job
          title="Squad Member"
          company="MOD Pizza"
          desc="For the summers of 2021 and 2022 I provided direct customer support
            for up to 40 hours per week, ensuring high standards and quality
            service."
        />
      </div>
    </section>
  );
}
