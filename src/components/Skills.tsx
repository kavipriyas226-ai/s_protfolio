import { skillsData } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#343942]/50">
      <div className="mb-16">
        <h2 className="font-mono text-[#5797D5] text-sm tracking-widest mb-4">03 / TECHNICAL EXPERTISE</h2>
        <p className="font-heading text-3xl md:text-5xl font-bold">Tools behind the precision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-heading text-xl text-[#F5F6F7] mb-6 border-b border-[#343942] pb-4">Drafting</h3>
          <ul className="space-y-4">
            {skillsData.drafting.map(skill => (
              <li key={skill} className="font-mono text-[#A8ADB5] hover:text-[#5797D5] transition-colors cursor-default">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-xl text-[#F5F6F7] mb-6 border-b border-[#343942] pb-4">BIM & Architecture</h3>
          <ul className="space-y-4">
            {skillsData.bim.map(skill => (
              <li key={skill} className="font-mono text-[#A8ADB5] hover:text-[#5797D5] transition-colors cursor-default">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-xl text-[#F5F6F7] mb-6 border-b border-[#343942] pb-4">3D Visualization</h3>
          <ul className="space-y-4">
            {skillsData.visualization.map(skill => (
              <li key={skill} className="font-mono text-[#A8ADB5] hover:text-[#5797D5] transition-colors cursor-default">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-xl text-[#F5F6F7] mb-6 border-b border-[#343942] pb-4">Structural Analysis</h3>
          <ul className="space-y-4">
            {skillsData.structural.map(skill => (
              <li key={skill} className="font-mono text-[#A8ADB5] hover:text-[#5797D5] transition-colors cursor-default">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
