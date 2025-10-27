import React, { useState } from "react";

const SCREENSHOTS = [
  {
    id: "dashboard",
    title: "Main Dashboard",
    badge: "Overview",
    description:
      "Comprehensive view of all queue metrics and real-time system status at a glance.",
    image: "/Images/dashboard.png",
    thumbnail: "/Images/dashboard.png",
    metrics: [
      {
        label: "Queues Active",
        value: "12",
        delta: { text: "All operational", tone: "text-emerald-400" },
      },
      {
        label: "Avg Wait Time",
        value: "05m 12s",
        delta: { text: "-8% today", tone: "text-emerald-400" },
      },
      {
        label: "System Health",
        value: "98%",
        delta: { text: "Optimal", tone: "text-emerald-400" },
      },
    ],
    topline: "System Status",
    topValue: "Active",
    topSubtext: "All systems operational",
    topSubtextClass: "text-emerald-400",
  },
  {
    id: "admin-panel",
    title: "Admin Control Panel",
    badge: "Management",
    description:
      "Manage configurations, user roles, and system-wide settings from the admin dashboard.",
    image: "/Images/admin.png",
    thumbnail: "/Images/admin.png",
    metrics: [
      {
        label: "Active Users",
        value: "24",
        delta: { text: "+3 this week", tone: "text-sky-400" },
      },
      {
        label: "Configurations",
        value: "18 active",
        delta: { text: "Up to date", tone: "text-sky-400" },
      },
      {
        label: "Permissions",
        value: "42 roles",
        delta: { text: "Well distributed", tone: "text-sky-400" },
      },
    ],
    topline: "Admin Mode",
    topValue: "Enabled",
    topSubtext: "Full access granted",
    topSubtextClass: "text-sky-400",
  },
  {
    id: "doctor-portal",
    title: "Doctor Portal",
    badge: "Staff",
    description:
      "Dedicated interface for medical staff to access patient queues and appointment schedules.",
    image: "/Images/doctor.png",
    thumbnail: "/Images/doctor.png",
    metrics: [
      {
        label: "Patient Queue",
        value: "8",
        delta: { text: "Next: 10:30 AM", tone: "text-amber-300" },
      },
      {
        label: "Consultations",
        value: "6 completed",
        delta: { text: "1 in progress", tone: "text-amber-300" },
      },
      {
        label: "Next Available",
        value: "15 min",
        delta: { text: "Post-lunch", tone: "text-amber-300" },
      },
    ],
    topline: "Clinic Status",
    topValue: "Active",
    topSubtext: "Accept new patients",
    topSubtextClass: "text-amber-300",
  },
  {
    id: "process-flow",
    title: "Process Flow",
    badge: "Workflow",
    description:
      "Visual representation of queue routing, handoffs, and automated workflow processes.",
    image: "/Images/flow.png",
    thumbnail: "/Images/flow.png",
    metrics: [
      {
        label: "Steps",
        value: "8",
        delta: { text: "Optimized", tone: "text-blue-400" },
      },
      {
        label: "Throughput",
        value: "42/hour",
        delta: { text: "+12% efficiency", tone: "text-blue-400" },
      },
      {
        label: "Automation",
        value: "85%",
        delta: { text: "Highly automated", tone: "text-blue-400" },
      },
    ],
    topline: "Flow Status",
    topValue: "Optimal",
    topSubtext: "No bottlenecks detected",
    topSubtextClass: "text-blue-400",
  },
  {
    id: "department",
    title: "Department Management",
    badge: "Organization",
    description:
      "Create and manage departments with specific configurations, staff assignments, and queue rules.",
    image: "/Images/new departnment.png",
    thumbnail: "/Images/new departnment.png",
    metrics: [
      {
        label: "Departments",
        value: "7",
        delta: { text: "+1 this month", tone: "text-indigo-400" },
      },
      {
        label: "Staff Assigned",
        value: "34",
        delta: { text: "Fully allocated", tone: "text-indigo-400" },
      },
      {
        label: "Queue Rules",
        value: "22",
        delta: { text: "Active", tone: "text-indigo-400" },
      },
    ],
    topline: "Dept. Overview",
    topValue: "7 Active",
    topSubtext: "All staffed properly",
    topSubtextClass: "text-indigo-400",
  },
  {
    id: "staff-workflow",
    title: "Staff Workflow",
    badge: "Team",
    description:
      "Monitor staff activities, shift schedules, and task assignments across all departments.",
    image: "/Images/staff flow.png",
    thumbnail: "/Images/staff flow.png",
    metrics: [
      {
        label: "On Duty",
        value: "28/34",
        delta: { text: "On schedule", tone: "text-green-400" },
      },
      {
        label: "Tasks Assigned",
        value: "156",
        delta: { text: "86% completed", tone: "text-green-400" },
      },
      {
        label: "Efficiency",
        value: "94%",
        delta: { text: "Excellent", tone: "text-green-400" },
      },
    ],
    topline: "Shift Status",
    topValue: "9 AM - 5 PM",
    topSubtext: "Full coverage",
    topSubtextClass: "text-green-400",
  },
  {
    id: "waiting-area",
    title: "Waiting Area Monitor",
    badge: "Display",
    description:
      "Real-time patient queue display for waiting areas with estimated wait times and service status.",
    image: "/Images/waiting.png",
    thumbnail: "/Images/waiting.png",
    metrics: [
      {
        label: "In Queue",
        value: "23",
        delta: { text: "3 being served", tone: "text-pink-400" },
      },
      {
        label: "Avg Wait",
        value: "08m 45s",
        delta: { text: "Stable", tone: "text-pink-400" },
      },
      {
        label: "Satisfaction",
        value: "4.2/5",
        delta: { text: "Very Good", tone: "text-pink-400" },
      },
    ],
    topline: "Queue Position",
    topValue: "23 in Queue",
    topSubtext: "Estimated wait: 9 min",
    topSubtextClass: "text-pink-400",
  },
];

