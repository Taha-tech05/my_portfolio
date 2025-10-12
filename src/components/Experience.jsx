import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }
  from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../style"
import { experiences1, experiences2, experiences3 } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from '../utils/motion'
import Background from 'three/src/renderers/common/Background.js'
import { func } from 'prop-types'

const ExperienceCard = ({ experience }) => {
  return <VerticalTimelineElement
    contentStyle={{
      background: '#1e3a8a',
      color: '#fff'
    }}
    contentArrowStyle={{ borderRight: '7px solid #1f2230' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[100%] h-[100%] object-contain'
        />
      </div>
    }

  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
}


const Experience = () => {
  const [active, setActive] = useState("ml");
  const [activeExp, setActiveExp] = useState(experiences1);
  const [rotation, setRotation] = useState(0);

  const handleSwitch = (section, expData) => {
    if (active === section) return;

    setActive(section);

    // first half flip
    setRotation(180);

    // after half rotation, swap content and finish flip
    setTimeout(() => {
      setActiveExp(expData);
      setRotation(360);
    }, 300); // half of the duration
  };
  return (
    <>
      <motion.div className="lg:ml-[330px]" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>

        <div className='lg:ml-[70px] flex gap-[50px] mt-3'>
          <button
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'ml' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("ml", experiences1)}
          >
            ML
          </button>

          <button
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'systems' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("systems", experiences2)}
          >
            Systems
          </button>

          <button
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'web' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("web", experiences3)}
          >
            Web
          </button>
        </div>
      </motion.div>

      {/* Flip container */}
      <div
        className='mt-10 flex flex-col transition-transform duration-[600ms] ease-in-out [transform-style:preserve-3d]'
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <VerticalTimeline>
          {activeExp.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};


export default SectionWrapper(Experience, "work")