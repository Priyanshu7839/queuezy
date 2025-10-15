import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-slate-100"
          href="#top"
          onClick={closeMenu}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2667FF] to-[#3B82FF]">
            <svg
              className="h-6 w-6"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
            >
              <rect width="40" height="40" rx="12" fill="none" />
              <g
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M13 20h14" />
                <path d="M20 13v14" />
                <rect
                  x="12"
                  y="12"
                  width="16"
                  height="16"
                  rx="6"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
          <span className="text-xl font-semibold text-slate-900">QCare</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className="transition hover:text-slate-900"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white"
            href="#how-it-works"
          >
            See How It Works
          </a>
          <a
            className="rounded-full bg-gradient-to-r from-[#2667FF] to-[#3B82FF] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
            href="#book-demo"
          >
            Book a Free Demo
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:border-slate-300 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="relative h-4 w-4">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-slate-900 transition-transform ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-slate-900 transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-slate-900 transition-transform ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] border-b border-slate-100"
            : "grid-rows-[0fr] border-b border-transparent"
        } grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out`}
      >
        <div className="space-y-6 bg-white px-4 pb-6 pt-2 shadow-inner sm:px-6">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className="rounded-lg px-2 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              className="rounded-full border border-slate-200 px-5 py-2 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white"
              href="#how-it-works"
              onClick={closeMenu}
            >
              See How It Works
            </a>
            <a
              className="rounded-full bg-gradient-to-r from-[#2667FF] to-[#3B82FF] px-5 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
              href="#book-demo"
              onClick={closeMenu}
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
