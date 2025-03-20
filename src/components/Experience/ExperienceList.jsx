import Experience from "./Experience";
import experiences from "./experiences";

const ExperienceList = () => {
  return (
    <section id="experience" className="px-4 py-10">
      <h2 className="mb-4 text-4xl font-bold">Experience</h2>
      {experiences.map((experience, index) => (
        <Experience
          key={index}
          image={experience.image}
          title={experience.title}
          link={experience.link}
          date={experience.date}
          company={experience.company}
          description={experience.description}
        />
      ))}
    </section>
  );
};

export default ExperienceList;
