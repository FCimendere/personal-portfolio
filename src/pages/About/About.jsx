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
      <div className="container mx-auto pt-6 px-2 py-2 p-6 max-w-3xl bg-white rounded-3xl  shadow-lg border border-light-grey">
        <p className="mb-4">
          I’m a developer who loves creative design and the fusion of user
          experience with robust engineering.
        </p>
        <p className="mb-4">
          Over the past 1.5 years, I've completed bootcamps and courses,
          mastering the&nbsp;
          <em className="capitalize tracking-tight">
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
          My journey into web development began after spending eight years as a
          Pre-Sales Engineer in the CCTV and access control security industry.
          During that time, I developed a deep technical understanding and an
          ability to solve complex problems. However, I craved a more dynamic
          field that allowed me to build, design, and constantly learn. This led
          me to make the leap into web development, where I can apply my
          technical expertise in new, creative ways.
        </p>

        <p className="mb-4">
          Outside of coding, I’m passionate about painting, digital graphic
          design, and illustrations. I also enjoy reading, taking on good
          challenges such as playing games, and diving into new technologies. As
          a Lord of the Rings fan, I love exploring fantastic worlds and
          immersing myself in the creativity and imagination that they offer.
        </p>

        {/* 
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
        </div> */}
      </div>
    </section>
  );
};

export default About;
