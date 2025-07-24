import React, { useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import styles from '../../styles.module.css'
import Badge from '../../components/Badge'
import { FiGrid } from 'react-icons/fi';

const data = [
  {
    name: 'E-Commerce Webshop',
    css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    height: 400,
    description:
      "Modern full-stack ecommerce app which uses React, Next.js, Stripe & Sanity - from start to finish.",
    link: "https://ecommerce-psi-six-78.vercel.app/",
    tech: ["React", "Next.Js", "Sanity CMS", "Stripe", "Vercel"],
  },
  {
    name: 'ShareMe',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 400,
    description:
      "A social media app for sharing images which uses React, Tailwind CSS & Sanity as CMS - from start to finish.",
    link: "https://sharemebyfly.netlify.app/",
    tech: ["React", "Tailwind", "Sanity CMS", "Netlify"],
  },
  {
    name: 'YelpCamp',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 400,
    description:
      "A full-stack web application for sharing and reviewing campgrounds.",
    link: "https://yelp-camp-rgop.onrender.com/",
    tech: ["Bootstrap", "Node", "Express", "EJS", "Mongo", "JOI", "Cloudinary"],
  },
]

export default function ProjectsArchive() {
  const [open, set] = useState(false)

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'rgba(64, 121, 255' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'rgba(251, 252, 250)' : 'rgba(64, 121, 255',
      text: open ? 'black' : 'white',
    },
  })

  const transApi = useSpringRef()
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

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size, minWidth: 200, minHeight: 200, aspectRatio: '1 / 1' }}
        className={styles.container}
        onClick={() => set(open => !open)}
      >
        {!open ? (
          <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer select-none transition-transform duration-200 hover:scale-105">
            <FiGrid className="text-white text-5xl mb-2 transition-colors duration-200 group-hover:text-accent" aria-label="Projects icon" />
            <span className="text-white text-2xl font-bold tracking-wide">Projects</span>
            <span className="text-white text-sm mt-2 opacity-70">Click to view all projects</span>
          </div>
        ) : (
          transition((style, item) => (
            <animated.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.name}
              className="bg-innercard overflow-hidden flex flex-col md:flex-row rounded-3xl \
                border border-border \
                hover:shadow-out hover:text-maintext hover:border-border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              role="listitem"
              aria-label={`View details for project: ${item.name}`}
              style={{ ...style, background: item.css, height: item.height }}
            >
              <div className="p-4 flex-1">
                <div className="relative tracking-wider z-10 py-3 text-maintext dark:text-lighttext \
                  hover:text-accent dark:hover:text-accent transition-colors hover:underline">
                  {item.name}
                </div>
                <p className="text-midtext dark:text-midtext mt-2 transition-colors">
                  {item.description}
                </p>
                <div className="flex flex-row flex-wrap text-xs gap-2 mt-2">
                  {item.tech.map((element, index) => (
                    <Badge key={index} text={element} />
                  ))}
                </div>
              </div>
            </animated.a>
          ))
        )}
      </animated.div>
    </div>
  )
}
