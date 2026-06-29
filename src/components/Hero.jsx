import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { styles } from "../style"
import { ComputersCanvas } from "./canvas"
import { github, linkedin } from '../assets'

const socialLinks = [
  { href: "https://github.com/Taha-tech05", icon: github, label: "GitHub Profile" },
  { href: "https://www.linkedin.com/in/taha-irfan05/", icon: linkedin, label: "LinkedIn Profile" },
]

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    setShowCanvas(mediaQuery.matches)
    const handleChange = (event) => setShowCanvas(event.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10`}
      >
        {/* Left side: Gradient line + text */}
        <div className="flex flex-row items-start gap-5">
          {/* Gradient line */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Hero text */}
          <motion.div
            className="flex-1 text-left"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
          >
            <motion.p
              variants={{ hidden: { y: -20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${styles.heroSubText} mt-2 text-white-100 text-lg sm:text-xl`}
            >
              Hello <span className='text-2xl'>👋</span>
            </motion.p>

            <motion.h1
              variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${styles.heroHeadText} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              I'm <span className="text-[#915eff]">Taha</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${styles.heroSubText} text-white-100 text-base sm:text-lg leading-relaxed`}
            >
              Computer Science student<br />
              passionate about building<br />
              modern Web Applications,<br />
              exploring Machine Learning, and<br />
              crafting reliable Software solutions.
            </motion.p>

            {/* Social buttons */}
            <motion.div
              variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-5 flex gap-5 sm:gap-8 lg:gap-10 items-center"
            >
              {socialLinks.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className="block"
                >
                  <img
                    src={icon}
                    alt={label}
                    className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-[3px] sm:border-[4px] lg:border-[5px] border-white"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right 3D Canvas (hidden on mobile, not mounted at all to save resources) */}
        <div className="hidden lg:block w-[50%] h-[500px]">
          {showCanvas && <ComputersCanvas />}
        </div>
      </div>

      <div className='absolute xs:bottom-1f bottom-8
    w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"

            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero