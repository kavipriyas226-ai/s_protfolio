import { profileData } from '../data/profile'
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#343942]/50 relative overflow-hidden">
      
      {/* Decorative technical background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,_rgba(87,151,213,0.05),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5797D5]/20 to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left side text */}
        <div>
          <h2 className="font-mono text-[#5797D5] text-sm tracking-widest mb-4">07 / CONTACT</h2>
          <p className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-[#F5F6F7]">Let's Connect.</p>
          <p className="text-[#A8ADB5] text-lg mb-12 max-w-md leading-relaxed">
            I am currently open to new opportunities and freelance projects. Whether you have a question or just want to say hi, my inbox is always open. Let's discuss how my CAD drafting and visualization skills can support your engineering or architectural goals.
          </p>
        </div>

        {/* Right side static links */}
        <div className="flex flex-col justify-center gap-6">
          
          <a 
            href={`mailto:john96slm@gmail.com`}
            className="group relative flex items-center justify-between p-8 bg-[#101216] border border-[#343942] hover:border-[#5797D5]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5797D5]/0 to-[#5797D5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center border border-[#343942] group-hover:border-[#5797D5]/50 text-[#A8ADB5] group-hover:text-[#5797D5] transition-colors duration-500">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-xs text-[#A8ADB5] mb-1 tracking-widest uppercase">Email Me</p>
                <p className="text-[#F5F6F7] text-lg font-medium">john96slm@gmail.com</p>
              </div>
            </div>
            <ArrowUpRight size={24} className="text-[#343942] group-hover:text-[#5797D5] transition-colors duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a 
            href={`tel:+918270681789`}
            className="group relative flex items-center justify-between p-8 bg-[#101216] border border-[#343942] hover:border-[#5797D5]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5797D5]/0 to-[#5797D5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center border border-[#343942] group-hover:border-[#5797D5]/50 text-[#A8ADB5] group-hover:text-[#5797D5] transition-colors duration-500">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-xs text-[#A8ADB5] mb-1 tracking-widest uppercase">Call Me</p>
                <p className="text-[#F5F6F7] text-lg font-medium">+91 8270681789</p>
              </div>
            </div>
            <ArrowUpRight size={24} className="text-[#343942] group-hover:text-[#5797D5] transition-colors duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a 
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-8 bg-[#101216] border border-[#343942] hover:border-[#5797D5]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5797D5]/0 to-[#5797D5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-12 h-12 flex items-center justify-center border border-[#343942] group-hover:border-[#5797D5]/50 text-[#A8ADB5] group-hover:text-[#5797D5] transition-colors duration-500">
                <Linkedin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-xs text-[#A8ADB5] mb-1 tracking-widest uppercase">LinkedIn</p>
                <p className="text-[#F5F6F7] text-lg font-medium">Suresh Kumar V</p>
              </div>
            </div>
            <ArrowUpRight size={24} className="text-[#343942] group-hover:text-[#5797D5] transition-colors duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>
      </div>
    </section>
  )
}
