import Email from "../../assets/svg/socials/Email.jsx";
import Github from "../../assets/svg/socials/Github.jsx";
import Linkedin from "../../assets/svg/socials/Linkedin.jsx";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between p-4">
      <div className="text-sm font-light">&copy; Ryan Harang 2025</div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/RyanHarang"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-harang/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:harangryan@gmail.com"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
