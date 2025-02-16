import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
// import { Link } from "react-router-dom";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Badge from "../../components/Badge";

const projects = [
  {
    id: 1,
    name: "E-Commerce Webshop",
    description:
      "Modern full-stack ecommerce app which uses React, Next.js, Stripe & Sanity - from start to finish.",
    link: "https://ecommerce-psi-six-78.vercel.app/",
    tech: ["React", "Next.Js", "Sanity CMS", "Stripe", "Vercel"],
  },
  {
    id: 2,
    name: "ShareMe",
    description:
      "A social media app for sharing images which uses React, Tailwind CSS & Sanity as CMS - from start to finish.",
    link: "https://sharemebyfly.netlify.app/",
    tech: ["React", "Tailwind", "Sanity CMS", "Netlify"],
  },
  {
    id: 3,
    name: "YelpCamp",
    description:
      "A full-stack web application for sharing and reviewing campgrounds.",
    link: "https://yelp-camp-rgop.onrender.com/",
    tech: ["Bootstrap", "Node", "Express", "EJS", "Mongo", "JOI", "Cloudinary"],
  },
];

const Project = () => {
  //Cloudinary implementation
  const cloud = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const cld = new Cloudinary({
    cloud: {
      cloudName: cloud,
    },
  });

  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-maintext"
      id="project"
      aria-label="project"
    >
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 bg-background w-screen px-6 py-5 backdrop-blur
      md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 "
      >
        <h2 className="text-sm font-bold uppercase tracking-widest dark:text-lighttext lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="container mx-auto px-2 py-2 max-w-3xl bg-maincard p-6 rounded-3xl  shadow-lg border border-border transition-colors">
        <div className="space-y-6 text-midtext ">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="bg-innercard overflow-hidden flex flex-col md:flex-row rounded-3xl 
              border border-border 
              hover:shadow-out hover:text-maintext hover:border-border cursor-pointer
              "
            >
              {/* Thumbnail on left*/}

              <img
                src={cld
                  .image(`docs/models-${project.id}`)
                  .resize(fill().width(500).height(500))
                  .toURL()}
                alt="models"
                className="hidden sm:block sm:w-1/6 md:w-1/6 lg:w-1/4 text-midtext mx-4 my-4 
                  object-cover rounded-3xl border border-border dark:border-section"
              />

              {/* Content on the right */}
              <div className="p-4 flex-1">
                <div
                  className="relative tracking-wider z-10 py-3 text-maintext dark:text-lighttext 
                  hover:text-accent dark:hover:text-accent transition-colors hover:underline"
                >
                  {project.name}
                </div>
                <p className="text-midtext dark:text-midtext mt-2 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-row flex-wrap text-xs gap-2 mt-2">
                  {project.tech.map((element, index) => (
                    <Badge key={index} text={element} />
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
