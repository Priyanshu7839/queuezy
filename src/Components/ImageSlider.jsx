import React, { useState, useEffect } from "react";

const SLIDER_IMAGES = [
  {
    id: 1,
    src: "/Images/dashboard.png",
    title: "Main Dashboard",
    description: "Comprehensive queue overview and analytics",
  },
  {
    id: 2,
    src: "/Images/admin.png",
    title: "Admin Control Panel",
    description: "System configuration and management",
  },
  {
    id: 3,
    src: "/Images/doctor.png",
    title: "Doctor Portal",
    description: "Medical staff interface and schedules",
  },
  {
    id: 4,
    src: "/Images/flow.png",
    title: "Process Flow",
    description: "Automated workflow visualization",
  },
  {
    id: 5,
    src: "/Images/new departnment.png",
    title: "Department Management",
    description: "Organize teams and departments",
  },
  {
    id: 6,
    src: "/Images/staff flow.png",
    title: "Staff Workflow",
    description: "Monitor team activities and shifts",
  },
  {
    id: 7,
    src: "/Images/waiting.png",
    title: "Waiting Area Display",
    description: "Real-time queue information display",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [displayCount, setDisplayCount] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length
    );
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    setIsAutoPlay(false);
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < displayCount; i++) {
      indices.push((currentIndex + i) % SLIDER_IMAGES.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider">
            <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            Image Gallery
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Workflow Showcase
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Explore all features of our queue management system
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIndices.map((index, position) => (
              <div
                key={SLIDER_IMAGES[index].id}
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  animation: `slideIn 0.6s ease-out ${position * 0.1}s both`,
                }}
              >
                <style>
                  {`
                    @keyframes slideIn {
                      from {
                        opacity: 0;
                        transform: translateY(20px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                    @keyframes fadeScale {
                      from {
                        transform: scale(0.95);
                        opacity: 0;
                      }
                      to {
                        transform: scale(1);
                        opacity: 1;
                      }
                    }
                  `}
                </style>
                <div 
                  className="relative h-72 w-full overflow-hidden bg-slate-900 sm:h-80 cursor-pointer"
                  onClick={() => setSelectedImage(SLIDER_IMAGES[index])}
                >
                  <img
                    src={SLIDER_IMAGES[index].src}
                    alt={SLIDER_IMAGES[index].title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-white">
                      {SLIDER_IMAGES[index].title}
                    </h3>
                    <p className="text-sm text-slate-200">
                      {SLIDER_IMAGES[index].description}
                    </p>
                  </div>

                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300 backdrop-blur">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {index + 1} / {SLIDER_IMAGES.length}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="group relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 transition duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/10"
              aria-label="Previous slide"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {SLIDER_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-indigo-500"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 transition duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/10"
              aria-label="Next slide"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                isAutoPlay
                  ? "border border-indigo-500/50 bg-indigo-500/10 text-indigo-300"
                  : "border border-white/20 bg-white/5 text-slate-300 hover:border-white/40 hover:bg-white/10"
              }`}
            >
              <span
                className={`inline-flex h-2 w-2 rounded-full ${
                  isAutoPlay ? "bg-indigo-400" : "bg-slate-400"
                } ${isAutoPlay ? "animate-pulse" : ""}`}
              />
              {isAutoPlay ? "Auto-playing" : "Paused"}
            </button>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full mx-4 rounded-2xl overflow-hidden bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative h-full w-full flex flex-col">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-300">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageSlider;
