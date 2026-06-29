import React, { useState, useEffect } from 'react'
import { styles } from "../style"
import { navLinks } from '../constants'
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      const current = navLinks.reduce((found, { id, title }) => {
        const el = document.getElementById(id)
        if (!el) return found
        const absoluteTop = el.getBoundingClientRect().top + scrollY
        return scrollY >= absoluteTop - 50 ? { title } : found
      }, null)

      setActive(current ? current.title : "")
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a href="#" className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer">Taha<span className='sm:block hidden'>| Portfolio</span></p>
        </a>
        <ul className='list-none hidden md:flex flex-row md:gap-5 lg:gap-10'>
          {navLinks.map((links) => (
            <li key={links.id}
              className={`relative pb-1 ${active === links.title ?
                  "text-white" : "text-secondary"
                } hover:text-white transition-colors duration-300`
              }
              onClick={() => setActive(links.title)}>
              <a href={`#${links.id}`}>{links.title}</a>
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#915eff] rounded-full transition-all duration-300 ${
                  active === links.title ? "w-full" : "w-0"
                }`}
              />
            </li>
          ))}

        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle)
            }}
          />

          <div className={
            `${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl`
          }>
            <ul className='list-none flex flex-col gap-5 '>
              {navLinks.map((links) => (
                <li key={links.id}
                  className={`${active === links.title ?
                      "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`
                  }
                  onClick={() =>{
                    setToggle(!toggle)
                    setActive(links.title)
                  }}>
                  <a href={`#${links.id}`}>{links.title}</a>
                </li>
              ))}

            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
