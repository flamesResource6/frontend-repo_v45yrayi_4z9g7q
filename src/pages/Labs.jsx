import Layout from '../components/Layout'

const labs = [
  {
    title: 'Attack & Defense Lab',
    bullets: [
      'Hybrid infra (Linux, Windows/AD)',
      'Blue team: Wazuh, Splunk, Velociraptor',
      'Red team: Metasploit, Empire, ADCS exploitation',
      'CTF flag modes and purple-team drills',
    ],
  },
  {
    title: '100 Problem-Based Projects',
    bullets: [
      'Real-world DevSecOps tickets',
      'Python, Go, Bash automation',
      'Portfolio-ready and skill-verified',
    ],
  },
  {
    title: 'Enterprise CTF Challenge Packs',
    bullets: [
      '20–100+ custom challenges (pwn, web, crypto, forensics)',
      'Compatible with CTFd / FBCTF',
      'Used for recruitment and skill benchmarking',
    ],
  },
]

export default function Labs() {
  return (
    <Layout>
      <section className="bg-[#111] text-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">The Sandbox Advantage: Test, Break, and Defend in True-to-Life Simulated Environments.</h1>
          <div className="mt-10 space-y-6">
            {labs.map((l) => (
              <div key={l.title} className="border border-[#333] rounded p-6">
                <h3 className="text-lg font-medium">{l.title}</h3>
                <ul className="mt-3 space-y-2 pl-5 list-disc text-sm text-[#F5F5F5]/85">
                  {l.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
