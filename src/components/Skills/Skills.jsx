import skills from "./skills.js";

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-10">
      <h2 className="mb-4 text-4xl font-bold">Skills</h2>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="dark:border-dark-fg2 dark:shadow-dark-fg2/30 flex h-full flex-col rounded-lg border border-gray-300 p-6 shadow-lg"
          >
            <h3 className="mb-4 text-xl font-semibold">
              {skillCategory.category}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-light-bg3 dark:bg-dark-bg3 flex items-center gap-2 rounded-lg px-3 py-1 text-sm"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5 w-5" />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
