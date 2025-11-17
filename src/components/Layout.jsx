import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#111] text-[#F5F5F5]">
      <SEO />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
