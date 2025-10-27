import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Effective date: January 1, 2025
          </p>
        </header>

        <section className="mt-10 space-y-8 text-base leading-relaxed text-slate-600">
          <article>
            <h2 className="text-2xl font-semibold text-slate-900">1. Acceptance</h2>
            <p className="mt-3">
              By using QCare, your facility agrees to comply with these terms and
              ensure staff follow policies that protect patient privacy and system
              integrity.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-slate-900">2. Service Scope</h2>
            <p className="mt-3">
              QCare provides queue orchestration, automated notifications, and
              analytics dashboards. We continuously update features and may launch
              new modules with prior notice.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-slate-900">3. Customer Obligations</h2>
            <p className="mt-3">
              You must maintain secure integrations, control user access, and
              ensure data provided is accurate. QCare reserves the right to pause
              access for security breaches or unpaid invoices.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-slate-900">4. Liability</h2>
            <p className="mt-3">
              QCare is not liable for clinical decisions or outcomes. Our platform
              functions as a coordination tool; responsibility for patient care
              remains with licensed practitioners.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;