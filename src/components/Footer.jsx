import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#F5F5F5] border-t border-[#333]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-6 items-center">
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link className="hover:bg-white hover:text-black px-2 py-1 rounded transition" to="/services">Services</Link>
          <Link className="hover:bg-white hover:text-black px-2 py-1 rounded transition" to="/training">Training</Link>
          <Link className="hover:bg-white hover:text-black px-2 py-1 rounded transition" to="/about">About</Link>
          <Link className="hover:bg-white hover:text-black px-2 py-1 rounded transition" to="/contact">Contact</Link>
          <Link className="hover:bg-white hover:text-black px-2 py-1 rounded transition" to="/privacy">Privacy Policy</Link>
          <Link className="hover:bg-white hover:text-black px-2 py-1 rounded transition" to="/terms">Terms of Service</Link>
        </nav>
        <p className="text-sm text-[#F5F5F5]/70 md:text-right">© 2024 CyberCloud. All rights reserved.</p>
      </div>
    </footer>
  )
}
