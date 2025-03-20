const Experience = ({ company, image, title, link, date, description }) => {
  return (
    <div className="dark:shadow-dark-fg2/30 mb-4 rounded-sm border p-6 shadow-lg">
      <div className="mb-1 flex items-center">
        <img
          src={image}
          alt={company}
          draggable="false"
          className="mr-2 h-16 w-16 rounded-full border object-contain"
        />
        <h3 className="text-xl font-bold underline">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        </h3>
      </div>
      <p className="text-light-fg2 dark:text-dark-fg2">{title} </p>
      <p className="text-light-fg2 dark:text-dark-fg3 mb-2 text-sm">{date}</p>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default Experience;
