import React, { useState, useEffect } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import { FiGrid } from 'react-icons/fi'
import styles from '../../styles.module.css'
import Badge from '../../components/Badge'
import GradientTextButton from '../../components/GradientTextButton'

const data = [
  {
    name: '{ AI } Translate',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 250,
    description:
      "AI-driven web application for seamless translation (Google Translate Clone)",
    link: "https://translation-ai-app.vercel.app/",
    tech: ["React", "Next.Js", "TypeScript", "Tailwind", "Vercel AI SDK", "Lucide-React"],
    focussedArea: "AI Projects",
  },
  {
    name: 'E-Commerce Webshop',
    css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    height: 250,
    description:
      "Modern full-stack ecommerce app which uses React, Next.js, Stripe & Sanity - from start to finish.",
    link: "https://ecommerce-psi-six-78.vercel.app/",
    tech: ["React", "Next.Js", "Sanity CMS", "Stripe", "Vercel"],
    focussedArea: "Full-stack Projects",
  },
  {
    name: 'ShareMe',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 250,
    description:
      "A social media app for sharing images which uses React, Tailwind CSS & Sanity as CMS - from start to finish.",
    link: "https://sharemebyfly.netlify.app/",
    tech: ["React", "Tailwind", "Sanity CMS", "Netlify"],
    focussedArea: "Full-stack Projects"
  },
  {
    name: 'YelpCamp',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 250,
    description:
      "A full-stack web application for sharing and reviewing campgrounds.",
    link: "https://yelp-camp-rgop.onrender.com/",
    tech: ["Bootstrap", "Node", "Express", "EJS", "Mongo", "JOI", "Cloudinary"],
    focussedArea: "Full-stack Projects"
  },
  {
    name: 'Dark/Light Mode Button Design',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 250,
    description:
      "A frontend project that includes a button design for light-dark mode",
    link: "https://codepen.io/fly_pixie/pen/EaxwqMP",
    tech: ["HTML", "CSS", "JavaScript"],
    focussedArea: "Frontend Projects"
  },
  {
    name: 'Social links profile card',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 250,
    description:
      "A Social links profile card design- Basic HTML/CSS Practise",
    link: "https://social-links-profile-steel.vercel.app/",
    tech: ["HTML5", "CSS3"],
    focussedArea: "Frontend Projects"
  },
  {
    name: 'Blog-Preview-Card',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 250,
    description:
      "A blog post preview card design",
    link: "https://blog-preview-card-seven-iota.vercel.app/",
    tech: ["HTML5", "CSS3"],
    focussedArea: "Frontend Projects"
  },
]

export default function ProjectsArchive() {
  const [open, setOpen] = useState(false)
  const [bg, setBg] = useState(getCSSVariable('--background'))

  function getCSSVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const current = getCSSVariable('--background')
      setBg(current)
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const transApi = useSpringRef()
  const springApi = useSpringRef()

  const { size, background, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: '10%',
      background: bg,
    },
    to: {
      size: open ? '100%' : '10%',
      background: open ? bg : 'transparent',
    }
  })

  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  const renderProjectSection = (title, filter) => (
    <div className="w-full">
      <GradientTextButton
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={true}
        className="custom-class w-full h-full"
      >
        <div className="bg-innercard rounded-3xl p-6 h-[70vh] flex flex-col">
          <h3 className="text-2xl font-bold text-maintext dark:text-lighttext mb-4 text-center">{title}</h3>
          <div className="space-y-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {data.filter(item => item.focussedArea === filter).map((item) => (
              <animated.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-innercard overflow-hidden flex flex-col md:flex-row rounded-3xl border border-border 
                  hover:shadow-out hover:text-maintext hover:border-border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent w-full"
                role="listitem"
                style={{ height: item.height }}
              >
                <div className="p-4 flex-1 flex flex-col justify-between w-full">
                  <div>
                    <div className="relative tracking-wider z-10 py-3 text-maintext dark:text-lighttext 
                      hover:text-accent dark:hover:text-accent transition-colors hover:underline">
                      {item.name}
                    </div>
                    <p className="text-midtext dark:text-midtext mt-2 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap text-xs gap-2 mt-4">
                    {item.tech.map((tech, index) => (
                      <Badge key={index} text={tech} />
                    ))}
                  </div>
                </div>
              </animated.a>
            ))}
          </div>
        </div>
      </GradientTextButton>
    </div>
  )

  return (
    <div
      className="w-full min-h-screen bg-background p-6 flex items-center justify-center overflow-auto"
      // Dış container scroll izinli
    >
      <animated.div
        style={{
          ...rest,
          width: size,
          background,
          minWidth: 200,
          minHeight: open ? '90vh' : 200, // Açıkken yüksekliği ekranın %90'ına çıkart
          height: open ? '90vh' : size,    // Aynı şekilde height da ayarlı
          overflow: 'hidden',
          maxHeight: '90vh',
        }}
        className="relative rounded-3xl cursor-pointer shadow-lg will-change-transform"
        onClick={() => setOpen((prev) => !prev)}
      >
        {!open ? (
          <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer select-none transition-transform duration-200 hover:scale-105 mt-2">
            <FiGrid
              className="text-maintext dark:text-white text-5xl mb-2 transition-colors duration-200"
              aria-label="Projects icon"
            />
            <span className="text-maintext dark:text-white text-2xl font-bold tracking-wide">
              Projects
            </span>
            <span className="text-maintext dark:text-white text-sm mt-2 opacity-70">
              Click to view projects
            </span>
          </div>
        ) : (
          <div className="w-full h-full p-6 -mt-2 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto">
            {renderProjectSection("AI Projects", "AI Projects")}
            {renderProjectSection("Frontend Projects", "Frontend Projects")}
            {renderProjectSection("Fullstack Projects", "Full-stack Projects")}
          </div>
        )}
      </animated.div>
    </div>
  );
  
  
}
