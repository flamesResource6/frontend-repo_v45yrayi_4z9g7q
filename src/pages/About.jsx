import Layout from '../components/Layout'

const team = [
  { name: 'Usama Sarwar', role: 'CEO – CI/CD, Cloud Infra' },
  { name: 'Mohib Ahmad', role: 'COO – Threat Intel, Pen-Testing' },
  { name: 'Faizan ur Rehman Khokhar', role: 'CTO – DevOps, DevSecOps' },
]

export default function About() {
  return (
    <Layout>
      <section className="bg-[#111] text-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">Our Leadership: Passionate Experts Driving Security Innovation.</h1>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group border border-[#333] rounded p-6 text-center hover:bg-white hover:text-black transition duration-200">
                <div className="mx-auto w-24 h-24 rounded-full bg-[#0f0f0f] border border-[#333] mb-4 group-hover:bg-black" />
                <h3 className="text-lg font-medium">{m.name}</h3>
                <p className="mt-1 text-sm text-current/80">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
