import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Simple intersection observer logic for active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#343942]/50 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex flex-col relative z-20">
            <span className="font-heading font-bold text-lg tracking-widest text-[#F5F6F7]">SURESH KUMAR</span>
            <span className="font-mono text-[10px] text-[#A8ADB5] tracking-[0.2em]">CAD DESIGNER</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase()
              return (
                <button 
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-[11px] font-mono tracking-widest transition-colors relative py-2 ${
                    isActive ? 'text-[#5797D5]' : 'text-[#A8ADB5] hover:text-[#F5F6F7]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#5797D5]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
            <button 
              onClick={() => scrollTo('#contact')}
              className="ml-4 px-6 py-2.5 bg-transparent border border-[#343942] text-[11px] font-mono tracking-widest text-[#F5F6F7] hover:bg-[#5797D5]/10 hover:border-[#5797D5] hover:text-[#5797D5] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">LET'S DISCUSS</span>
              <div className="absolute inset-0 bg-[#5797D5]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </nav>

          <button 
            className="md:hidden text-[#F5F6F7] relative z-[70]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#0a0a0c] p-6 flex flex-col pt-32"
          >
            <nav className="flex flex-col gap-8 text-4xl font-heading mb-auto px-4">
              {navLinks.map((link, i) => (
                <motion.button 
                  key={link.name} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[#F5F6F7] hover:text-[#5797D5] transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="text-sm font-mono text-[#343942] opacity-0 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </nav>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onClick={() => scrollTo('#contact')}
              className="w-full py-6 bg-[#5797D5] text-white font-mono tracking-widest text-sm mt-8 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                LET'S DISCUSS
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
