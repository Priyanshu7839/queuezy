import React from "react";

import { NAV_ITEMS } from "../constants/navigation";
import { FOOTER_SECTIONS } from "../constants/footerNavigation";

const Footer = () => {
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

            {/* Header links replicated */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Columns - Link Sections */}
          <div className="md:col-span-9 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-white text-base mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
