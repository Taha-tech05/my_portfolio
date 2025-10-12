import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion"
import { styles } from "../style"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[200px] shadow-card '
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div className="lg:ml-[400px]" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 lg:ml-[150px] text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I'm Muhammad Taha Irfan, a Computer Science student at FAST NUCES Islamabad with a passion for building impactful digital solutions. My interests span full-stack web development, database systems, and machine learning, where I enjoy turning complex problems into scalable, user-focused applications.      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service}>

          </ServiceCard>
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")