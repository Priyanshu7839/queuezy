import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import QcareNeed from "../Components/QcareNeed";
import HowItWorks from "../Components/HowItWorks";
import OurSolutions from "../Components/OurSolutions";
import WhyQcare from "../Components/WhyQcare";
import KeyFeatures from "../Components/KeyFeatures";
import Testimonials from "../Components/Testimonials";
import SoftwareShowcase from "../Components/SoftwareShowcase";
import ImageSlider from "../Components/ImageSlider";
import ContactForm from "../Components/ContactForm";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div id="top" className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <QcareNeed />
      <HowItWorks />
      <OurSolutions />
      <SoftwareShowcase />
      <ImageSlider />
      <WhyQcare />
      <KeyFeatures />
      <Testimonials />
      <ContactForm />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
