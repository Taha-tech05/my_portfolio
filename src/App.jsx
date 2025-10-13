import { useState,useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
function App() {
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
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {!isMobile&&<Tech />}
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
