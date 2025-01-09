import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
    tech: ["React", "Masonry Layout", "Sanity CMS", "Netlify"],
  },
  {
    id: 3,
    name: "YelpCamp",
    description:
      "A full-stack web application for sharing and reviewing campgrounds.",
    link: "https://yelp-camp-rgop.onrender.com/",
    tech: [
      "Bootstrap",
      "Node",
      "Express",
      "EJS",
      "MongoDB",
      "JOI",
      "Cloudinary",
    ],
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
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-mid-blue"
      id="project"
      aria-label="project"
    >
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 bg-light-grey w-screen px-6 py-5 backdrop-blur
      md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 "
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-dark-blue lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-light-grey overflow-hidden flex flex-col md:flex-row rounded-3xl border-1 border-light-grey shadow-custom-out
              hover:none hover:shadow-custom-inset hover:text-mid-blue hover:border-dark-blue cursor-pointer"
            >
              {/* Thumbnail on left*/}

              <img
                src={cld
                  .image(`docs/models-${project.id}`)
                  .resize(fill().width(500).height(500))
                  .toURL()}
                alt="models"
                className="mg:w-full lg:w-1/4 md:w-1/8 sm:w-1/16 mx-4 my-4 object-cover rounded-3xl border-1 border-light-grey shadow-custom-out"
              />

              {/* Content on the right */}
              <div className="p-4 flex-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative tracking-wider z-10 py-3 hover:text-light-blue hover:underline"
                >
                  {project.name} <OpenInNewIcon />
                </a>
                <p className="text-mid-blue mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
