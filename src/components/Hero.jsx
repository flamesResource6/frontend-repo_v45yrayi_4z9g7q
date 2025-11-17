import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#0b0b0b]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 text-center text-[#F5F5F5]">
        <h1 className="text-3xl sm:text-5xl md:text-6xl tracking-tight font-semibold">FORTIFY. DEPLOY. DOMINATE.</h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#F5F5F5]/80 max-w-3xl mx-auto">
          Elite Cybersecurity, Enterprise DevSecOps, and Hands-on Cloud Training delivered by industry experts.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/labs" className="px-5 py-3 text-sm uppercase tracking-wider border border-[#333] rounded bg-transparent text-[#F5F5F5] hover:bg-white hover:text-black transition duration-200 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]">
            Launch Attack & Defense Lab (Trial)
          </Link>
        </div>
        <div className="mt-10 text-xs sm:text-sm text-[#F5F5F5]/70 space-y-1">
          <p>Built on MITRE ATT&CK (Offense) and NIST/ISO 27001 (Defense).</p>
          <p>Led by Usama Sarwar, CEO.</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111]" />
    </section>
  )
}
