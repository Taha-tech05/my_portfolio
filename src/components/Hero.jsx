import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { styles } from "../style"
import { ComputersCanvas } from "./canvas"
import { style } from 'framer-motion/client'
import { github, linkedin } from '../assets'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={
        `${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`
      }
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hello
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>I'm <span className='text-[#915eff]'>Taha</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            Computer Science student<br /> passionate about building<br /> modern Web Applications,<br /> exploring Machine Learning, and <br/>crafting reliable Software solutions.
          </p>
          <div className='mt-3 ml-[10px] flex gap-[50px]'>
            <a
              href="https://github.com/Taha-tech05"
            >
              <img
                src={github}
                alt="GitHub Profile"
                className="lg:w-14 lg:h-14 xs:w-6 xs:h-6 rounded-full border-[5px] border-white hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/taha-irfan05/"
            >
              <img
                src={linkedin}
                alt="GitHub Profile"
                className="lg:w-14 lg:h-14 xs:w-6 xs:h-6 rounded-full border-[5px] border-white hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
        {!isMobile && <div className="w-[50%] h-[500px]">
          <ComputersCanvas />
        </div>
        }
      </div>
      {isMobile &&
        <ComputersCanvas />
      }
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