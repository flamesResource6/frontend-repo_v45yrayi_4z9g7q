import Layout from '../components/Layout'

export default function Terms() {
  return (
    <Layout>
      <section className="bg-[#111] text-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">Terms of Service</h1>
          <p className="mt-4 text-sm text-[#F5F5F5]/80">Last updated: 2024</p>

          <div className="mt-10 space-y-6 text-sm text-[#F5F5F5]/85">
            <h2 className="text-lg font-medium text-[#F5F5F5]">Use of Site</h2>
            <p>By accessing this site, you agree to these Terms and all applicable laws.</p>

            <h2 className="text-lg font-medium text-[#F5F5F5]">Services</h2>
            <p>Proposals, statements of work, and service descriptions are provided for information and may change without notice.</p>

            <h2 className="text-lg font-medium text-[#F5F5F5]">Intellectual Property</h2>
            <p>All content is owned by CyberCloud or its licensors and is protected by copyright and trademark laws.</p>

            <h2 className="text-lg font-medium text-[#F5F5F5]">Liability</h2>
            <p>To the maximum extent permitted by law, CyberCloud disclaims all warranties and is not liable for indirect or consequential damages.</p>

            <h2 className="text-lg font-medium text-[#F5F5F5]">Governing Law</h2>
            <p>These Terms are governed by the laws of the applicable jurisdiction in which services are provided.</p>

            <h2 className="text-lg font-medium text-[#F5F5F5]">Contact</h2>
            <p>For questions regarding these Terms, contact: legal@cybercloud.example.com</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
