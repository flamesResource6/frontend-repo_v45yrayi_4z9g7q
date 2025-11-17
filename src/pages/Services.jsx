import Layout from '../components/Layout'

const items = [
  {
    title: 'DevSecOps & Cloud Engineering',
    bullets: [
      'IaC Security (Terraform/Bicep scanning)',
      'Pipeline Hardening, Zero-Trust (Istio, Vault, OPA)',
      'AIOps: Predictive Scaling, AI-based anomaly detection',
      'FinOps: Automated cost reports via Grafana',
    ],
  },
  {
    title: 'Red Team & Adversary Emulation',
    bullets: [
      "MITRE ATT&CK mapping",
      'ADCS exploitation, lateral movement, physical security',
      'AI agent security: prompt injection defense, model integrity testing',
    ],
  },
  {
    title: 'Security Operations (SOC / DFIR)',
    bullets: [
      '24/7 log correlation (Splunk, ELK, Wazuh)',
      'DFIR with Velociraptor, malware forensics',
      'SOAR automation via n8n',
    ],
  },
  {
    title: 'Specialized Testing',
    bullets: [
      'Blockchain (Solidity audits), API (GraphQL/REST)',
      'Cloud pentesting (IAM, serverless misconfigurations)',
      'Quantum Readiness briefings for PQC migration',
    ],
  },
]

export default function Services() {
  return (
    <Layout>
      <section className="bg-[#111] text-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">Cutting-Edge Security & Cloud Solutions. From Architecture Hardening to AI-Driven Response.</h1>
          <div className="mt-10 divide-y divide-[#333] border-y border-[#333]">
            {items.map((item) => (
              <details key={item.title} className="group">
                <summary className="cursor-pointer list-none py-5 flex items-center justify-between">
                  <span className="text-lg">{item.title}</span>
                  <span className="text-[#F5F5F5]/60 group-open:rotate-45 transition">+</span>
                </summary>
                <ul className="pb-6 pl-5 space-y-2 text-sm text-[#F5F5F5]/85">
                  {item.bullets.map((b) => (
                    <li key={b} className="marker:text-[#F5F5F5] list-disc">{b}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
