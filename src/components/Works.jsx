import React, { useState, useEffect } from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'
import { styles } from "../style"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects1, projects2, projects3 } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, images, source_code_link }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && images && images.length > 1) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 1200); // change every 1.2s
    }
    return () => clearInterval(interval);
  }, [isHovered, images]);

  return (
    <motion.div
      style={{ backfaceVisibility: "hidden" }}
      //variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <div
        className="bg-tertiary p-5 rounded-2xl w-full  
             transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image slideshow */}
        <div className="relative w-full h-[250px] overflow-hidden rounded-2xl">
          <img
            // src={images[current]}
            alt={name}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-700"
          />

          {/* Indicator dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === current ? "bg-white" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>

          {/* Github icon (not blocking hover now) */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute top-2 right-2 black-gradient w-10 h-10 rounded-full 
                       flex justify-center items-center cursor-pointer z-10"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


const Works = () => {
  const [active, setActive] = useState("ml");
  const [activeProj, setActiveProj] = useState(projects1);
  const [rotation, setRotation] = useState(0);
  const handleSwitch = (section, data) => {
    if (active === section) return;

    setActive(section);

    // first half flip
    setRotation(180);

    // after half rotation, swap content and finish flip
    setTimeout(() => {
      setActiveProj(data);
      setRotation(360);
    }, 300); // half of the duration
  };
  return (
    <>

      <motion.div className="lg:ml-[420px]" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <div className='lg:-ml-[60px] mt-3 flex gap-[50px]'>
          <button
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'ml' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("ml", projects1)}
          >
            ML
          </button>

          <button
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'systems' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("systems", projects2)}
          >
            Systems
          </button>

          <button
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'web' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("web", projects3)}
          >
            Web
          </button>
        </div>

      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 lg:ml-[150px] text-secondary text-[17px] max-w-4xl leading-[30px]'
        >
          I have worked on a diverse set of projects, including full-stack web applications, system-level C++ simulations, creative web platforms, and machine learning models. My experience reflects strong problem-solving skills, adaptability, and a passion for applying technology to real-world challenges. I have built projects that span backend and frontend development, systems programming, and data-driven solutions in ML. This has helped me gain hands-on expertise across multiple domains of computer science. I enjoy creating solutions that are not only technically robust but also impactful for users.</motion.p>
      </div>
      <div
        className="mt-10 ml-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-[30px]
             transition-transform duration-[600ms] ease-in-out"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",   // 👈 move here
        }}
      >
        {activeProj.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}   // ✅ pass index
            {...project}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "")