import React from "react";

export default function OurSolutions() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl mb-4">
            No More Double Booking Chaos
          </h2>
          <p className="text-md leading-relaxed text-slate-600 max-w-3xl mx-auto">
            QCare's centralized booking system ensures perfect coordination
            between patient self-bookings and staff bookings – eliminating
            conflicts and confusion.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Comparison Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* The Old Way - Chaos */}
            <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-red-50 p-8 border border-rose-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 text-red-600 font-bold text-xl">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-red-600">
                  The Old Way (Chaos)
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2"></span>
                  <span className="text-sm">
                    Patient books online for 2:00 PM
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2"></span>
                  <span className="text-sm">
                    Staff books another patient for same slot
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2"></span>
                  <span className="text-sm">
                    Both patients show up → confusion & anger
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2"></span>
                  <span className="text-sm">
                    Wrong wait times shown to everyone
                  </span>
                </li>
              </ul>
            </div>

            {/* QCare Way - Perfect Sync */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 text-emerald-600 font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-600">
                  QCare Way (Perfect Sync)
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-600 mt-2"></span>
                  <span className="text-sm">
                    Patient books online → gets token #15
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-600 mt-2"></span>
                  <span className="text-sm">
                    Staff books at reception → auto gets #16
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-600 mt-2"></span>
                  <span className="text-sm">
                    Real-time sync prevents any conflicts
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-600 mt-2"></span>
                  <span className="text-sm">
                    Accurate wait times for everyone
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Flow Diagram & Benefits */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-blue-200 shadow-lg">
            <div className="space-y-8">
              {/* Live Queue Sync Label */}
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                Live Queue Sync
              </div>

              {/* Flow Diagram */}
              <div className="space-y-6">
                {/* Online Booking */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Online Booking
                      </h4>
                    </div>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Token #15
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      transform="rotate(90 12 12)"
                    />
                  </svg>
                </div>

                {/* Centralized Queue */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Centralized Queue
                  </h4>
                  <p className="text-sm text-slate-600">
                    Real-time synchronization
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      transform="rotate(90 12 12)"
                    />
                  </svg>
                </div>

                {/* Reception Booking */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Reception Booking
                      </h4>
                    </div>
                    <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      Token #16
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="border-t border-blue-200 pt-8">
                <h4 className="text-lg font-bold text-slate-900 mb-6">
                  Key Benefits
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-200 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Zero Conflicts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-200 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-orange-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Accurate Times
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-200 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        No Patient Left
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-200 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v4a1 1 0 001 1h12a1 1 0 001-1V6a2 2 0 00-2-2H4zm12 6H2v4a2 2 0 002 2h8a2 2 0 002-2v-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Perfect Sync
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
