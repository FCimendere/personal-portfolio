import React from "react";

const About = () => {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-midtext"
      id="about"
      aria-label="About me"
    >
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 bg-background w-screen px-6 py-5 backdrop-blur
      md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 "
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-maintext lg:sr-only">
          About
        </h2>
      </div>
      <div className="container mx-auto pt-6 px-2 py-2 p-6 max-w-3xl bg-maincard rounded-3xl  shadow-lg border border-border">
        <p className="mb-4">
          I’m a developer who loves creative design and the fusion of user
          experience with robust engineering.
        </p>
        <p className="mb-4">
          Over the past 2 years, I've completed bootcamps and courses, mastering
          the&nbsp;
          <em className="capitalize tracking-tight">
            HTML&nbsp;, CSS&nbsp;, React&nbsp;, NextJS&nbsp;, JavaScript&nbsp;,
            TypeScript &nbsp;,Node&nbsp;, Express&nbsp;, MongoDB&nbsp;,
            PostgreSQL&nbsp;
          </em>
          and{" "}
          <mark>
            dived into <em>AI Agents, LLM(Large Language Models)</em> world
          </mark>{" "}
          to follow latest technologies{" "}
          <mark>as a volunteer at several summits, conferences</mark> such as{" "}
          <a
            className="text-midtext hover:text-maintext focus-visible:text-teal-300"
            href="https://devworldconference.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="DevWorld main page"
          >
            &nbsp;DevWorld Conference
          </a>
          ,
          <a
            className="text-midtext hover:text-maintext focus-visible:text-teal-300"
            href="https://webdevcon.nl/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="webdevcon.nl main page"
          >
            &nbsp;Webdevcon
          </a>
          <a
            className="text-midtext hover:text-maintext focus-visible:text-teal-300"
            href="https://reactsummit.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="reactsummit main page"
          >
            &nbsp;React Summit
          </a>
          ,
          <a
            className="text-midtext hover:text-maintext focus-visible:text-teal-300"
            href="https://jsnation.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="jsnation main page"
          >
            &nbsp;JS Nation
          </a>
          , <mark>started to work at two different Startup company</mark> as
          full stack developer.
        </p>
        <p>
          As full-stack developer, I enjoy working on the backend because I love
          seeing the full picture—the logic, the data, the flow. But I’m equally
          drawn to the frontend, where design and colors bring everything to
          life.
        </p>
        <br></br>
        <p className="mb-4">
          Currently, I'm putting my skills to work as a&nbsp;
          <mark>
            <em className="">Full-Stack Developer</em> at
            <a
              className="text-midtext hover:text-maintext focus-visible:text-teal-300"
              href="https://nutrish.ai/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="small company(opens in new tab)"
            >
              &nbsp;Nutrish.ai - Startup in AI-driven nutrisionist-
            </a>{" "}
          </mark>
          , where I'm contrubuting build an&nbsp;
          <a
            className="font-bold text-midtext hover:text-maintext focus-visible:text-teal-300"
            href="https://nutrish.ai/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="nutrish.ai main page(opens in new tab)"
          >
            &nbsp;AI nutrition coaching tool over WhatsApp
          </a>
          &nbsp;that makes nutritionists accessible 24/7 with science-backed
          guidance. My role involves both frontend and backend work, including
          an LLM-backed translation feature for admins and creating charts and
          user metrics for the admin dashboard.&nbsp;
          <em className="font-bold">– a perfect blend of data and UX.</em>
        </p>
        <p className="mb-4">
          Additionally, I'm supporting to world as a&nbsp;
          <mark>
            <em className="">Full-Stack Developer</em> at
            <a
              className="text-midtext hover:text-maintext focus-visible:text-teal-300"
              href="https://www.nordicwaves.org/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="small company(opens in new tab)"
            >
              &nbsp;Nordic Waves Group -a startup in sustainability-
            </a>
          </mark>
          , where I'm contrubuting build a&nbsp;
          <a
            className="font-bold text-midtext hover:text-maintext focus-visible:text-teal-300"
            href="https://greenhousecalculator.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="greenhouse calculator project(opens in new tab)"
          >
            &nbsp;carbon calculator tool
          </a>
          &nbsp; that makes environmental impact assessment more accessible. My
          role involves crafting seamless experiences between backend APIs and
          React frontend components&nbsp;
          <em className="font-bold">
            – a perfect blend of technical complexity and user-focused design.
          </em>
        </p>

        <p className="mb-4">
          My journey into software development began after an 8-year career as
          an engineer in the security industry, I noticed that I bring an
          analytical and results-oriented perspective to the projects. I love
          approaching problems analytically and knowing where the relevant data
          is coming from. This helps me understand where the problem is coming
          from when the code gets complicated, make product recommendations, and
          see the whole picture from the database to the front-end.
        </p>

        <p className="mb-4">
          Outside of coding, I’m passionate about painting, digital graphic
          design, and illustrations. I also enjoy reading, taking on good
          challenges such as playing games, and diving into new technologies. As
          a Lord of the Rings fan, I love exploring fantastic worlds and
          immersing myself in the creativity and imagination that they offer.
        </p>
      </div>
    </section>
  );
};

export default About;
