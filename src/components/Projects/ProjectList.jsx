import Project from "./Project";
import projects from "./projects";

const ProjectList = () => {
  return (
    <section id="projects" className="px-4 py-10">
      <h2 className="mb-4 text-4xl font-bold">Projects</h2>
      <div
        id="projects"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            name={project.name}
            link={project.link}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
