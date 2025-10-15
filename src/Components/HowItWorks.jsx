import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Patient Scans QR",
      description:
        "Scans QR code or books online → gets a digital token instantly",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      number: 2,
      title: "Real-Time Status",
      description: 'Patient sees: "You\'re 7th in line, ETA 25 mins"',
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      number: 3,
      title: "Display & Audio",
      description: "Big screens + audio call next token clearly",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      number: 4,
      title: "Auto Updates",
      description:
        "Automated reminders, delays, lab reports ready notifications",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      number: 5,
      title: "Admin Insights",
      description: "Dashboards with actionable insights for optimization",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-md leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Simple flow that transforms your hospital operations in 5 easy
            steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
            >
              {/* Numbered Circle */}
              <div
                className={`${step.bgColor} ${step.textColor} w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg border-2 ${step.borderColor} font-bold text-3xl`}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
