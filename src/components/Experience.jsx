import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }
  from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../style"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from '../utils/motion'

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
  return (
    <>
      <motion.div className="lg:ml-[330px]" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};


export default SectionWrapper(Experience, "work")
