import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../style"
import { ComputersCanvas } from "./canvas"
import { github, linkedin } from '../assets'
import useIsMobile from '../hooks/useIsMobile'

const Hero = () => {
  const isMobile = useIsMobile()

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
          <div className="flex-1 text-left">
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-lg sm:text-xl`}>
              Hello <span className='text-2xl'>👋</span>
            </p>

            <h1
              className={`${styles.heroHeadText} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              I'm <span className="text-[#915eff]">Taha</span>
            </h1>

            <p
              className={`${styles.heroSubText} text-white-100 text-base sm:text-lg leading-relaxed`}
            >
              Computer Science student<br />
              passionate about building<br />
              modern Web Applications,<br />
              exploring Machine Learning, and<br />
              crafting reliable Software solutions.
            </p>

            {/* Social buttons */}
            <div className="mt-5 flex gap-10 items-center">
              <a href="https://github.com/Taha-tech05">
                <img
                  src={github}
                  alt="GitHub Profile"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-[5px] border-white hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a href="https://www.linkedin.com/in/taha-irfan05/">
                <img
                  src={linkedin}
                  alt="LinkedIn Profile"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-[5px] border-white hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right 3D Canvas (hidden on mobile) */}
        <div className="hidden lg:block w-[50%] h-[500px]">
          <ComputersCanvas />
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