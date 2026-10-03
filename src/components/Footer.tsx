import { profileData } from '../data/profile'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#343942] py-12 px-6 md:px-12 bg-[#101216]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col text-center md:text-left">
          <span className="font-heading font-bold text-lg tracking-wider text-[#F5F6F7]">SURESH KUMAR</span>
          <span className="font-mono text-xs text-[#A8ADB5]">CAD DESIGNER</span>
        </div>

        <div className="text-[#A8ADB5] font-mono text-sm text-center">
          Designed with precision.
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 font-mono text-sm">
            <a href={`mailto:${profileData.contact.email}`} className="text-[#A8ADB5] hover:text-[#5797D5] transition-colors">Email</a>
            <a href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`} className="text-[#A8ADB5] hover:text-[#5797D5] transition-colors">Phone</a>
            <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A8ADB5] hover:text-[#5797D5] transition-colors">LinkedIn</a>
          </div>
          <span className="text-[#A8ADB5] text-xs">© 2026 {profileData.name}</span>
        </div>

      </div>

      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#181B20] border border-[#343942] flex items-center justify-center text-[#A8ADB5] hover:text-[#5797D5] hover:border-[#5797D5] transition-all z-50 rounded-full"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
