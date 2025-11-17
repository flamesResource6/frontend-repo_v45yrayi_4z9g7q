import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout>
      <section className="bg-[#111] text-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#F5F5F5]/80">Last updated: 2024</p>

          <div className="mt-10 space-y-6 text-[15px] leading-7 text-[#F5F5F5]/85">
            <p>We respect your privacy. This policy explains what data we collect, why we collect it, and how we protect it.</p>

            <h2 className="text-lg font-medium text-[#F5F5F5] mt-8">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details you share with us (e.g., name, email, company).</li>
              <li>Usage analytics via GA4 and LinkedIn Insight to improve our website.</li>
              <li>Support communications and form submissions.</li>
            </ul>

            <h2 className="text-lg font-medium text-[#F5F5F5] mt-8">How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to inquiries and provide services.</li>
              <li>To improve content, security, and performance.</li>
              <li>To comply with legal and contractual obligations.</li>
            </ul>

            <h2 className="text-lg font-medium text-[#F5F5F5] mt-8">Data Protection</h2>
            <p>We apply appropriate technical and organizational controls aligned with NIST/ISO 27001 principles.</p>

            <h2 className="text-lg font-medium text-[#F5F5F5] mt-8">Your Rights</h2>
            <p>You may request access, correction, or deletion of your personal data subject to applicable law.</p>

            <h2 className="text-lg font-medium text-[#F5F5F5] mt-8">Contact</h2>
            <p>For privacy questions, contact: privacy@cybercloud.example.com</p>

            <div className="mt-10 p-4 border border-[#333] rounded">
              <p className="text-sm text-[#F5F5F5]/75">Cookies notice: We only use essential cookies and analytics. You can opt out of non-essential cookies.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
