import { projectsData } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="font-mono text-[#5797D5] text-sm tracking-widest mb-4">02 / SELECTED WORK</h2>
        <p className="font-heading text-3xl md:text-5xl font-bold mb-6">SELECTED CAD WORK</p>
        <p className="text-[#A8ADB5] text-lg">A selection of drafting, visualization and detailing disciplines.</p>
      </div>

      <div className="space-y-32">
        {projectsData.map((project, index) => (
          <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}>
            
            <div className="w-full lg:w-3/5 overflow-hidden border border-[#343942] bg-[#101216] relative aspect-[16/9] flex items-center justify-center cursor-none group/img">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover relative z-10 transition-transform duration-1000 ease-out group-hover/img:scale-105"
              />
              
              {/* Minimal Technical Hover Overlay */}
              <div className="absolute inset-0 z-20 bg-gradient-to-tr from-[#101216]/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 z-20 border-[0.5px] border-[#5797D5]/30 opacity-0 group-hover/img:opacity-100 scale-95 group-hover/img:scale-100 transition-all duration-700 ease-out pointer-events-none m-4" />
              
              {/* Corner Coordinate Markers */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[#5797D5]/60 z-30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[#5797D5]/60 z-30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute bottom-6 right-8 z-20 font-mono text-[9px] text-[#5797D5] opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 tracking-[0.2em] pointer-events-none">
                VIEW: {project.id}
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 transition-colors">{project.title}</h3>
              <p className="text-[#A8ADB5] mb-8 text-lg leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {project.software.map(sw => (
                  <span key={sw} className="px-3 py-1 border border-[#343942] text-[#F5F6F7] text-xs font-mono">
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
