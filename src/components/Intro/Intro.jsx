import Email from "../../assets/svg/socials/Email.jsx";
import Github from "../../assets/svg/socials/Github.jsx";
import Linkedin from "../../assets/svg/socials/Linkedin.jsx";

const Intro = () => {
  return (
    <section className="items-left flex flex-col justify-center px-4 pt-20 pb-10">
      <h1 className="mb-4 text-4xl font-bold">Hi, I'm Ryan Harang.</h1>
      <p className="text-light-fg2 dark:text-dark-fg2 mb-6 max-w-2xl text-lg">
        I'm a software engineer specializing in web development, aiming to
        create exceptional digital experiences. Check our my resume for details
        on my work!
      </p>
      <div className="flex items-center gap-4">
        <a
          href="../../pdf/Ryan_Harang_resume.pdf"
          download
          className="bg-accent hover:bg-accent/80 w-fit rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-300"
        >
          Download Resume
        </a>

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
    </section>
  );
};

export default Intro;
