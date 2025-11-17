import { useState } from 'react'
import Layout from '../components/Layout'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name')?.toString() || '',
      email: form.get('email')?.toString() || '',
      message: form.get('message')?.toString() || '',
      company: form.get('company')?.toString() || undefined,
    }
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail ? JSON.stringify(data.detail) : 'Submit failed')
      setStatus({ type: 'success', message: 'Message sent successfully.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'We received your message. Our team will respond shortly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <section className="bg-[#111] text-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">Fortify Your Future. Connect with Our Experts.</h1>
          <div className="mt-6 grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-sm text-[#F5F5F5]/85">Email: contact@cybercloud.example.com</p>
              <p className="text-sm text-[#F5F5F5]/85 mt-1">Location: Islamabad, Pakistan</p>
            </div>
            <form className="space-y-4" onSubmit={onSubmit} aria-label="Contact form">
              <label className="block">
                <span className="sr-only">Name</span>
                <input name="name" required className="w-full bg-transparent border border-[#333] rounded px-3 py-2 placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Name" />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input name="email" type="email" required className="w-full bg-transparent border border-[#333] rounded px-3 py-2 placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Email" />
              </label>
              <label className="block">
                <span className="sr-only">Company</span>
                <input name="company" className="w-full bg-transparent border border-[#333] rounded px-3 py-2 placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Company (optional)" />
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea name="message" rows="5" required className="w-full bg-transparent border border-[#333] rounded px-3 py-2 placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Message" />
              </label>
              <button disabled={loading} className="px-5 py-2 text-sm uppercase tracking-wider border border-[#333] rounded bg-transparent text-[#F5F5F5] hover:bg-white hover:text-black transition duration-200 disabled:opacity-60" aria-busy={loading}>
                {loading ? 'Sending…' : 'Send'}
              </button>
              {status && (
                <p role="status" className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-[#F5F5F5]/80'}`}>{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
