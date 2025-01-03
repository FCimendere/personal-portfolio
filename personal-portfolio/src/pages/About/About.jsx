import React from "react";

const About = () => {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-mid-blue"
      id="about"
      aria-label="About me"
    >
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 bg-light-grey w-screen px-6 py-5 backdrop-blur
      md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 "
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-dark-blue lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <h2 className="mb-4">
          What happens when you combine security expertise with a love for
          creative coding?
        </h2>
        <p className="mb-4">
          After eight years in CCTV and access control security as a pre-sales
          engineer, I realized I craved something more dynamic&nbsp;
          <em className="font-bold">
            —something that let me build, design, and constantly learn.
          </em>
          &nbsp; So, I made the leap into web development!
        </p>
        <p className="mb-4">
          Over the past 1.5 years, I've completed bootcamps and courses,
          mastering the&nbsp;
          <em className="font-bold capitalize tracking-tight">
            HMTL&nbsp;&#124;&nbsp;CSS&nbsp;&#124;&nbsp;React&nbsp;&#124;&nbsp;JavaScript&nbsp;&#124;&nbsp;TypeScript
            &nbsp;&#124;&nbsp;Node&nbsp;&#124;&nbsp;Express&nbsp;&#124;&nbsp;MongoDB.&nbsp;
          </em>
          While I enjoy full-stack development, my heart has always been with
          front-end—crafting sleek, intuitive designs with React and CSS.
        </p>
        <p className="mb-4">
          Currently, I'm putting my skills to work as a&nbsp;
          <em className="font-bold">Full-Stack Developer</em> at
          <a
            className="font-bold text-light-blue hover:text-dark-blue focus-visible:text-teal-300"
            href="https://www.nordicwaves.org/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="small company(opens in new tab)"
          >
            &nbsp;Nordic Waves Group
          </a>
          , where I'm helping build a&nbsp;
          <a
            className="font-bold text-light-blue hover:text-dark-blue focus-visible:text-teal-300"
            href="hhttps://greenhousecalculator.com/"
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
        <p className="">
          My background in security systems might seem unusual for a web
          developer, but it's actually my secret weapon. Those years of
          technical training and pre-sales engineering taught me how to:
        </p>
        <ul className="list-disc pl-4 ml-8 my-4">
          <li>
            Translate complex technical concepts into user-friendly solutions
          </li>
          <li>
            Adapt quickly to new technologies -- try keeping up with security
            tech!
          </li>
          <li>Collaborate effectively with diverse teams and stakeholders</li>
        </ul>
        <p className="mb-4 font-bold">What People Say About Me:</p>
        <p className="mb-4 text-light-blue">From my previous managers:</p>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-light-blue pl-4 italic rounded-lg">
            “Fulya is a quick learner with an unstoppable ‘can-do’ attitude.”
          </blockquote>
          <blockquote className="border-l-4 border-light-blue pl-4 italic rounded-lg">
            “She’s not just an engineer; she’s a problem solver with high energy
            and a great sense of humor.”
          </blockquote>
          <blockquote className="border-l-4 border-light-blue pl-4 italic rounded-lg">
            “If you want someone who gets things done and keeps the team spirit
            high, she’s the one.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
