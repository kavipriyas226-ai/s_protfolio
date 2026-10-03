import { experienceData } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#343942]/50">
      <div className="mb-16">
        <h2 className="font-mono text-[#5797D5] text-sm tracking-widest mb-4">05 / EXPERIENCE</h2>
        <p className="font-heading text-3xl md:text-5xl font-bold">Professional experience.</p>
      </div>

      <div className="space-y-12 max-w-3xl">
        {experienceData.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-[#343942] pb-12 last:border-0 last:pb-0">
            <div className="md:w-1/3">
              <p className="font-mono text-[#5797D5] mb-2">{exp.experience}</p>
              <h3 className="font-heading text-xl font-bold text-[#F5F6F7]">{exp.company}</h3>
            </div>
            <div className="md:w-2/3">
              <h4 className="font-heading text-2xl font-bold mb-4">{exp.role}</h4>
              <p className="text-[#A8ADB5] leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
