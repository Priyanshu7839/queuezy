import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Mission is to Humanize Waiting Rooms
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            QCare is built by healthcare technologists, clinicians, and patient
            experience leaders who believe every touchpoint in a hospital visit
            should feel coordinated, transparent, and calm.
          </p>
        </header>

        <section className="mt-12 grid gap-10 sm:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-100/60 ring-1 ring-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900">What We Do</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We design AI-assisted queue intelligence that synchronizes your OPD,
              diagnostics, pharmacy, and billing desks. From token creation to
              discharge, our platform keeps every department aligned so patients
              experience shorter waits and your teams stay confident.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-100/60 ring-1 ring-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900">Why Hospitals Choose Us</h2>
            <ul className="mt-4 space-y-3 text-base text-slate-600">
              <li>• 24/7 clinical support with rapid triage escalation.</li>
              <li>• Seamless EHR, HIS, and CRM integrations with dedicated SMEs.</li>
              <li>• Analytics that surface real-time bottlenecks and staffing needs.</li>
            </ul>
          </article>
        </section>

        <section className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 p-8 text-white">
          <h2 className="text-2xl font-semibold">Serving Healthcare Leaders Across 11 Countries</h2>
          <p className="mt-4 max-w-3xl text-base text-blue-50">
            From tertiary care networks to specialty clinics, QCare helps
            orchestrate over 6 million visits annually. Our customer success team
            partners with administrators, CMOs, and IT directors to ensure every
            rollout improves staff morale and patient trust.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;