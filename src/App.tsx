import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { TechnicalMarquee } from './components/TechnicalMarquee'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Simulate loading for now, you can hook this up to asset preloading
    setTimeout(() => setIsLoading(false), 2000)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <CustomCursor />
      
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <TechnicalMarquee />
            <Projects />
            <Skills />
            <Services />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
