import React from "react";
import { Link } from "react-scroll";

export default function DownButton() {
  return (
    <Link
      className="text-theme-fill border-2 rounded-full text-4xl p-5 h-12 w-8 flex place-content-center items-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-theme-hover dark:hover:bg-theme-hover hover:translate-y-2"
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
      aria-label="Scroll down"
    >
      &#8595;
    </Link>
  );
}
