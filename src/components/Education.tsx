import { profileData } from '../data/profile'

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#343942]/50">
      <div className="mb-16">
        <h2 className="font-mono text-[#5797D5] text-sm tracking-widest mb-4">06 / EDUCATION</h2>
        <p className="font-heading text-3xl md:text-5xl font-bold">Engineering foundation.</p>
      </div>

      <div className="border border-[#343942] bg-[#181B20] p-8 md:p-12 max-w-3xl">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#F5F6F7] mb-4">Degree</h3>
        <p className="font-mono text-xl text-[#A8ADB5]">{profileData.education}</p>
      </div>
    </section>
  )
}
