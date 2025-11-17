import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="bg-[#111] text-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">Fortify Your Future. Connect with Our Experts.</h1>
          <div className="mt-6 grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-sm text-[#F5F5F5]/85">Email: admin@cybecloud.com</p>
              <p className="text-sm text-[#F5F5F5]/85 mt-1">Location: Islamabad, Pakistan</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full bg-transparent border border-[#333] rounded px-3 py-2 placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Name" />
              <input type="email" className="w-full bg-transparent border border-[#333] rounded px-3 py-2 placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Email" />
              <textarea rows="5" className="w-full bg-transparent border border-[#333] rounded px-3 py-2 placeholder:text-[#F5F5F5]/40 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Message" />
              <button className="px-5 py-2 text-sm uppercase tracking-wider border border-[#333] rounded bg-transparent text-[#F5F5F5] hover:bg-white hover:text-black transition duration-200">Send</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
