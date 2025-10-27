import React from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#eef3ff] via-white to-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(60%_60%_at_30%_30%,#000,transparent)]">
        <div className="absolute -left-20 top-16 h-48 w-48 rounded-full bg-[#3B82FF]/20 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-[#2667FF]/20 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 px-4 py-16 text-center sm:px-6 lg:flex-row lg:items-center lg:gap-24 lg:py-16 lg:text-left">
        <div className="w-full max-w-2xl space-y-10">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-1.5 text-sm font-semibold text-[#2667FF] shadow-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2667FF] shadow">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.5 2.25a.75.75 0 0 1 1 0l1.74 1.628 2.35.4a.75.75 0 0 1 .402 1.279L13.59 7.96l.37 2.445a.75.75 0 0 1-1.088.774L10 9.98l-2.872 1.199a.75.75 0 0 1-1.088-.774L6.41 7.96 4.008 5.557a.75.75 0 0 1 .402-1.279l2.35-.4L8.5 2.25z" />
                </svg>
              </span>
              Queue Intelligence Platform
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Transform Waiting Into
                <span className="block bg-gradient-to-r from-[#2667FF] via-[#477BFF] to-[#3B82FF] bg-clip-text text-transparent">
                  Satisfaction
                </span>
                for Modern Hospitals
              </h1>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Digitize OPD, pharmacy, billing, and lab queues with QCare&apos;s cloud token management platform. Deliver calmer lobbies, happier patients, and responsive teams in every department.
              </p>
            </div>

            <div className="flex w-full items-center justify-between rounded-3xl border border-slate-200/70 bg-white/70 px-5 py-4 text-left shadow-lg shadow-blue-100/70 backdrop-blur sm:hidden">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.38em] text-slate-400">Today</p>
                <p className="text-lg font-semibold text-slate-900">Queues clearing 2× faster</p>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2667FF] to-[#3B82FF] text-white shadow">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12l4 4L19 6" />
                  <path d="M12 5a7 7 0 1 1-7 7" />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2667FF] to-[#3B82FF] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2667FF]/70 sm:w-auto"
              href="#book-demo"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.25 2.5A1.75 1.75 0 0 0 4.5 4.25v11.5A1.75 1.75 0 0 0 6.25 17.5h7.5a1.75 1.75 0 0 0 1.75-1.75V4.25A1.75 1.75 0 0 0 13.75 2.5h-7.5zM7 4h6v1H7V4zm0 3h6v1H7V7zm0 3h6v1H7v-1z" />
                </svg>
              </span>
              Book a Free Demo
            </a>
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 sm:w-auto"
              href="#how-it-works"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300">
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.25 2.37A.75.75 0 0 1 4.38 2l4.5 2.88a.75.75 0 0 1 0 1.24l-4.5 2.88A.75.75 0 0 1 3.25 8.63V2.37z" />
                </svg>
              </span>
              See How It Works
            </a>
          </div>

          <ul className="grid gap-3 text-sm text-slate-500 sm:flex sm:items-center sm:justify-start sm:gap-8 lg:gap-10">
            <li className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 shadow-sm sm:rounded-none sm:border-none sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <span className="text-xs font-bold">30</span>
              </span>
              30-day free trial
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 shadow-sm sm:rounded-none sm:border-none sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[#2667FF]">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M8 1.75a.75.75 0 0 1 .53.22l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5A.75.75 0 0 1 8 1.75z" />
                </svg>
              </span>
              HIPAA compliant
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 shadow-sm sm:rounded-none sm:border-none sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M3 8h10M8 3v10" strokeLinecap="round" />
                </svg>
              </span>
              Setup in 24 hours
            </li>
          </ul>
        </div>

        <div className="relative w-full max-w-lg">
          <div className="pointer-events-none absolute inset-x-0 -top-10 h-28 bg-gradient-to-b from-[#2667FF]/12 via-transparent to-transparent sm:hidden" />
          <div className="relative overflow-hidden rounded-[36px] bg-white shadow-2xl shadow-blue-100/60 ring-1 ring-slate-100">
            <img
              src={HERO_IMAGE}
              alt="Clinician holding a smartphone"
              className="h-full w-full rounded-[36px] object-cover"
              loading="lazy"
            />

            <div className="absolute top-5 right-5 flex flex-col gap-1 rounded-2xl bg-gradient-to-r from-[#2667FF] to-[#3B82FF] px-6 py-4 text-white shadow-xl sm:top-6 sm:right-8">
              <span className="text-2xl font-bold">87%</span>
              <span className="text-xs font-medium uppercase tracking-wide text-white/80">
                Patient satisfaction
              </span>
            </div>

            <div className="absolute bottom-5 left-4 flex w-[90%] items-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-xl ring-1 ring-slate-100 sm:bottom-6 sm:left-6 sm:w-[85%]">
              <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              Live Queue:{" "}
              <span className="font-semibold text-slate-900">12 patients</span>
              <span className="text-slate-400">•</span>
              Avg. wait:{" "}
              <span className="font-semibold text-slate-900">8 mins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;