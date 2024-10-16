import React from "react";
// Importing components
import Card from "./sub-components/Card";
// Importing svg
import aws from "../assets/svg/skills/aws.svg";
import css from "../assets/svg/skills/css.svg";
import expr from "../assets/svg/skills/expr.svg";
import git from "../assets/svg/skills/git.svg";
import html from "../assets/svg/skills/html.svg";
import java from "../assets/svg/skills/java.svg";
import spring from "../assets/svg/skills/spring.svg";
import js from "../assets/svg/skills/js.svg";
import pyth from "../assets/svg/skills/pyth.svg";
import c from "../assets/svg/skills/c.svg";
import cSharp from "../assets/svg/skills/cSharp.svg";
import lnx from "../assets/svg/skills/lnx.svg";
import mgdb from "../assets/svg/skills/mgdb.svg";
import node from "../assets/svg/skills/node.svg";
import rct from "../assets/svg/skills/rct.svg";
import sql from "../assets/svg/skills/sql.svg";
import djan from "../assets/svg/skills/djan.svg";
import tlwd from "../assets/svg/skills/tlwd.svg";
import vite from "../assets/svg/skills/vite.svg";
import vue from "../assets/svg/skills/vue.svg";

export default function Skills() {
  const skills = [
    { name: "React", icon: rct, years: 2 },
    { name: "Vue", icon: vue, years: 1 },
    { name: "HTML", icon: html, years: 3 },
    { name: "CSS", icon: css, years: 3 },
    { name: "Java", icon: java, years: 4 },
    { name: "Java Spring Boot", icon: spring, years: 1 },
    { name: "JavaScript", icon: js, years: 2 },
    { name: "Python", icon: pyth, years: 2 },
    { name: "C", icon: c, years: 3 },
    { name: "C#", icon: cSharp, years: 1 },
    { name: "Linux", icon: lnx, years: 3 },
    { name: "MongoDB", icon: mgdb, years: 1 },
    { name: "Node.js", icon: node, years: 1 },
    { name: "Express", icon: expr, years: 1 },
    { name: "Django", icon: djan, years: 1 },
    { name: "Tailwind", icon: tlwd, years: 1 },
    { name: "Vite", icon: vite, years: 1.5 },
    { name: "SQL", icon: sql, years: 1 },
    { name: "AWS", icon: aws, years: 1 },
    { name: "Git", icon: git, years: 4 },
  ];

  const frontendSkills = skills.filter((skill) =>
    ["React", "Vue", "HTML", "CSS", "Tailwind", "Vite"].includes(skill.name)
  );

  const backendSkills = skills.filter((skill) =>
    ["Node.js", "Express", "Django", "Java Spring Boot"].includes(skill.name)
  );

  const databaseSkills = skills.filter((skill) =>
    ["MongoDB", "SQL"].includes(skill.name)
  );

  const languageSkills = skills.filter((skill) =>
    ["Java", "JavaScript", "Python", "C", "C#"].includes(skill.name)
  );

  const generalSkills = skills.filter((skill) =>
    ["Linux", "AWS", "Git"].includes(skill.name)
  );

  return (
    <section id="skills" className="dark:bg-dark-850 bg-dark-200">
      <div className="flex justify-center">
        <h2 className="xl:text-6xl md:text-5xl text-3xl">Skills</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-full mx-9 md:grid md:grid-cols-3 md:gap-8 mt-12">
          <Card title="Frontend" skills={frontendSkills} />
          <Card title="Backend" skills={backendSkills} />
          <Card title="Languages" skills={languageSkills} />
          <Card title="Database" skills={databaseSkills} />
          <Card title="General" skills={generalSkills} />
        </div>
      </div>
    </section>
  );
}
