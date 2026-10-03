import { servicesData } from '../data/services'

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#343942]/50">
      <div className="mb-16">
        <h2 className="font-mono text-[#5797D5] text-sm tracking-widest mb-4">04 / WHAT I CAN DO</h2>
        <p className="font-heading text-3xl md:text-5xl font-bold">From drawings to detailed visualizations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="border border-[#343942] bg-[#181B20] p-8 hover:border-[#5797D5] transition-colors group">
            <h3 className="font-heading text-2xl font-bold mb-4 text-[#F5F6F7] group-hover:text-[#5797D5] transition-colors">{service.title}</h3>
            <p className="text-[#A8ADB5] mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-[#A8ADB5] border border-[#343942] px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
