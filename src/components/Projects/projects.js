import data1 from "../../assets/images/projects/data1.webp";
import classSync from "../../assets/images/projects/classSync.webp";
import gameRating from "../../assets/images/projects/gameRating.webp";
import weather from "../../assets/images/projects/weatherApp.webp";
import pente from "../../assets/images/projects/pente.webp";

const projects = [
  {
    image: data1,
    name: "Data 1: Formula 1 Data Aggregator",
    link: "http://3.133.155.165:3000",
    description:
      "Data 1 is a group project created to allow users to explore and compare historic data from Formula 1 races and drivers.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Tailwind",
      "Figma",
    ],
  },
  {
    image: classSync,
    name: "ClassSync",
    link: "https://github.com/RyanHarang/ClassSync",
    description:
      "Created a browser extension that interacted with the Canvas API to allow users to quickly view their schedule at any time and add it to external calendars.",
    skills: ["HTML", "CSS", "JavaScript", "APIs"],
  },
  {
    image: gameRating,
    name: "Game Rating Site",
    link: "https://game-rating.onrender.com/",
    description:
      "Created a full-stack web application including user differentiation for guests, users and admins, dynamic data display drawn from a MongoDB database and AWS S3 bucket, and posting of additional data to the backend via forms. This project utilized the MERN stack for developement and is hosted via Render.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Tailwind",
      "Render",
    ],
  },
  {
    image: weather,
    name: "Weather Website",
    link: "https://weather-application-4245c.web.app/",
    description:
      "Initially, I leveraged the OpenWeatherMap API to access weather data around the world. Simultaneously, I accessed data from GeoNames, which supplied a list containing the names of cities worldwide. I parsed the file and implemented a filtering mechanism to construct the list that users can access for weather information. The application is now deployed via Firebase.",
    skills: ["React", "Firebase", "APIs"],
  },
  {
    image: pente,
    name: "Pente Web-App",
    link: "https://pente-31410.web.app/",
    description:
      "I first implemented Pente in Java as a text-user-interface, and later recreated the game with a graphical-user-interface through React. The application is now deployed via Firebase.",
    skills: ["React", "Java", "Firebase"],
  },
];

export default projects;
