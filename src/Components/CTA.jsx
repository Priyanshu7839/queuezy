import React from "react";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        {/* Main Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
          Ready to Eliminate Long Queues?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg leading-relaxed text-slate-500 max-w-3xl mx-auto">
          Join hundreds of hospitals that have transformed their patient
          experience with QCare. See the difference in just 30 minutes.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary Button */}
          <button className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-2 font-medium text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3.5a1 1 0 01-1-1v-2a1 1 0 00-1-1H9.5a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" />
            </svg>
            Schedule a Free Demo Today
          </button>

          {/* Secondary Button */}
          <button className="inline-flex items-center gap-3 rounded-xl border-1 border-slate-900 bg-white px-8 py-2 font-medium text-slate-900 hover:bg-slate-50 transition-all">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.676 1.537 2.032 2.893 1.356 1.356 2.334 1.772 2.893 2.032l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V5a1 1 0 011-1h2z" />
            </svg>
            Contact Sales
          </button>
        </div>

        {/* Benefits */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Benefit 1 */}
          <div className="flex items-center gap-3">
            <svg
              className="h-6 w-6 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-slate-400 font-medium text-[12px]">
              30-day free trial
            </span>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center gap-3">
            <svg
              className="h-6 w-6 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-slate-400 font-medium text-[12px]">
              No setup fees
            </span>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center gap-3">
            <svg
              className="h-6 w-6 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-slate-400 font-medium text-[12px]">
              24/7 support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
