import agile from "../../assets/svg/skills/agile.svg";
import assembly from "../../assets/svg/skills/assembly.svg";
import aws from "../../assets/svg/skills/aws.svg";
import c from "../../assets/svg/skills/c.svg";
import csharp from "../../assets/svg/skills/csharp.svg";
import css from "../../assets/svg/skills/css.svg";
import cypress from "../../assets/svg/skills/cypress.svg";
import django from "../../assets/svg/skills/django.svg";
import express from "../../assets/svg/skills/express.svg";
import figma from "../../assets/svg/skills/figma.svg";
import git from "../../assets/svg/skills/git.svg";
import gradle from "../../assets/svg/skills/gradle.svg";
import hibernate from "../../assets/svg/skills/hibernate.svg";
import html from "../../assets/svg/skills/html.svg";
import java from "../../assets/svg/skills/java.svg";
import javascript from "../../assets/svg/skills/javascript.svg";
import jest from "../../assets/svg/skills/jest.svg";
import junit from "../../assets/svg/skills/junit.svg";
import latex from "../../assets/svg/skills/latex.svg";
import linux from "../../assets/svg/skills/linux.svg";
import mongodb from "../../assets/svg/skills/mongodb.svg";
import node from "../../assets/svg/skills/node.svg";
import npm from "../../assets/svg/skills/npm.svg";
import postman from "../../assets/svg/skills/postman.svg";
import python from "../../assets/svg/skills/python.svg";
import react from "../../assets/svg/skills/react.svg";
import redux from "../../assets/svg/skills/redux.svg";
import scss from "../../assets/svg/skills/scss.svg";
import springboot from "../../assets/svg/skills/springboot.svg";
import sql from "../../assets/svg/skills/sql.svg";
import tailwind from "../../assets/svg/skills/tailwind.svg";
import unity from "../../assets/svg/skills/unity.svg";
import vite from "../../assets/svg/skills/vite.svg";
import vscode from "../../assets/svg/skills/vscode.svg";
import vue from "../../assets/svg/skills/vue.svg";

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
