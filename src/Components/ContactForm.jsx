import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    department: "OPD & Specialist Clinics",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ✅ Validate form before submit
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";

    if (!formData.organization.trim())
      newErrors.organization = "Organization name is required.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone number.";

    if (!formData.department.trim()) newErrors.department = "Please select a department.";

    return newErrors;
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
      return;
    }

    // You can replace this with API integration
    console.log("Form Data Submitted:", formData);
    setSuccess("✅ Thank you! We’ll reach out within 24 hours.");
    setErrors({});
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      phone: "",
      department: "OPD & Specialist Clinics",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Book a Demo
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Let’s design your queue experience together
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            Tell us about your facility size, departments, and goals. Our specialists will tailor a live walkthrough so you can see QCare working with your existing systems.
          </p>
          <ul className="space-y-4 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                ✓
              </span>
              <span className="text-base">
                Dedicated onboarding specialist guiding you from setup to go-live in under 30 days.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                ✓
              </span>
              <span className="text-base">
                Integration playbook for HIS, EMR, and CRM connections with minimal IT effort.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                ✓
              </span>
              <span className="text-base">
                Scalable pricing aligned to daily token volumes and department growth.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 hidden h-20 w-20 rounded-3xl border border-slate-200 lg:block" />
          <div className="absolute -bottom-10 -right-4 hidden h-24 w-24 rounded-full border border-slate-200 lg:block" />

          <div className="relative rounded-3xl bg-white p-8 shadow-2xl shadow-blue-100 ring-1 ring-slate-100">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Schedule a Demo</h3>
                <p className="text-sm text-slate-500">
                  Share your details and our team will reach out within 24 hours.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                98% Reply Rate
              </span>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Dr. Priya Kumari"
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priya@hospital.com"
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Organization */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className="text-sm font-semibold text-slate-700">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="CityCare Hospital"
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {errors.organization && (
                    <p className="text-xs text-red-500">{errors.organization}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* Department */}
              <div className="flex flex-col gap-2">
                <label htmlFor="department" className="text-sm font-semibold text-slate-700">
                  Departments to manage
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                >
                  <option>OPD & Specialist Clinics</option>
                  <option>Emergency & Trauma</option>
                  <option>Diagnostics & Labs</option>
                  <option>Pharmacy & Billing</option>
                  <option>Multi-Facility Network</option>
                </select>
                {errors.department && (
                  <p className="text-xs text-red-500">{errors.department}</p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Additional notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your queue pain points, departments, or current tooling."
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2667FF] to-[#3B82FF] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2667FF]/60"
              >
                Request a custom demo
              </button>

              {/* Success message */}
              {success && <p className="text-sm text-green-600 text-center">{success}</p>}
            </form>

            <p className="mt-6 text-xs text-slate-500">
              By submitting this form, you agree to QCare’s Terms of Service and Privacy Policy. We
              respect your inbox and will only reach out with relevant updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
