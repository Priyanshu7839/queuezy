import React from "react";

const Footer = () => {
  const productLinks = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "API Documentation", href: "#" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Implementation Guide", href: "#" },
    { name: "Training Resources", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-100">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Left Column - Logo & Description */}
          <div className="md:col-span-3">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 rounded-lg p-2.5 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">QCare</span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Making healthcare visits smoother and smarter for hospitals and
              patients worldwide.
            </p>

            {/* Compliance Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>HIPAA Compliant • SOC 2 Certified</span>
            </div>
          </div>

          {/* Right Columns - Link Sections */}
          <div className="md:col-span-9 grid grid-cols-3 gap-12">
            {/* Product Column */}
            <div>
              <h3 className="font-bold text-white text-base mb-6">Product</h3>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-bold text-white text-base mb-6">Support</h3>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-bold text-white text-base mb-6">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Section - Copyright */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            © 2025 QCare. All rights reserved. Transforming healthcare
            operations worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
