import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/training', label: 'Training' },
  { to: '/labs', label: 'Labs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-[#333] backdrop-blur bg-[#111]/80 text-[#F5F5F5]">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white/40">
          CYBERCLOUD
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition-all duration-200 hover:text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] px-3 py-1 rounded ${isActive ? 'text-white' : 'text-[#F5F5F5]/90'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[#333] rounded hover:bg-white hover:text-black transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <Menu size={18} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#333] bg-[#111]">
          <nav className="max-w-6xl mx-auto px-6 py-3 grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded border border-transparent hover:border-[#333] transition ${isActive ? 'text-white' : 'text-[#F5F5F5]/90'} hover:bg-white hover:text-black`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
