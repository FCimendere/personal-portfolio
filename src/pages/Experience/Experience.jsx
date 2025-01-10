import React from "react";
import Badge from "../../components/Badge";
import PdfDownloader from "../../components/PdfDownloader";

const experiences = [
  {
    id: 1,
    yearFrom: 2024,
    yearTo: "present",
    title: "Full-stack Developer",
    definition:
      "Designed, implemented, and maintained API endpoints for emissions calculations using Node.js, TypeScript, and MongoDB. Developed front-end components with React to ensure seamless integration and user-friendly interfaces. Collaborated with cross-functional teams to align technical solutions with business requirements. Improved code quality through Git-based version control and code reviews.",
    link: "https://greenhousecalculator.com/",
    companyName: "Nordic Waves Group",
    tech: ["React", "Redux", "TypeScript", "Node.JS", "Mongo"],
  },
  {
    id: 2,
    yearFrom: 2024,
    yearTo: "present",
    title: "Software Developer Intern",
    definition:
      "Collaborate on building and optimizing our AI chatbot for nutrition guidance using LLM. Work on backend and frontend development to improve user experience and platform functionality. Test and implement new features to enhance the AI’s capabilities. Solve complex technical challenges with innovative solutions. Help integrate analytics to track and improve user engagement ",
    link: "https://nutrish.ai/",
    companyName: "Nutrish.ai",
    tech: ["React", "Next.Js", "Tailwind", "TypeScript", "PostgreSQL"],
  },
];

const Experience = () => {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-mid-blue"
      id="project"
      aria-label="project"
    >
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 bg-light-grey w-screen px-6 py-5 backdrop-blur
      md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 "
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-dark-blue lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="container mx-auto px-2 py-2 max-w-3xl bg-white p-6 rounded-3xl  shadow-lg border border-light-grey">
        <div className="space-y-6 text-light-blue">
          {experiences.map((experience) => (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              key={experience.id}
              className="bg-light-grey overflow-hidden flex flex-col md:flex-row rounded-3xl border border-light-grey 
              hover:none hover:shadow-custom-inset hover:text-dark-blue hover:border-light-grey cursor-pointer"
            >
              {/* Thumbnail on left*/}

              <p className="text-light-blue p-4 pt-6 uppercase ">
                {experience.yearFrom} <span>&#8212;</span> {experience.yearTo}
              </p>

              {/* Content on the right */}
              <div className="p-4 flex-1">
                <div className="relative font-medium leading-snug z-10 py-3 hover:text-dark-blue  hover:underline">
                  {experience.title} <span>&#8226;&#160;</span>
                  {experience.companyName}
                </div>
                <p className="text-light-blue mt-2">{experience.definition}</p>
                <div className="flex flex-row flex-wrap text-xs gap-2 mt-2">
                  {experience.tech.map((element, index) => (
                    <Badge key={index} text={element} />
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <PdfDownloader />
      </div>
    </section>
  );
};

export default Experience;
