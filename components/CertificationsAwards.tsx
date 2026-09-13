'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, CheckCircle2, Eye, X, ExternalLink } from 'lucide-react';

interface TrophyItem {
  id: string;
  title: string;
  issuer: string;
  image: string;
  year: string;
  type: 'award' | 'certification';
  category: string;
}

export default function CertificationsAwards() {
  const [selectedItem, setSelectedItem] = useState<TrophyItem | null>(null);

  const awards: TrophyItem[] = [
    {
      id: 'aw-1',
      title: 'Best Quality Performance Award',
      issuer: 'Tier-1 Automotive OEM Customer',
      image: '/scraped_assets/awards/BEST-QUALITY.jpg',
      year: '2023 - 2024',
      type: 'award',
      category: 'Kualitas & Presisi',
    },
    {
      id: 'aw-2',
      title: 'Continuous Quality Improvement Award',
      issuer: 'Automotive Assembler Partner',
      image: '/scraped_assets/awards/QUALITY-IMPROVEMENT.jpg',
      year: '2022 - 2023',
      type: 'award',
      category: 'Kaizen & Efisiensi',
    },
    {
      id: 'aw-3',
      title: 'QCD Performance (Quality, Cost, Delivery)',
      issuer: 'Industrial & Commercial Vehicle Manufacturer',
      image: '/scraped_assets/awards/QCD-1.png',
      year: '2021 - 2022',
      type: 'award',
      category: 'Supply Chain Reliability',
    },
    {
      id: 'aw-4',
      title: 'Outstanding Supplier Contribution',
      issuer: 'Automotive Electrical Systems OEM',
      image: '/scraped_assets/awards/Contribution.png',
      year: '2022',
      type: 'award',
      category: 'VA/VE & Dedikasi',
    },
    {
      id: 'aw-5',
      title: 'Best Cash Growth & Delivery Resilience',
      issuer: 'Automotive Group Procurement',
      image: '/scraped_assets/awards/BEST_CASH_GROWTH-1.jpg',
      year: '2021',
      type: 'award',
      category: 'Financial & Operational Health',
    },
    {
      id: 'aw-6',
      title: 'Zero Defect & Perfect Delivery Recognition',
      issuer: 'Suzuki Indomobil Vendor Association',
      image: '/scraped_assets/awards/award3.jpg',
      year: 'Long-standing Vendor',
      type: 'award',
      category: 'Zero PPM Milestone',
    },
  ];

  const certifications = [
    {
      id: 'cert-1',
      title: 'IATF 16949:2016 Certification',
      issuer: 'TÜV / International Automotive Task Force',
      image: '/scraped_assets/certifications/iso-iatf1.jpg',
      standard: 'Automotive Quality Management System',
      description: 'Standar kualitas global tertinggi untuk rantai pasok industri otomotif dunia.',
    },
    {
      id: 'cert-2',
      title: 'ISO 9001:2015 Certification',
      issuer: 'Quality Management Certification Body',
      image: '/scraped_assets/certifications/iso-cert1.jpg',
      standard: 'Quality Management Standard',
      description: 'Sistem manajemen mutu komprehensif mulai dari raw material, proses molding, hingga pengiriman.',
    },
    {
      id: 'cert-3',
      title: 'ISO 14001:2015 Certification',
      issuer: 'Environmental Management Certification',
      image: '/scraped_assets/certifications/iso-cert2.jpg',
      standard: 'Environmental Management System',
      description: 'Standar kepatuhan pengelolaan lingkungan hidup, efisiensi energi, dan daur ulang plastik internal.',
    },
  ];

  return (
    <section id="mutu" className="py-16 bg-[#111111] border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>QUALITY GOVERNANCE & AWARDS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-wide text-white">
              STANDAR MUTU IATF 16949 & PENGHARGAAN INDUSTRI
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md">
            Konsistensi kontrol kualitas terbukti melalui pengakuan resmi dari principal otomotif dan sertifikasi badan standarisasi internasional.
          </p>
        </div>

        {/* Certifications Row */}
        <div className="mb-14">
          <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            SERTIFIKASI MUTU INTERNASIONAL (AUDITED)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-neutral-950 rounded-lg border border-technical-border p-5 flex flex-col justify-between hover:border-primary transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-44 w-full bg-neutral-900 rounded border border-technical-border/80 flex items-center justify-center p-2 mb-4 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={220}
                      height={170}
                      className="max-h-40 w-auto object-contain filter contrast-110 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700/50 text-emerald-400 font-semibold uppercase">
                    ACTIVE & CERTIFIED
                  </span>
                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wide mt-2">
                    {cert.title}
                  </h4>
                  <p className="font-mono text-xs text-primary mt-1">{cert.standard}</p>
                  <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-technical-border/60 text-[11px] font-mono text-gray-400 flex items-center justify-between">
                  <span>Badan Sertifikasi Terakreditasi</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Awards Showcase */}
        <div>
          <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
            PENGHARGAAN DARI MITRA PRINSIPAL & OEM
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {awards.map((award) => (
              <div
                key={award.id}
                onClick={() => setSelectedItem(award)}
                className="bg-neutral-950 rounded border border-technical-border hover:border-accent p-3 flex flex-col justify-between cursor-pointer transition-all duration-300 group"
              >
                <div className="relative h-32 w-full bg-neutral-900 rounded border border-neutral-800 flex items-center justify-center p-2 mb-2.5 overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={140}
                    height={110}
                    className="max-h-28 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-accent block uppercase font-semibold">
                    {award.year}
                  </span>
                  <h5 className="font-heading text-xs font-bold text-white uppercase line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">
                    {award.title}
                  </h5>
                  <p className="font-sans text-[10px] text-gray-400 mt-1 line-clamp-1">
                    {award.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Lab Metric Highlights */}
        <div className="mt-12 p-6 rounded-lg bg-neutral-950 border border-technical-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          <div>
            <span className="text-[10px] text-gray-400 block uppercase">Target Cacat Produksi</span>
            <span className="font-heading text-2xl font-bold text-emerald-400 block mt-0.5">&lt; 50 PPM</span>
            <span className="text-xs text-gray-300 font-sans mt-1 block">Part Per Million Defect Rate</span>
          </div>

          <div>
            <span className="text-[10px] text-gray-400 block uppercase">On-Time Delivery Rate</span>
            <span className="font-heading text-2xl font-bold text-white block mt-0.5">99.8%</span>
            <span className="text-xs text-gray-300 font-sans mt-1 block">JIT Schedule Compliance</span>
          </div>

          <div>
            <span className="text-[10px] text-gray-400 block uppercase">Metrology Equipment</span>
            <span className="font-heading text-2xl font-bold text-primary block mt-0.5">3D CMM</span>
            <span className="text-xs text-gray-300 font-sans mt-1 block">Mitutoyo Coordinate Machine</span>
          </div>

          <div>
            <span className="text-[10px] text-gray-400 block uppercase">Traceability Barcode</span>
            <span className="font-heading text-2xl font-bold text-accent block mt-0.5">100% LOT</span>
            <span className="text-xs text-gray-300 font-sans mt-1 block">Pelacakan Tiap Batch Resin</span>
          </div>
        </div>

        {/* Modal Lightbox for Award */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-neutral-950 border border-technical-border rounded-lg max-w-lg w-full p-6 relative shadow-2xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded hover:bg-neutral-900"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-2">
                <Award className="w-4 h-4" />
                <span>PENGHARGAAN RESMI MITRA</span>
              </div>

              <h4 className="font-heading text-lg font-bold text-white uppercase mb-4">
                {selectedItem.title}
              </h4>

              <div className="bg-neutral-900 p-4 rounded border border-technical-border flex items-center justify-center mb-4">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={340}
                  height={260}
                  className="max-h-72 w-auto object-contain"
                />
              </div>

              <div className="font-mono text-xs space-y-1.5 text-gray-300">
                <p><strong>Pemberi Penghargaan:</strong> {selectedItem.issuer}</p>
                <p><strong>Tahun / Periode:</strong> {selectedItem.year}</p>
                <p><strong>Kategori Prestasi:</strong> {selectedItem.category}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-technical-border text-right">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-gray-200 text-xs font-mono rounded border border-technical-border"
                >
                  Tutup Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
