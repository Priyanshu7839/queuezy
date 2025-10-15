import React from "react";

const FEATURE_IMAGE_1 =
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80";
const FEATURE_IMAGE_2 =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80";

const KeyFeatures = () => {
  const topFeatures = [
    {
      icon: "qr",
      color: "blue",
      title: "QR Code & Online Booking",
      description:
        "Hassle-free token generation through multiple channels. Patients can book from home or scan on arrival.",
    },
    {
      icon: "bell",
      color: "green",
      title: "WhatsApp & SMS Alerts",
      description:
        "Keep patients informed with automated notifications. Reduce no-shows with timely reminders.",
    },
    {
      icon: "target",
      color: "purple",
      title: "Centralized Booking Sync",
      description:
        "Patient online bookings and staff reception bookings sync in real-time. Eliminates double booking and ensures accurate wait times.",
    },
  ];

  const bottomFeatures = [
    {
      icon: "monitor",
      color: "orange",
      title: "Live Queue Screens + Audio",
      description:
        "Clear visibility everywhere with digital displays and audio announcements for the next patient.",
    },
    {
      icon: "star",
      color: "teal",
      title: "Priority Tokens",
      description:
        "Special care for elderly, children, pregnant women, and emergency cases with priority queue management.",
    },
    {
      icon: "layers",
      color: "purple",
      title: "Multi-Department Support",
      description:
        "Seamlessly manage queues across OPD, labs, pharmacy, billing, and radiology from one platform.",
    },
  ];

  const renderIcon = (iconType, colorClass) => {
    const iconProps = {
      className: `h-6 w-6 ${colorClass}`,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    switch (iconType) {
      case "qr":
        return (
          <svg {...iconProps}>
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="4" height="4" />
          </svg>
        );
      case "bell":
        return (
          <svg {...iconProps}>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        );
      case "target":
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        );
      case "monitor":
        return (
          <svg {...iconProps}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
      case "star":
        return (
          <svg {...iconProps}>
            <polygon points="12 2 15.09 10.26 23.77 10.5 17.94 16.51 20.16 25.23 12 20.24 3.84 25.23 6.06 16.51 0.23 10.5 8.91 10.26 12 2" />
          </svg>
        );
      case "layers":
        return (
          <svg {...iconProps}>
            <polygon points="12 2 2 7 2 17 12 22 22 17 22 7 12 2" />
            <polyline points="2 7 12 12 22 7" />
            <polyline points="2 17 12 12 22 17" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getBackgroundColor = (color) => {
    const colors = {
      blue: "bg-blue-50",
      green: "bg-emerald-50",
      purple: "bg-purple-50",
      orange: "bg-orange-50",
      teal: "bg-teal-50",
    };
    return colors[color] || "bg-blue-50";
  };

  const getIconColor = (color) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-emerald-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      teal: "text-teal-600",
    };
    return colors[color] || "text-blue-600";
  };

  const FeatureCard = ({ feature }) => (
    <div className="flex gap-4">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg ${getBackgroundColor(
          feature.color
        )} flex-shrink-0`}
      >
        {renderIcon(feature.icon, getIconColor(feature.color))}
      </div>
      <div>
        <h4 className="font-bold text-slate-900">{feature.title}</h4>
        <p className="text-sm text-slate-600">{feature.description}</p>
      </div>
    </div>
  );

  return (
    <section id="key-features" className="relative py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Key Features
          </h2>
          <p className="mt-6 text-md leading-relaxed text-slate-600">
            Powerful capabilities designed to streamline hospital operations
          </p>
        </div>

        {/* Top Section: Features Left, Image Right */}
        <div className="mb-12 grid gap-12 lg:grid-cols-2">
          {/* Left: Features */}
          <div className="space-y-8">
            {topFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex items-center">
            <img
              src={FEATURE_IMAGE_1}
              alt="Patient using mobile phone"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Section: Image Left, Features Right */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="flex items-center">
            <img
              src={FEATURE_IMAGE_2}
              alt="Queue management display"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
          </div>

          {/* Right: Features */}
          <div className="space-y-8">
            {bottomFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
