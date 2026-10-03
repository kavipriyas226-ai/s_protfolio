import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { profileData } from '../data/profile'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!headingRef.current) return
    const text = headingRef.current
    
    gsap.fromTo(text, 
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", y: 50 },
      { 
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
        }
      }
    )
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#343942]/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#5797D5]/50 to-transparent" />
      
      <div className="mb-24 text-center mt-12">
        <h2 ref={headingRef} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F6F7] tracking-tight">
          PRECISION MEETS CREATIVITY.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-lg text-[#A8ADB5] leading-relaxed"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#343942]" />
            <h3 className="font-mono text-[#5797D5] text-sm tracking-widest uppercase">01 / Introduction</h3>
          </div>
          <p>
            I'm {profileData.name}, a CAD Designer with a background in Mechanical Engineering and one year of professional experience at {profileData.company}. My work includes 2D drafting, 3D architectural visualization and structural detailing.
          </p>
          <p>
            I enjoy turning design concepts into clear technical drawings and detailed visual representations. My work spans floor plans, building elevations, interior designs and rebar detailing.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border border-[#343942]/50 p-8 md:p-12 bg-[#0a0a0c] relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5797D5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="font-heading text-xl text-[#F5F6F7] mb-8 border-b border-[#343942]/50 pb-4">Professional Overview</h3>
          <ul className="space-y-6 font-mono text-sm">
            <li className="flex flex-col md:flex-row md:justify-between border-b border-[#343942]/30 pb-3">
              <span className="text-[#A8ADB5]">Name</span>
              <span className="text-[#F5F6F7]">{profileData.name}</span>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between border-b border-[#343942]/30 pb-3">
              <span className="text-[#A8ADB5]">Role</span>
              <span className="text-[#F5F6F7]">{profileData.role}</span>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between border-b border-[#343942]/30 pb-3">
              <span className="text-[#A8ADB5]">Experience</span>
              <span className="text-[#F5F6F7]">{profileData.experience}</span>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between border-b border-[#343942]/30 pb-3">
              <span className="text-[#A8ADB5]">Education</span>
              <span className="text-[#F5F6F7]">{profileData.education}</span>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between pt-3">
              <span className="text-[#A8ADB5]">Company</span>
              <span className="text-[#F5F6F7]">{profileData.company}</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
