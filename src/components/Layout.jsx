import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#111] text-[#F5F5F5]">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded focus:shadow">Skip to content</a>
      <SEO />
      <Navbar />
      <main id="main-content" role="main">{children}</main>
      <Footer />
    </div>
  )
}
