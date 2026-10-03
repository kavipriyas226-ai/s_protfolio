import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Staggered text component
const StaggeredText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const words = text.split(" ")
  
  return (
    <div className={`flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: delay + (i * 0.1),
            ease: [0.215, 0.61, 0.355, 1] 
          }}
          className="inline-block origin-bottom"
          style={{ transformPerspective: 400 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// Particle component
const Particles = () => {
  const particles = Array.from({ length: 30 })
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-[#5797D5] rounded-full"
          initial={{ 
            x: `${Math.random() * 100}vw`, 
            y: `${Math.random() * 100}vh`,
            opacity: Math.random() * 0.5 + 0.1
          }}
          animate={{ 
            y: [`${Math.random() * 100}vh`, `${Math.random() * -20}vh`],
            opacity: [null, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !portraitRef.current) return
    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
      })

      // Simulate 360/parallax with GSAP on scroll
      gsap.to(portraitRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
        },
        rotateY: isMobile ? 0 : 360,
        scale: isMobile ? 1 : 1.05,
        ease: "none",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0c]"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181B20]/40 via-[#0a0a0c]/80 to-[#0a0a0c] pointer-events-none" />
      
      {/* Soft Moving Light */}
      <motion.div 
        animate={{
          x: mousePosition.x * -5,
          y: mousePosition.y * -5,
        }}
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#5797D5] rounded-full blur-[150px] opacity-[0.03] pointer-events-none transition-transform duration-1000 ease-out"
      />
      
      <Particles />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 mt-32 md:mt-0 flex flex-col z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#5797D5]" />
            <p className="font-mono text-[#5797D5] text-[10px] md:text-xs tracking-[0.2em] uppercase">
              CAD Designer | 3D Visualization
            </p>
          </motion.div>

          <div className="font-heading text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] mb-8 text-[#F5F6F7]">
            <StaggeredText text="Designing spaces." delay={1.7} />
            <StaggeredText text="Detailing structures." delay={2.0} />
            <StaggeredText text="Bringing ideas to life." delay={2.3} className="text-[#A8ADB5]" />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="text-[#A8ADB5] text-sm md:text-base max-w-md mb-10 leading-relaxed border-l border-[#343942] pl-6"
          >
            I'm V. Suresh Kumar, a CAD Designer with one year of professional experience, focused on technical drawings, 3D visualization and structural detailing.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'})}
              className="group relative px-8 py-4 bg-[#F5F6F7] text-[#0a0a0c] font-medium text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#5797D5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                EXPLORE MY WORK
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-0 group-hover:translate-x-1 transition-transform">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}
              className="group px-8 py-4 bg-transparent border border-[#343942] text-[#F5F6F7] font-medium text-sm hover:border-[#5797D5] hover:text-[#5797D5] transition-all duration-500"
            >
              LET'S CONNECT
            </button>
          </motion.div>
        </div>

        {/* Right Portrait Container */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[85vh] relative flex items-center justify-center md:justify-end mt-12 md:mt-0 perspective-[1200px]">
          
          {/* Technical measurements overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute inset-0 pointer-events-none z-20 hidden md:block"
          >
            <div className="absolute top-[10%] left-[20%] w-[1px] h-[80%] bg-gradient-to-b from-transparent via-[#5797D5]/20 to-transparent" />
            <div className="absolute top-[50%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#5797D5]/20 to-transparent" />
            <div className="absolute top-[15%] right-[15%] font-mono text-[9px] text-[#5797D5]/60 tracking-widest">
              Z-INDEX: 0.998<br/>SCALE: 1.00
            </div>
            <div className="absolute bottom-[20%] left-[15%] font-mono text-[9px] text-[#5797D5]/60 tracking-widest">
              COORD: {Math.round(mousePosition.x * 100)}, {Math.round(mousePosition.y * 100)}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ delay: 1.2, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 w-[85%] md:w-[90%] max-w-[500px] h-full"
            style={{
              x: mousePosition.x * 10,
              y: mousePosition.y * 10,
              rotateX: mousePosition.y * -1,
              rotateY: mousePosition.x * 1,
            }}
          >
            <div 
              ref={portraitRef}
              className="w-full h-full relative group transform-style-3d overflow-hidden border border-[#343942]/30 bg-[#101216]/50 backdrop-blur-sm"
            >
              {/* Actual image element */}
              <img 
                src="/src/assets/images/hero/suresh-portrait.png" 
                alt="V. Suresh Kumar"
                className="absolute inset-0 w-full h-full object-contain object-bottom transition-all duration-700 brightness-90 contrast-125 hover:brightness-100"
              />
              
              {/* Light sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#5797D5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#A8ADB5]">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-[#343942] relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#5797D5]"
          />
        </div>
      </motion.div>
    </section>
  )
}
