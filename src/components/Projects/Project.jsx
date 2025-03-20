const Project = ({ image, name, link, description, skills }) => {
  return (
    <div className="dark:shadow-dark-fg2/30 flex h-full flex-col overflow-hidden rounded-sm border shadow-lg">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:scale-105"
      >
        <img
          src={image}
          alt={`${name} image`}
          className="h-48 w-full object-cover"
        />
      </a>
      <div className="flex flex-grow flex-col p-4">
        <p className="mb-2 text-xl font-semibold">{name}</p>

        <p className="mb-2 text-lg">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-light-bg2 dark:bg-dark-bg2 rounded-lg px-2 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
