import React from "react";

const PROBLEM_ITEMS = [
  {
    title: "Patients frustrated by hours of waiting",
    description:
      "Long queues create anxiety and reduce patient satisfaction scores.",
  },
  {
    title: "Doctors overwhelmed by no-shows and walk-ins",
    description:
      "Unpredictable schedules lead to inefficient resource allocation.",
  },
  {
    title: "Front desk staff under constant pressure",
    description: "Manual management leads to errors and staff burnout.",
  },
  {
    title: "Zero data for management to optimize operations",
    description:
      "No insights into peak hours, wait times, or patient flow patterns.",
  },
  {
    title: "Double booking chaos and missed appointments",
    description:
      "Staff bookings conflict with patient self-bookings, causing delays.",
  },
];

const IMPACT_ITEMS = [
  {
    title: "Unhappy patients",
    description: "Leading to negative reviews",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M4 12.5c1.4-1.2 3.1-2 5-2s3.6.8 5 2M7.5 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.5 5.5 13 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Wasted doctor time",
    description: "Inefficient scheduling",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M10 5.5v4.3l2.5 1.5M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Lost revenue",
    description: "From operational inefficiencies",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M10 3.5v13M12.5 5.5c-.6-.7-1.6-1-2.5-1-1.4 0-2.5.9-2.5 2 0 2.5 5 1 5 3.5 0 1.1-1.1 2-2.5 2-1 0-1.9-.4-2.5-1M16.5 10A6.5 6.5 0 1 1 3.5 10a6.5 6.5 0 0 1 13 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const QcareNeed = () => {
  return (
    <section
      id="why-qcare"
      className="relative overflow-hidden bg-white py-20 text-slate-900"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Hospitals Need QCare
          </h2>
          <p className="mt-4 text-[19px] leading-relaxed text-slate-800">
            The traditional queue system is broken. Here&apos;s the reality most
            hospitals face every day.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffe2e0] text-[#e43b39] shadow-sm">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 2.25a.75.75 0 0 1 .66.39l7 12.25a.75.75 0 0 1-.65 1.13H3a.75.75 0 0 1-.65-1.13l7-12.25A.75.75 0 0 1 10 2.25Zm0 4.5a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 10 6.75Zm0 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-[#e43b39]">
                The Problem:
              </h3>
            </div>

            <div className="space-y-6">
              {PROBLEM_ITEMS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#ffeceb] text-[#e43b39]">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 1.25a.75.75 0 0 1 .66.39l6 10.5a.75.75 0 0 1-.66 1.12H2a.75.75 0 0 1-.66-1.12l6-10.5A.75.75 0 0 1 8 1.25Zm0 3.75a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 8 5Zm0 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    </svg>
                  </span>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-base leading-relaxed text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#ffd7d4] bg-[#fff4f3] p-8 shadow-[0_20px_45px_-28px_rgba(229,62,54,0.55)]">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffe2e0] text-[#e43b39] shadow-sm">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 2.25a.75.75 0 0 1 .66.39l7 12.25a.75.75 0 0 1-.65 1.13H3a.75.75 0 0 1-.65-1.13l7-12.25A.75.75 0 0 1 10 2.25Zm0 4.5a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 10 6.75Zm0 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-[#e43b39]">
                The Impact:
              </h3>
            </div>

            <ul className="mt-6 space-y-5 text-sm">
              {IMPACT_ITEMS.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-2xl bg-white/80 text-[#e43b39] shadow-sm ring-1 ring-[#ffd7d4]">
                    {item.icon}
                  </span>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-base text-slate-700">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QcareNeed;
