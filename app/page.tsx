import React from 'react';
import TopStatusBar from '@/components/TopStatusBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientTrustGrid from '@/components/ClientTrustGrid';
import BatchCalculator from '@/components/BatchCalculator';
import ProductsShowcase from '@/components/ProductsShowcase';
import EngineeringVAVE from '@/components/EngineeringVAVE';
import FacilitiesSection from '@/components/FacilitiesSection';
import CertificationsAwards from '@/components/CertificationsAwards';
import SustainabilitySection from '@/components/SustainabilitySection';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import TechnicalFooter from '@/components/TechnicalFooter';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-technical-darker selection:bg-primary selection:text-white">
      {/* Top operational status bar */}
      <TopStatusBar />

      {/* Main technical header & navbar */}
      <Navbar />

      {/* Main content body */}
      <main className="flex-1">
        {/* 1. Hero Section with Operational Snapshot */}
        <HeroSection />

        {/* 2. Real Client Trust Grid (Lear, Fuso, Akebono, Suzuki) */}
        <ClientTrustGrid />

        {/* 3. Interactive B2B Production Batch Estimator */}
        <BatchCalculator />

        {/* 4. Real Products Catalog with ASTM/ISO specs (4W, 2W, Electricals) */}
        <ProductsShowcase />

        {/* 5. Real VA/VE Engineering Case Study & Foundation Since 1997 */}
        <EngineeringVAVE />

        {/* 6. Real 3 Facilities in Kawasan Industri Jababeka 1 with authentic photos */}
        <FacilitiesSection />

        {/* 7. Certifications & Real Industry Awards */}
        <CertificationsAwards />

        {/* 8. ESG & Sustainability (P2K3 & Material Experience) */}
        <SustainabilitySection />

        {/* 9. B2B Lead Intake Form with Indonesian Phone Validation */}
        <LeadIntakeForm />
      </main>

      {/* Technical Footer with 3 Plants addresses & official contact */}
      <TechnicalFooter />
    </div>
  );
}
