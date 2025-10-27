import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "OPD Head, Metro Hospital",
      quote:
        "QCare transformed our queue management completely. Patient wait times dropped by 60% and complaints reduced significantly. Highly recommended!",
      rating: 5,
      avatar: "RK",
      color: "bg-blue-100",
    },
    {
      name: "Priya Sharma",
      role: "Hospital Administrator",
      quote:
        "The real-time synchronization between online and reception bookings has been a game-changer. No more double bookings, ever!",
      rating: 5,
      avatar: "PS",
      color: "bg-emerald-100",
    },
    {
      name: "Dr. Arun Patel",
      role: "Chief Medical Officer",
      quote:
        "Implementation was seamless and the support team was excellent. Our doctors now have better focus on patient care without queue chaos.",
      rating: 5,
      avatar: "AP",
      color: "bg-purple-100",
    },
    {
      name: "Neha Verma",
      role: "Patient Services Manager",
      quote:
        "Our patients love the SMS alerts and QR code booking. The satisfaction scores have improved dramatically since we switched to QCare.",
      rating: 5,
      avatar: "NV",
      color: "bg-orange-100",
    },
    {
      name: "Dr. Vikram Singh",
      role: "Emergency Department Lead",
      quote:
        "The priority token system has improved our ability to manage emergency cases efficiently. The digital displays work perfectly during peak hours.",
      rating: 5,
      avatar: "VS",
      color: "bg-teal-100",
    },
    {
      name: "Anjali Desai",
      role: "Operations Director",
      quote:
        "Scalability across departments was effortless. From OPD to pharmacy to labs, everything runs smoothly. Best investment we made!",
      rating: 5,
      avatar: "AD",
      color: "bg-pink-100",
    },
  ];

  return (
    <section id="testimonials" className="relative py-16 lg:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Loved by Hospital Teams
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Hear from healthcare professionals who've transformed their
            operations with QCare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-slate-300"
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-sm text-slate-600 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color} flex-shrink-0`}
                >
                  <span className="text-sm font-bold text-slate-700">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
       
      </div>
    </section>
  );
};

export default Testimonials;
