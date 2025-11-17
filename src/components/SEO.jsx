import { Helmet } from 'react-helmet'

export default function SEO() {
  return (
    <Helmet>
      <html lang="en" />
      <title>CyberCloud — Elite Cybersecurity, DevSecOps, and Labs</title>
      <meta name="description" content="CyberCloud delivers enterprise-grade cybersecurity, DevSecOps, and hands-on training. Minimalist matte-black design, expert tone." />
      <meta name="theme-color" content="#111111" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="CyberCloud — Elite Cybersecurity, DevSecOps, and Labs" />
      <meta property="og:description" content="Enterprise-grade cybersecurity, DevSecOps, and training." />
      <meta property="og:image" content="/og.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CyberCloud — Elite Cybersecurity, DevSecOps, and Labs" />
      <meta name="twitter:description" content="Enterprise-grade cybersecurity, DevSecOps, and training." />
      <meta name="twitter:image" content="/og.png" />

      {/* Schema.org: Organization */}
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

      {/* Schema.org: Course */}
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

      {/* Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
      `}</script>
      <script>{`
        _linkedin_partner_id = "000000";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `}</script>
      <script>{`
        (function(){var s = document.getElementsByTagName('script')[0];
        var b = document.createElement('script'); b.type = 'text/javascript'; b.async = true;
        b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'; s.parentNode.insertBefore(b, s);})();
      `}</script>
      <noscript>{`
        <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=000000&fmt=gif" />
      `}</noscript>
    </Helmet>
  )
}
