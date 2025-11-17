import { Shield, GraduationCap, FlaskConical } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Enterprise Services',
    desc: 'Architecture hardening, DevSecOps, and AI-driven response for regulated environments.'
  },
  {
    icon: GraduationCap,
    title: 'Transformative Training',
    desc: 'Enterprise-ready roadmaps with real ticket work, certifications, and compliance.'
  },
  {
    icon: FlaskConical,
    title: 'Hands-on Labs',
    desc: 'Attack/Defense sandboxes with CTF modes and purple-team drills.'
  },
]

export default function Pillars() {
  return (
    <section className="bg-[#111] text-[#F5F5F5] border-t border-[#333]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group border border-[#333] rounded p-6 hover:bg-white hover:text-black transition duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <Icon className="text-white mb-4" size={24} />
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-current/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
