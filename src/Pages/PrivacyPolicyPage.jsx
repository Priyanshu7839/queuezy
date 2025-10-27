import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Effective date: January 1, 2025
          </p>
        </header>

        <section className="mt-10 space-y-8 text-base leading-relaxed text-slate-600">
          <article>
            <h2 className="text-2xl font-semibold text-slate-900">1. Data We Collect</h2>
            <p className="mt-3">
              QCare stores patient identifiers used for queue assignments, visit
              notes, referral information, and staff performance metrics. We
              encrypt all PHI and enforce strict access controls aligned with
              HIPAA and GDPR requirements.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-slate-900">2. How We Use Data</h2>
            <p className="mt-3">
              Data is processed to orchestrate waitlist prioritization, inform
              routing decisions, and notify patients of turn updates. We never sell
              personal data. Anonymized insights may be used to improve system
              responsiveness and inform roadmap decisions.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Security Safeguards
            </h2>
            <p className="mt-3">
              Every environment is monitored 24/7 by our security operations
              center. We implement role-based access, audit trails, and automatic
              data retention policies to meet your regulatory obligations.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Your Rights & Contact
            </h2>
            <p className="mt-3">
              Administrators control retention settings and may request exports or
              deletion at any time. For privacy requests, reach us at
              compliance@qcare.health.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;