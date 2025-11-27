import React from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import useIsMobile from '../hooks/useIsMobile'

const Tech = () => {
  const isMobile = useIsMobile()

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technologie) => (
        <div className='w-28 h-28' key={technologie.name}>
          {isMobile ? (
            <div className="w-full h-full flex justify-center items-center bg-tertiary rounded-full p-4">
              <img src={technologie.icon} alt={technologie.name} className="w-full h-full object-contain" />
            </div>
          ) : (
            <BallCanvas icon={technologie.icon} />
          )}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")