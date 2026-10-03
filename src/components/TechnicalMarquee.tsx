import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function TechnicalMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const techStack = [
    "AUTOCAD 2D / 3D",
    "REVIT ARCHITECTURE",
    "REVIT STRUCTURE",
    "SKETCHUP PRO",
    "ETABS",
    "TEKLA"
  ]

  useEffect(() => {
    if (!containerRef.current) return
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!isReducedMotion) {
      const container = containerRef.current
      const content = container.querySelector('.marquee-content')
      
      if (content) {
        gsap.to(content, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        })
      }
    }
  }, [])

  return (
    <div className="w-full overflow-hidden border-y border-[#343942] bg-[#181B20] py-6" ref={containerRef}>
      <div className="marquee-content flex whitespace-nowrap w-max">
        {/* We duplicate the content to make it seamless */}
        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
          <div key={i} className="flex items-center">
            <span className="font-mono text-xl md:text-2xl text-[#A8ADB5] px-8">{tech}</span>
            <span className="text-[#343942] text-2xl">/</span>
          </div>
        ))}
      </div>
    </div>
  )
}
