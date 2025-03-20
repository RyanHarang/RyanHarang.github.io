import agile from "/svg/skills/agile.svg";
import assembly from "/svg/skills/assembly.svg";
import aws from "/svg/skills/aws.svg";
import c from "/svg/skills/c.svg";
import csharp from "/svg/skills/csharp.svg";
import css from "/svg/skills/css.svg";
import cypress from "/svg/skills/cypress.svg";
import django from "/svg/skills/django.svg";
import express from "/svg/skills/express.svg";
import figma from "/svg/skills/figma.svg";
import git from "/svg/skills/git.svg";
import gradle from "/svg/skills/gradle.svg";
import hibernate from "/svg/skills/hibernate.svg";
import html from "/svg/skills/html.svg";
import java from "/svg/skills/java.svg";
import javascript from "/svg/skills/javascript.svg";
import jest from "/svg/skills/jest.svg";
import junit from "/svg/skills/junit.svg";
import latex from "/svg/skills/latex.svg";
import linux from "/svg/skills/linux.svg";
import mongodb from "/svg/skills/mongodb.svg";
import node from "/svg/skills/node.svg";
import npm from "/svg/skills/npm.svg";
import postman from "/svg/skills/postman.svg";
import python from "/svg/skills/python.svg";
import react from "/svg/skills/react.svg";
import redux from "/svg/skills/redux.svg";
import scss from "/svg/skills/scss.svg";
import springboot from "/svg/skills/springboot.svg";
import sql from "/svg/skills/sql.svg";
import tailwind from "/svg/skills/tailwind.svg";
import unity from "/svg/skills/unity.svg";
import vite from "/svg/skills/vite.svg";
import vscode from "/svg/skills/vscode.svg";
import vue from "/svg/skills/vue.svg";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: react },
      { name: "Vue", icon: vue },
      { name: "Redux", icon: redux },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "JavaScript", icon: javascript },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "SCSS", icon: scss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: java },
      { name: "Spring Boot", icon: springboot },
      { name: "Hibernate", icon: hibernate },
      { name: "Python", icon: python },
      { name: "Django", icon: django },
      { name: "Node.js", icon: node },
      { name: "Express.js", icon: express },
      { name: "SQL", icon: sql },
      { name: "MongoDB", icon: mongodb },
      { name: "C", icon: c },
      { name: "C#", icon: csharp },
      { name: "Assembly", icon: assembly },
    ],
  },
  {
    category: "Testing / DevOps",
    items: [
      { name: "JUnit", icon: junit },
      { name: "Jest", icon: jest },
      { name: "Cypress", icon: cypress },
      { name: "Gradle", icon: gradle },
      { name: "AWS", icon: aws },
      { name: "Agile / Scrum", icon: agile },
    ],
  },
  {
    category: "Tools / Technologies",
    items: [
      { name: "Git", icon: git },
      { name: "Figma", icon: figma },
      { name: "VS Code", icon: vscode },
      { name: "Vite", icon: vite },
      { name: "Postman", icon: postman },
      { name: "Unity", icon: unity },
      { name: "Linux / Unix", icon: linux },
      { name: "npm", icon: npm },
      { name: "LaTeX", icon: latex },
    ],
  },
];

export default skills;
