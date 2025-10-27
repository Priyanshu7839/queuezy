import React from "react";

const WhyQcare = () => {
  const features = [
    {
      icon: "check-green",
      color: "green",
      title: "Reduce Patient Complaints",
      description:
        "Smooth, transparent checkups lead to higher satisfaction scores and positive reviews.",
    },
    {
      icon: "check-blue",
      color: "blue",
      title: "Boost Doctor Productivity",
      description:
        "Balanced schedules and fewer disruptions mean doctors can focus on patient care.",
    },
    {
      icon: "check-purple",
      color: "purple",
      title: "Eliminate Double Booking",
      description:
        "Centralized system syncs patient self-bookings with staff bookings in real-time. Zero conflicts guaranteed.",
    },
    {
      icon: "check-green",
      color: "green",
      title: "Affordable Solution",
      description:
        "Costs less than hiring an additional receptionist while doing much more.",
    },
    {
      icon: "check-orange",
      color: "orange",
      title: "Fully Scalable",
      description:
        "Works seamlessly across OPD, labs, pharmacy, billing, and radiology departments.",
    },
    {
      icon: "check-teal",
      color: "teal",
      title: "Future-Proof",
      description:
        "API-ready for seamless integration with HIMS, ERP, and LIS systems.",
    },
  ];

  const getIconColor = (color) => {
    const colors = {
      green: "text-emerald-500",
      blue: "text-blue-500",
      purple: "text-purple-500",
      orange: "text-orange-500",
      teal: "text-teal-500",
    };
    return colors[color] || "text-emerald-500";
  };

  const getBgColor = (color) => {
    const colors = {
      green: "bg-emerald-50",
      blue: "bg-blue-50",
      purple: "bg-purple-50",
      orange: "bg-orange-50",
      teal: "bg-teal-50",
    };
    return colors[color] || "bg-emerald-50";
  };

  return (
    <section id="why-qcare" className="relative py-16 lg:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Why Hospitals Choose QCare
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-800">
            Transform your operations with measurable results that impact your
            bottom line.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-slate-300"
            >
              <div className="mb-4 flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${getBgColor(
                    feature.color
                  )} flex-shrink-0`}
                >
                  <svg
                    className={`h-6 w-6 ${getIconColor(feature.color)}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-bold  text-slate-900">{feature.title}</h3>
              </div>
              <p className="text-base text-slate-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyQcare;
