import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#111] text-[#F5F5F5]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
