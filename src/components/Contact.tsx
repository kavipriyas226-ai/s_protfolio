import { useState } from 'react'
import { profileData } from '../data/profile'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '2D Floor Plan',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, use mailto as requested
    const subject = `Project Enquiry: ${formData.projectType}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0ADescription:%0D%0A${formData.description}`
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#343942]/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="font-mono text-[#5797D5] text-sm tracking-widest mb-4">07 / CONTACT</h2>
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance">Have a project in mind?</p>
          <p className="text-[#A8ADB5] text-lg mb-12 max-w-md">
            Let's discuss your requirements and explore how CAD drafting, 3D visualization or detailing can support your next project.
          </p>

          <div className="space-y-6 font-mono text-sm">
            <div>
              <p className="text-[#A8ADB5] mb-2">Email</p>
              <a href={`mailto:${profileData.contact.email}`} className="text-[#F5F6F7] hover:text-[#5797D5] transition-colors text-lg">
                {profileData.contact.email}
              </a>
            </div>
            <div>
              <p className="text-[#A8ADB5] mb-2">Phone</p>
              <a href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`} className="text-[#F5F6F7] hover:text-[#5797D5] transition-colors text-lg">
                {profileData.contact.phone}
              </a>
            </div>
            <div>
              <p className="text-[#A8ADB5] mb-2">LinkedIn</p>
              <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#F5F6F7] hover:text-[#5797D5] transition-colors text-lg">
                Suresh Kumar V
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#181B20] border border-[#343942] p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-mono text-sm text-[#A8ADB5] mb-2">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#343942] py-3 text-[#F5F6F7] focus:outline-none focus:border-[#5797D5] transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-mono text-sm text-[#A8ADB5] mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#343942] py-3 text-[#F5F6F7] focus:outline-none focus:border-[#5797D5] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block font-mono text-sm text-[#A8ADB5] mb-2">Project Type</label>
              <select 
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#343942] py-3 text-[#F5F6F7] focus:outline-none focus:border-[#5797D5] transition-colors appearance-none"
              >
                <option value="2D Floor Plan" className="bg-[#101216]">2D Floor Plan</option>
                <option value="3D Elevation" className="bg-[#101216]">3D Elevation</option>
                <option value="3D Interior Design" className="bg-[#101216]">3D Interior Design</option>
                <option value="3D Rebar Detailing" className="bg-[#101216]">3D Rebar Detailing</option>
                <option value="Revit Modelling" className="bg-[#101216]">Revit Modelling</option>
                <option value="Other" className="bg-[#101216]">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block font-mono text-sm text-[#A8ADB5] mb-2">Project Description</label>
              <textarea 
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#343942] py-3 text-[#F5F6F7] focus:outline-none focus:border-[#5797D5] transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-[#5797D5] text-white font-medium hover:bg-[#4680b5] transition-colors mt-8"
            >
              Send Project Enquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
