import { Helmet } from 'react-helmet'

export default function SEO() {
  return (
    <Helmet>
      <title>CyberCloud — Elite Cybersecurity, DevSecOps, and Labs</title>
      <meta name="description" content="CyberCloud delivers enterprise-grade cybersecurity, DevSecOps, and hands-on training. Minimalist matte-black design, expert tone." />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CyberCloud",
          "url": "https://cybercloud.example.com",
          "logo": "https://cybercloud.example.com/logo.svg",
          "sameAs": [
            "https://www.linkedin.com/company/cybercloud",
            "https://twitter.com/cybercloud",
            "https://youtube.com/@cybercloud"
          ]
        }
      `}</script>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Enterprise DevSecOps Roadmap",
          "description": "Six-month enterprise DevSecOps program covering Jenkins, Kubernetes, Terraform, Vault.",
          "provider": {
            "@type": "Organization",
            "name": "CyberCloud"
          }
        }
      `}</script>
    </Helmet>
  )
}
