import React from "react";
// Importing Components
import Project from "./sub-components/Project";
// Importing Images
import RatingSite from "../assets/images/game-rating.png";
import WeatherApp from "../assets/images/weather-app.png";
import PenteApp from "../assets/images/pente.png";
import Deadwood from "../assets/images/deadwood.png";
import Interpreter from "../assets/images/parser.png";

export default function ProjectSection() {
  const projects = [
    {
      name: "Game Rating Site",
      link: "https://game-rating.onrender.com/",
      img: RatingSite,
      desc: "Created a full-stack web application including user differentiation for guests, users and admins, dynamic data display drawn from a MongoDB database, and posting of additional data to the backend via forms. This project utilized the MERN stack for developement and is hosted via Render.",
    },
    {
      name: "Weather Web-App",
      link: "https://weather-application-4245c.web.app/",
      img: WeatherApp,
      desc: "Initially, I leveraged the OpenWeatherMap API to access weather data around the world. Simultaneously, I accessed data from GeoNames, which supplied a list containing the names of cities worldwide. I parsed the file and implemented a filtering mechanism to construct the list that users can access for weather information. The application is now deployed via Firebase.",
    },
    {
      name: "Pente Web-App",
      link: "https://pente-31410.web.app/",
      img: PenteApp,
      desc: "I first implemented Pente in Java as a text-user-interface, and later recreated the game as a graphical-user-interface through React. The application is now deployed via Firebase.",
    },
    {
      name: "Deadwood",
      link: "https://github.com/RyanHarang/deadwood",
      img: Deadwood,
      desc: "In this project, my partner and I collaborated to implement a board game called Deadwood in Java. We employed crucial object-oriented design principles, including SOLID principles, as well as patterns like singleton, adapter, and observer. I also developed an XML parser to convert XML data to game objects.",
    },
    {
      name: "Interpreter",
      link: "https://github.com/RyanHarang/projects/tree/main/interpreter",
      img: Interpreter,
      desc: "Initially, I developed an evaluator capable of handling various operations, from basic addition, subtraction, multiplication, and division, to more complex ones like conditionals, mapping, and lambdas. Following the evaluator, I created a parser that could parse strings using a context-free grammar to format the equations. The parser provided the formatted equations to the evaluator which would then map the characters to functions.",
    },
  ];

  return (
    <>
      <div id="projects" className="flex justify-center">
        <h1 className="xl:text-6xl text-3xl">Projects</h1>
      </div>
      <div className="p-2 xl:h-196 lg:h-164 h-128 overflow-y-scroll overflow-x-hidden bg-gradient-radial border border-1 rounded-md dark:from-dark-700 dark:to-dark-900 from-dark-150 to-dark-100 flex flex-col xl:mx-64 lg:mx-32 md:mx-16 sm:mx-8 mx-4 items-center mt-10 md:mb-28">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            link={project.link}
            img={project.img}
            loading="lazy"
            description={project.desc}
          />
        ))}
      </div>
    </>
  );
}
