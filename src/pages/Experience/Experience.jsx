import React from "react";
import Badge from "../../components/Badge";
import PdfDownloader from "../../components/PdfDownloader";

const experiences = [
  {
    id: 1,
    yearFrom: 2025,
    yearTo: "present",
    title: "Software Developer Intern",
    definition:
      "Contributed to building scalable and intuitive platforms using Next.js, TypeScript, React, and Tailwind CSS. Implemented an AI translator feature using Vercel’s AI SDK, further showcasing my ability to leverage modern AI technologies to enhance functionality. Collaborating on AI-based products has equipped me with a strong understanding of integrating AI agents into practical, user-centric applications. ",
    link: "https://nutrish.ai/",
    companyName: "Nutrish.ai",
    tech: [
      "React",
      "Next.Js",
      "Tailwind",
      "TypeScript",
      "Node.JS",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
    ],
  },
  {
    id: 2,
    yearFrom: 2024,
    yearTo: "present",
    title: "Full-stack Developer",
    definition:
      "Designed, implemented, and maintained API endpoints for emissions calculations using Node.js, TypeScript, and MongoDB. Developed front-end components with React to ensure seamless integration and user-friendly interfaces. Collaborated with cross-functional teams to align technical solutions with business requirements. Improved code quality through Git-based version control and code reviews.",
    link: "https://greenhousecalculator.com/",
    companyName: "Nordic Waves Group",
    tech: ["React", "Redux", "TypeScript", "Node.JS", "MongoDB"],
  },
];

const Experience = () => {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-midtext"
      id="project"
      aria-label="project"
    >
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 bg-background w-screen px-6 py-5 backdrop-blur
      md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 "
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-maintext lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="container mx-auto px-2 py-2 max-w-3xl bg-maincard p-6 rounded-3xl  shadow-lg border border-border">
        <div className="space-y-6 text-midtext">
          {experiences.map((experience) => (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              key={experience.id}
              className="bg-innercard overflow-hidden flex flex-col md:flex-row rounded-3xl border border-border 
              hover:none hover:shadow-out hover:text-maintext hover:border-border cursor-pointer"
            >
              {/* Thumbnail on left*/}

              <p className="text-midtext p-4 pt-6 uppercase ">
                {experience.yearFrom} <span>&#8212;</span> {experience.yearTo}
              </p>

              {/* Content on the right */}
              <div className="p-4 flex-1">
                <div className="relative font-medium leading-snug z-10 py-3 hover:text-maintext  hover:underline">
                  {experience.title} <span>&#8226;&#160;</span>
                  {experience.companyName}
                </div>
                <p className="text-midtext mt-2">{experience.definition}</p>
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
