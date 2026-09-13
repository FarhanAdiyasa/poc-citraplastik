'use client';

import React from 'react';
import { Leaf, ShieldAlert, HeartHandshake, Zap, Recycle, CheckCircle2 } from 'lucide-react';

export default function SustainabilitySection() {
  const pillars = [
    {
      icon: Recycle,
      title: 'Material Experience & Closed-Loop Recycling',
      description:
        'Pengalaman formulasi thermoplastic virgin dan post-industrial regrind material terkontrol. Sistem granulator in-line meminimalkan limbah sprues & runners hingga tingkat scrap di bawah 1.5%.',
      color: 'text-emerald-400',
    },
    {
      icon: Zap,
      title: 'Energy Efficient Servo-Hydraulic Machines',
      description:
        'Seluruh armada 55 mesin injeksi dilengkapi sistem inverter servo drive presisi yang mereduksi konsumsi listrik pabrik hingga 35% dibandingkan mesin hidraulik konvensional.',
      color: 'text-primary',
    },
    {
      icon: ShieldAlert,
      title: 'Health & Safety (P2K3 Activity)',
      description:
        'Komite Pembina Keselamatan dan Kesehatan Kerja (P2K3) aktif dengan rekor Zero Fatalities. Audit berkala perlindungan mesin, ergonomi operator, dan evakuasi darurat.',
      color: 'text-accent',
    },
    {
      icon: HeartHandshake,
      title: 'Ethics, Integrity & CSR Community',
      description:
        'Sistem pelaporan pelanggaran (Whistleblowing System / WBS) independen, kepatuhan hak asasi manusia, serta program CSR berkala bagi masyarakat sekitar Cikarang Harjamekar.',
      color: 'text-gray-300',
    },
  ];

  return (
    <section className="py-16 bg-[#0d0d0d] border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <Leaf className="w-4 h-4" />
              <span>ESG & SUSTAINABLE MANUFACTURING</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-wide text-white">
              KOMITMEN KEBERLANJUTAN, MATERIAL & KESELAMATAN KERJA (K3)
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md">
            Menerapkan manufaktur ramah lingkungan dengan efisiensi energi terukur dan sistem keselamatan kerja berstandar nasional.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-neutral-950 rounded-lg border border-technical-border hover:border-gray-500 transition-colors flex gap-4"
              >
                <div className="p-3 rounded bg-neutral-900 border border-neutral-800 shrink-0 h-fit">
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Environmental Snapshot */}
        <div className="mt-10 p-5 rounded bg-neutral-900/50 border border-technical-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-gray-300">
              Pengelolaan Limbah B3 Berizin Resmi DLH Kabupaten Bekasi & Uji Lingkungan Emisi Berkala (Riksa Uji Lingkungan).
            </span>
          </div>
          <span className="px-3 py-1 rounded bg-neutral-800 text-emerald-400 font-semibold border border-neutral-700">
            PROPER Kepatuhan Lingkungan Terpenuhi
          </span>
        </div>
      </div>
    </section>
  );
}
