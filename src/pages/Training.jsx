import Layout from '../components/Layout'

const programs = [
  {
    title: 'Enterprise DevSecOps Roadmap',
    duration: '6 months, 176 problem tickets',
    tech: 'Jenkins, Kubernetes, Terraform, Vault',
    focus: 'SAST/DAST, Chaos Engineering, GitOps',
    enterprise: 'Oracle DB Security, PCI/HIPAA compliance automation',
  },
  {
    title: '6-Month DevOps Mastery',
    duration: '6 months, 100 projects',
    tech: 'Terraform, Ansible, Kubernetes (EKS/GKE), Prometheus, Grafana',
    focus: '100 real-world ticket challenges and CKA/AWS DevOps Engineer prep',
  },
  {
    title: '6-Month Cyber Security Program',
    duration: '6 months, 6 tracks (31 modules)',
    tech: 'Caldera, Proxmark3, lock-picking sets',
    focus: '100+ hands-on exercises, FAIR risk, AI/PQC topics',
  },
  {
    title: '12-Month Security Awareness Program',
    duration: '12 months, ongoing',
    tech: 'Phishing simulations, live drills, executive briefings',
    focus: 'GDPR/HIPAA/POPIA aligned',
  },
]

export default function Training() {
  return (
    <Layout>
      <section className="bg-[#111] text-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">Master the Stack: 6-Month Roadmaps for Cyber Security and DevOps Career Transformation.</h1>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="border border-[#333] rounded p-6 hover:bg-white hover:text-black transition duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-current/80">{p.duration}</p>
                {p.tech && <p className="mt-2 text-sm text-current/80"><span className="text-current">Tools:</span> {p.tech}</p>}
                {p.enterprise && <p className="mt-2 text-sm text-current/80"><span className="text-current">Enterprise Focus:</span> {p.enterprise}</p>}
                <p className="mt-2 text-sm text-current/80">{p.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
