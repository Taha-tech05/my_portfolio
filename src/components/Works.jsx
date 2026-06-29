import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { styles } from "../style"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects1, projects2, projects3 } from "../constants"

const ProjectCard = ({ name, description, tags, images, source_code_link, deployed_link }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const imageList = images || [];
  const hasImages = imageList.length > 0;
  const hasDeployedLink = Boolean(deployed_link);

  useEffect(() => {
    let interval;
    if (isHovered && imageList.length > 1) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % imageList.length);
      }, 1200); // change every 1.2s
    }
    return () => clearInterval(interval);
  }, [isHovered, imageList.length]);

  return (
    <motion.div
      style={{ backfaceVisibility: "hidden" }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.02}
        transitionSpeed={1200}
        className="w-full"
      >
      <div
        className={`bg-tertiary p-5 rounded-2xl w-full transition-shadow duration-300 hover:shadow-2xl ${hasDeployedLink ? "cursor-pointer" : ""}`}
        role={hasDeployedLink ? "link" : undefined}
        tabIndex={hasDeployedLink ? 0 : undefined}
        onClick={() => {
          if (hasDeployedLink) {
            window.open(deployed_link, "_blank");
          }
        }}
        onKeyDown={(event) => {
          if (hasDeployedLink && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            window.open(deployed_link, "_blank");
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image slideshow */}
        <div className="relative w-full h-[250px] overflow-hidden rounded-2xl">
          {hasImages ? (
            <img
              src={imageList[current]}
              alt={name}
              className="absolute inset-0 w-full h-full object-contain transition-all duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-primary px-6 text-center">
              <span className="text-white text-[22px] font-bold leading-tight">{name}</span>
            </div>
          )}

          {/* Indicator dots */}
          {imageList.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {imageList.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === current ? "bg-white" : "bg-gray-400"
                  }`}
              />
              ))}
            </div>
          )}

          {/* Github icon (not blocking hover now) */}
          <div
            onClick={(event) => {
              event.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
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
          <ul className="mt-2 space-y-1.5 text-secondary text-[14px] leading-snug">
            <li><span className="text-white font-semibold">Problem: </span>{description.problem}</li>
            <li><span className="text-white font-semibold">Approach: </span>{description.approach}</li>
            <li><span className="text-white font-semibold">Result: </span>{description.result}</li>
          </ul>
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
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  const [active, setActive] = useState("web");
  const [activeProj, setActiveProj] = useState(projects3);
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

      <div className="lg:ml-[420px]">
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <div className='lg:-ml-[60px] mt-3 flex flex-wrap gap-[20px] lg:gap-[50px]'>
          <button
            type="button"
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'web' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("web", projects3)}
          >
            Web
          </button>

          <button
            type="button"
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'ml' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("ml", projects1)}
          >
            ML
          </button>

          <button
            type="button"
            className={`px-6 py-2 rounded-xl text-white font-semibold hover:bg-purple-700 transition ${active === 'systems' ? 'bg-purple-700' : 'bg-blue-600'} hover:scale-110 transition-transform duration-300`}
            onClick={() => handleSwitch("systems", projects2)}
          >
            Systems
          </button>

          
        </div>

      </div>

      <div className='w-full flex'>
        <p className='mt-6 lg:ml-[150px] text-secondary text-[17px] max-w-4xl leading-[30px]'>
          I have worked on a diverse set of projects, including full-stack web applications, system-level C++ simulations, creative web platforms, and machine learning models. My experience reflects strong problem-solving skills, adaptability, and a passion for applying technology to real-world challenges. I have built projects that span backend and frontend development, systems programming, and data-driven solutions in ML. This has helped me gain hands-on expertise across multiple domains of computer science. I enjoy creating solutions that are not only technically robust but also impactful for users.</p>
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
            {...project}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "projects")
