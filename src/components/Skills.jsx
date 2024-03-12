import React from "react";
// Importing components
import Card from "./sub-components/Card";
// Importing svg
import aws from "../assets/svg/skills/aws.svg";
import css from "../assets/svg/skills/css.svg";
import expr from "../assets/svg/skills/expr.svg";
import html from "../assets/svg/skills/html.svg";
import java from "../assets/svg/skills/java.svg";
import js from "../assets/svg/skills/js.svg";
import pyth from "../assets/svg/skills/pyth.svg";
import c from "../assets/svg/skills/c.svg";
import lnx from "../assets/svg/skills/lnx.svg";
import mgdb from "../assets/svg/skills/mgdb.svg";
import node from "../assets/svg/skills/node.svg";
import rct from "../assets/svg/skills/rct.svg";
import sql from "../assets/svg/skills/sql.svg";
import tlwd from "../assets/svg/skills/tlwd.svg";
import vite from "../assets/svg/skills/vite.svg";

export default function Skills() {
  const skills = [
    { name: "React", icon: rct, years: 2 },
    { name: "HTML", icon: html, years: 2.5 },
    { name: "CSS", icon: css, years: 2.5 },
    { name: "Java", icon: java, years: 4 },
    { name: "JavaScript", icon: js, years: 2 },
    { name: "Python", icon: pyth, years: 1.5 },
    { name: "C", icon: c, years: 2 },
    { name: "Linux", icon: lnx, years: 3 },
    { name: "MongoDB", icon: mgdb, years: 1 },
    { name: "Node.js", icon: node, years: 1 },
    { name: "Express", icon: expr, years: 1 },
    { name: "Tailwind CSS", icon: tlwd, years: 1 },
    { name: "Vite", icon: vite, years: 1.5 },
    { name: "SQL", icon: sql, years: 1 },
    { name: "AWS", icon: aws, years: 1 },
  ];

  const webDevelopmentSkills = skills.filter((skill) =>
    [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Tailwind CSS",
      "Vite",
    ].includes(skill.name)
  );
  const languageSkills = skills.filter((skill) =>
    ["Java", "Python", "C"].includes(skill.name)
  );
  const generalSkills = skills.filter(
    (skill) =>
      !webDevelopmentSkills.includes(skill) && !languageSkills.includes(skill)
  );

  return (
    <>
      <div id="skills" className="dark:bg-dark-850 bg-dark-200 h-full">
        <div className="flex justify-center">
          <h1 className="xl:text-6xl text-3xl">Skills</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full mx-9 md:grid md:grid-cols-3 md:gap-8 mt-12">
            <Card title="Web Development" skills={webDevelopmentSkills} />
            <Card title="Languages" skills={languageSkills} />
            <Card title="General" skills={generalSkills} />
          </div>
          {/* <div className="grid grid-cols-4 md:gap-16 gap-2 mt-12">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="xl:h-32 xl:w-32 lg:h-24 lg:w-24 md:h-20 md:w-20 h-16 w-16 mb-2"
                />
                <p className="xl:text-xl md:text-md text-sm">{skill.name}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
