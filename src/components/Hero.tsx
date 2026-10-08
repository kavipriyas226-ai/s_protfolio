import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FloorPlanSVG, ElevationSVG, StructuralSVG, RebarSVG } from './CADBackgrounds'
import sureshPortrait from '../assets/images/hero/suresh-portrait-transparent.png'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLImageElement>(null)
  const bgLayersRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !portraitRef.current || !bgLayersRef.current) return
    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
        }
      })

      // Parallax portrait forward
      tl.to(portraitRef.current, {
        scale: isMobile ? 1 : 1.15,
        y: isMobile ? 0 : 50,
        ease: "none"
      }, 0)

      // Move background layers
      tl.to(bgLayersRef.current, {
        y: -100,
        opacity: 0.3,
        ease: "none"
      }, 0)
      
      // Typography upwards
      tl.to('.hero-text-content', {
        y: -150,
        opacity: 0,
        ease: "none"
      }, 0)

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[100dvh] md:h-screen w-full flex items-center overflow-hidden bg-[#0B0D10] pt-24 md:pt-0"
    >
      {/* --- CAD BACKGROUND LAYERS --- */}
      <div 
        ref={bgLayersRef}
        className="absolute inset-0 w-full h-full pointer-events-none perspective-[1000px] z-0"
      >
        {/* Layer 1: Background (Structural Top) */}
        <motion.div 
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] text-[#2a2e35] hidden md:block"
          style={{ x: mousePos.x * -10, y: mousePos.y * -10, translateZ: -200 }}
        >
          <StructuralSVG className="w-full h-full opacity-30" />
          <div className="absolute top-[15%] left-[45%] font-mono text-xs tracking-widest text-[#5797D5]/40">STRUCTURAL DETAIL</div>
        </motion.div>

        {/* Layer 2: Midground Left (Floor Plan) */}
        <motion.div 
          className="absolute top-[5%] -left-[10%] md:top-[10%] md:-left-[5%] w-[120%] md:w-[60%] h-[80%] text-[#3a3f47]"
          style={{ x: mousePos.x * -20, y: mousePos.y * -20, translateZ: -100 }}
        >
          <FloorPlanSVG className="w-full h-full opacity-40 md:opacity-60" />
          <div className="absolute top-[10%] left-[20%] font-mono text-[10px] tracking-widest text-[#A8ADB5]">
            <p>FLOOR PLAN</p>
            <p>PLAN VIEW</p>
            <p>A-01</p>
          </div>
          {/* Software Tag */}
          <div className="absolute bottom-[20%] right-[10%] bg-[#0B0D10]/80 border border-[#5797D5]/30 px-3 py-1 font-mono text-[10px] text-[#5797D5] backdrop-blur-sm">
            AUTOCAD / 2D
          </div>
        </motion.div>

        {/* Layer 3: Midground Right (3D Elevation) */}
        <motion.div 
          className="absolute top-[10%] -right-[10%] md:top-[5%] md:-right-[5%] w-[100%] md:w-[60%] h-[80%] text-[#4a515c] hidden md:block"
          style={{ x: mousePos.x * -30, y: mousePos.y * -30, translateZ: -50 }}
        >
          <ElevationSVG className="w-full h-full opacity-50" />
          <div className="absolute top-[15%] right-[20%] font-mono text-[10px] tracking-widest text-[#A8ADB5] text-right">
            <p>3D ELEVATION</p>
            <p>A-03</p>
          </div>
          {/* Software Tag */}
          <div className="absolute top-[40%] left-[10%] bg-[#0B0D10]/80 border border-[#5797D5]/30 px-3 py-1 font-mono text-[10px] text-[#5797D5] backdrop-blur-sm">
            SKETCHUP / 3D
          </div>
        </motion.div>

        {/* Layer 4: Lower Area (Rebar) */}
        <motion.div 
          className="absolute -bottom-[5%] right-[0%] md:-bottom-[10%] md:right-[10%] w-[100%] md:w-[50%] h-[60%] text-[#5797D5]"
          style={{ x: mousePos.x * -40, y: mousePos.y * -40, translateZ: 0 }}
        >
          <RebarSVG className="w-full h-full opacity-20 md:opacity-40" />
          <div className="absolute bottom-[25%] left-[20%] font-mono text-[10px] tracking-widest text-[#5797D5] opacity-70">
            <p>REBAR DETAILING</p>
          </div>
          {/* Software Tag */}
          <div className="absolute top-[30%] right-[20%] bg-[#0B0D10]/80 border border-[#5797D5]/30 px-3 py-1 font-mono text-[10px] text-[#F5F6F7] backdrop-blur-sm">
            TEKLA / REBAR
          </div>
        </motion.div>
      </div>

      {/* --- DIRECTIONAL CINEMATIC LIGHTING --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(87,151,213,0.08),_transparent_60%)] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent pointer-events-none z-10 md:hidden" />

      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Typography (Left) */}
        <div className="hero-text-content w-full md:w-[55%] flex flex-col justify-center pointer-events-auto pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4"
          >
            <span className="font-mono text-[#5797D5] text-[10px] tracking-[0.3em] uppercase bg-[#181B20]/80 px-2 py-1 rounded">V. SURESH KUMAR</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#A8ADB5] mb-2"
          >
            CAD DESIGNER
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] text-[#F5F6F7] mb-6 md:mb-8"
          >
            DESIGNING WITH<br />PRECISION.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="text-[#5797D5] font-medium text-xs sm:text-sm md:text-base tracking-wide mb-4"
          >
            2D Drafting • 3D Visualization • Structural Detailing
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="text-[#A8ADB5] text-sm md:text-base max-w-md mb-8 md:mb-10 leading-relaxed"
          >
            Creating precise technical drawings, architectural visualizations and detailed CAD models with professional design workflows.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'})}
              className="group relative text-[#F5F6F7] font-medium text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-2 overflow-hidden bg-[#343942]/30 px-4 py-2 hover:bg-[#343942]/50 transition-colors rounded"
            >
              <span className="relative z-10">VIEW MY WORK</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform group-hover:translate-x-1">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}
              className="group relative text-[#A8ADB5] hover:text-[#F5F6F7] font-medium text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-2 transition-colors px-4 py-2"
            >
              <span>LET'S CONNECT</span>
            </button>
          </motion.div>
        </div>

        {/* Suresh Portrait (Right) */}
        <div className="w-full md:w-[45%] h-[45vh] sm:h-[50vh] md:h-[90vh] relative flex items-end justify-center md:justify-end mt-8 md:mt-0 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            className="relative w-full max-w-[400px] md:max-w-[500px] h-full"
            style={{
              x: mousePos.x * -5,
              y: mousePos.y * -5,
            }}
          >
            <img 
              ref={portraitRef}
              src={sureshPortrait} 
              alt="V. Suresh Kumar"
              className="absolute bottom-0 w-full h-full object-contain object-bottom drop-shadow-[0_0_20px_rgba(87,151,213,0.15)]"
            />
            {/* Subtle blue rim light effect on the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#5797D5]/10 to-transparent pointer-events-none mix-blend-overlay" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 z-30 pointer-events-none"
      >
        <span className="font-mono text-[8px] md:text-[9px] tracking-[0.3em] text-[#A8ADB5]">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-8 md:h-12 bg-[#343942] relative overflow-hidden">
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