const CAPABILITY_TILES = [
  {
    icon: "timeline",
    tag: "Network Ops",
    title: "Multisite Visibility",
    description:
      "Compare live load across hospitals or satellite centers and shift teams before bottlenecks form.",
  },
  {
    icon: "people",
    tag: "Care Team",
    title: "Context for Every Role",
    description:
      "Front desks, lab techs, and pharmacy leads get tailored dashboards equipped with the next best action.",
  },
  {
    icon: "automation",
    tag: "Automation",
    title: "Trigger Playbooks",
    description:
      "Launch wait-time alerts, escalations, and patient notifications without writing a single line of code.",
  },
];

const renderTileIcon = (type) => {
  const iconProps = {
    className: "h-6 w-6 text-white",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    case "timeline":
      return (
        <svg {...iconProps}>
          <path d="M4 6h16" />
          <path d="M4 12h10" />
          <path d="M4 18h7" />
          <circle cx="17" cy="12" r="2" />
          <circle cx="13" cy="18" r="2" />
        </svg>
      );
    case "people":
      return (
        <svg {...iconProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="3" />
          <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
          <path d="M16 3.13a3 3 0 0 1 0 5.74" />
        </svg>
      );
    case "automation":
      return (
        <svg {...iconProps}>
          <path d="M12 3v3" />
          <path d="M12 18v3" />
          <path d="M3 12h3" />
          <path d="M18 12h3" />
          <path d="M5.6 5.6l2.1 2.1" />
          <path d="M16.3 16.3l2.1 2.1" />
          <path d="M5.6 18.4l2.1-2.1" />
          <path d="M16.3 7.7l2.1-2.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

const SoftwareShowcase = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(SCREENSHOTS[0]);

  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#2563eb]/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider sm:mx-0 sm:self-start">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Product Showcase
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Showcase Your Queue Intelligence Suite
          </h2>
          <p className="text-base text-slate-300 sm:text-lg">
            Drop in real screenshots from your platform to highlight the dashboards, coordination tools, and insights your teams rely on every day.
          </p>

          <div className="mx-auto flex max-w-sm items-center justify-between gap-3 rounded-3xl border border-white/10 bg-slate-900/60 px-5 py-4 shadow-lg shadow-blue-500/20 backdrop-blur sm:hidden">
            <div className="space-y-1 text-left">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Live Snapshot</p>
              <p className="text-lg font-semibold text-white">Queues clearing 2× faster today</p>
            </div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 text-slate-950">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12a7 7 0 0 1 7-7" />
                <path d="M5 12a7 7 0 0 0 7 7" />
                <path d="M19 12a7 7 0 0 0-7-7" />
                <path d="M19 12a7 7 0 0 1-7 7" />
                <path d="M12 5l.8 2.4L15 8l-2 1.5L13 12l-1-1.5L11 12l0-2.5L9 8l2.2-.6L12 5Z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="space-y-3 lg:col-span-2 lg:flex lg:flex-col lg:justify-start overflow-y-auto max-h-96 lg:max-h-full">
            {SCREENSHOTS.slice(0, 4).map((screenshot) => {
              const isActive = screenshot.id === activeScreenshot.id;

              return (
                <button
                  key={screenshot.id}
                  type="button"
                  onClick={() => setActiveScreenshot(screenshot)}
                  aria-pressed={isActive}
                  className={`group flex w-full flex-col gap-2 rounded-xl border px-3 py-3 text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                    isActive
                      ? "border-white/40 bg-white/10 shadow-lg shadow-blue-500/10"
                      : "border-white/10 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <span className="relative flex h-20 w-full overflow-hidden rounded-lg shrink-0">
                    <img
                      src={screenshot.thumbnail || screenshot.image}
                      alt={`${screenshot.title} preview`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span
                      className={`absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/30 transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </span>
                  <span className="space-y-1">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                      <span className="inline-flex h-1 w-1 rounded-full bg-emerald-400" />
                      {screenshot.badge}
                    </span>
                    <p className="text-sm font-semibold text-white line-clamp-1">
                      {screenshot.title}
                    </p>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8">
            <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-4 backdrop-blur h-full">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/5 via-transparent to-white/10" />
              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-slate-900/60 pb-6 sm:min-h-0 sm:pb-24">
                <img
                  src={activeScreenshot.image}
                  alt={`${activeScreenshot.title} full screenshot`}
                  className="h-full w-full object-contain sm:object-cover"
                  loading="lazy"
                />

                {activeScreenshot.topline && (
                  <div className="absolute top-1 right-1 rounded-xl bg-slate-950/80 px-2 py-1 text-right shadow-lg shadow-blue-500/20 backdrop-blur">
                    <span className="text-[10px] uppercase tracking-wide text-white">
                      {activeScreenshot.topline}
                    </span>
                    <span className="mt-0.5 block text-xl font-bold text-white">
                      {activeScreenshot.topValue}
                    </span>
                    {activeScreenshot.topSubtext && (
                      <span
                        className={`text-[9px] font-medium ${
                          activeScreenshot.topSubtextClass || "text-slate-300"
                        }`}
                      >
                        {activeScreenshot.topSubtext}
                      </span>
                    )}
                  </div>
                )}

                <div className="mt-4 px-3 sm:absolute sm:inset-x-0 sm:bottom-4 sm:mt-0 sm:px-6">
                  <div className="rounded-2xl bg-slate-950/90 px-3 py-2 text-xs shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 sm:px-5 sm:py-3 sm:text-sm">
                    <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
                      {activeScreenshot.metrics.map((metric) => (
                        <div key={metric.label} className="space-y-0.5">
                          <p className="text-xs uppercase tracking-wide text-slate-400">
                            {metric.label}
                          </p>
                          <p className="font-semibold text-white text-sm sm:text-base">
                            {metric.value}
                          </p>
                          {metric.delta && (
                            <p className={`text-[10px] font-medium ${metric.delta.tone} sm:text-xs`}>
                              {metric.delta.text}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-2 lg:flex lg:flex-col lg:justify-start overflow-y-auto max-h-96 lg:max-h-full">
            {SCREENSHOTS.slice(4).map((screenshot) => {
              const isActive = screenshot.id === activeScreenshot.id;

              return (
                <button
                  key={screenshot.id}
                  type="button"
                  onClick={() => setActiveScreenshot(screenshot)}
                  aria-pressed={isActive}
                  className={`group flex w-full flex-col gap-2 rounded-xl border px-3 py-3 text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                    isActive
                      ? "border-white/40 bg-white/10 shadow-lg shadow-blue-500/10"
                      : "border-white/10 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <span className="relative flex h-20 w-full overflow-hidden rounded-lg shrink-0">
                    <img
                      src={screenshot.thumbnail || screenshot.image}
                      alt={`${screenshot.title} preview`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span
                      className={`absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/30 transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </span>
                  <span className="space-y-1">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                      <span className="inline-flex h-1 w-1 rounded-full bg-emerald-400" />
                      {screenshot.badge}
                    </span>
                    <p className="text-sm font-semibold text-white line-clamp-1">
                      {screenshot.title}
                    </p>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITY_TILES.map((tile) => (
            <div
              key={tile.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-200 hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute -top-12 right-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition duration-200 group-hover:bg-indigo-400/20" />
              <div className="absolute -bottom-16 left-6 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl transition duration-200 group-hover:bg-emerald-400/20" />

              <div className="relative space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {tile.tag}
                </span>

                {/* <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2667FF] to-[#3B82FF]">
                  {renderTileIcon(tile.icon)}
                </span> */}

                <h3 className="text-xl font-semibold text-white">{tile.title}</h3>
                <p className="text-sm text-slate-300">{tile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;