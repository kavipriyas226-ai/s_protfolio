import { projectsData } from '../data/projects'
import { ArrowUpRight } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="font-mono text-[#5797D5] text-sm tracking-widest mb-4">02 / SELECTED WORK</h2>
        <p className="font-heading text-3xl md:text-5xl font-bold mb-6">Work that takes shape.</p>
        <p className="text-[#A8ADB5] text-lg">A selection of drafting, visualization and detailing disciplines.</p>
      </div>

      <div className="space-y-32">
        {projectsData.map((project, index) => (
          <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}>
            
            <div className="w-full lg:w-3/5 overflow-hidden border border-[#343942] bg-[#181B20] relative aspect-[4/3] flex items-center justify-center cursor-none" data-cursor="project-img">
              <span className="absolute z-0 font-mono text-[#A8ADB5] text-sm tracking-widest">{project.imagePlaceholder}</span>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <p className="font-mono text-[#5797D5] text-sm mb-4 tracking-widest">{project.category}</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#5797D5] transition-colors">{project.title}</h3>
              <p className="text-[#A8ADB5] mb-8 text-lg leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {project.software.map(sw => (
                  <span key={sw} className="px-3 py-1 border border-[#343942] text-[#F5F6F7] text-xs font-mono">
                    {sw}
                  </span>
                ))}
              </div>

              <a 
                href="#" 
                data-cursor="project-link"
                className="inline-flex items-center gap-2 text-[#F5F6F7] font-medium border-b border-[#343942] pb-1 w-max hover:border-[#5797D5] hover:text-[#5797D5] transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                View Project <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
