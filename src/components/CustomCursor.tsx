import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    // Only run on desktop/non-touch
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = target.closest('a, button, [role="button"]')
      const isProjectImg = target.closest('[data-cursor="project-img"]')
      const isProjectLink = target.closest('[data-cursor="project-link"]')

      if (isProjectImg) {
        setIsHovering(true)
        setCursorText('EXPLORE')
      } else if (isProjectLink) {
        setIsHovering(true)
        setCursorText('VIEW')
      } else if (isClickable) {
        setIsHovering(true)
        setCursorText('')
      } else {
        setIsHovering(false)
        setCursorText('')
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none flex items-center justify-center mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 32 : 8),
        y: mousePosition.y - (isHovering ? 32 : 8),
        width: isHovering ? 64 : 16,
        height: isHovering ? 64 : 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div 
        className={`bg-white rounded-full flex items-center justify-center transition-all duration-300 w-full h-full ${
          isHovering ? 'opacity-100' : 'opacity-100'
        }`}
      >
        {cursorText && (
          <span className="text-black text-[10px] font-mono tracking-widest absolute">
            {cursorText}
          </span>
        )}
      </div>
    </motion.div>
  )
}
