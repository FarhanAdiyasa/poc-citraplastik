'use client';

import React from 'react';
import { Lightbulb, Wrench, TrendingDown, Clock, ShieldCheck, Check, Layers, Cpu } from 'lucide-react';

export default function EngineeringVAVE() {
  return (
    <section id="tentang" className="py-16 bg-[#0f0f0f] border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span>VALUE ANALYSIS & VALUE ENGINEERING (VA/VE)</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-wide text-white">
              REKAYASA EFISIENSI MOLD & KONSOLIDASI DESAIN
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md">
            Komitmen rekayasa sejak 1997: mengoptimalkan biaya investasi cetakan (tooling cost) dan memangkas waktu siklus tanpa mengorbankan integritas struktural.
          </p>
        </div>

        {/* VA/VE Case Study Card Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Case: 3 Clamp Wiring Harness to 1 Mold */}
          <div className="lg:col-span-8 bg-neutral-950 p-6 sm:p-8 rounded-lg border border-technical-border flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-technical-border pb-4 mb-5">
                <span className="font-mono text-xs text-accent uppercase font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  STUDI KASUS NYATA VA/VE
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-gray-300">
                  APLIKASI OTOMOTIF WIRING HARNESS
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-3">
                PENYEDERHANAAN 3 MODEL CLAMP WIRING HARNESS MENJADI HANYA 1 CETAKAN MOLD
              </h3>

              <p className="text-sm text-gray-300 font-sans leading-relaxed mb-6">
                Melalui rekayasa interlock core & sliding insert pada satu basis mold, tim engineering CPM berhasil mengintegrasikan produksi tiga varian clamp wiring harness yang sebelumnya memerlukan tiga cetakan terpisah.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 bg-neutral-900/90 rounded border border-technical-border">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <TrendingDown className="w-4 h-4" />
                    <span className="font-bold">-66% Tooling Cost</span>
                  </div>
                  <p className="text-gray-400 text-[11px]">
                    Klien menghemat biaya pembuatan 2 cetakan mold tambahan.
                  </p>
                </div>

                <div className="p-4 bg-neutral-900/90 rounded border border-technical-border">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-bold">Fast Mold Changeover</span>
                  </div>
                  <p className="text-gray-400 text-[11px]">
                    Pergantian tipe varian cukup dilakukan dengan sliding core dalam 15 menit.
                  </p>
                </div>

                <div className="p-4 bg-neutral-900/90 rounded border border-technical-border">
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-bold">Zero Defect Risk</span>
                  </div>
                  <p className="text-gray-400 text-[11px]">
                    Toleransi fitment konsisten di seluruh varian wiring harness.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-technical-border flex items-center justify-between font-mono text-xs text-gray-400">
              <span>Direktur Operasional: Teguh Nurdin</span>
              <span className="text-primary font-semibold">Track Record Sejak 1997</span>
            </div>
          </div>

          {/* Right Column: Historical Foundation & Capability */}
          <div className="lg:col-span-4 bg-neutral-950 p-6 sm:p-8 rounded-lg border border-technical-border flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase mb-4 border-b border-technical-border pb-3">
                <Cpu className="w-4 h-4 text-primary" />
                <span>PONDASI SEJARAH & PERKEMBANGAN</span>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-3">
                  <span className="font-mono text-xs text-accent font-bold">1997</span>
                  <h4 className="font-heading text-sm font-bold text-white uppercase mt-0.5">
                    Pengembangan Spion Motor Suzuki
                  </h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Memulai perjalanan spesialisasi injeksi plastik dengan mengembangkan spion motor Suzuki dengan ketahanan getar tinggi.
                  </p>
                </div>

                <div className="border-l-2 border-technical-border pl-3">
                  <span className="font-mono text-xs text-gray-400 font-bold">2005 - 2018</span>
                  <h4 className="font-heading text-sm font-bold text-white uppercase mt-0.5">
                    Ekspansi ke 3 Plant Jababeka
                  </h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Meningkatkan armada mesin hingga 55 unit dan membangun 3 fasilitas independen untuk melayani pelanggan otomotif roda 4 dan roda 2.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-500 pl-3">
                  <span className="font-mono text-xs text-emerald-400 font-bold">2026 - KINI</span>
                  <h4 className="font-heading text-sm font-bold text-white uppercase mt-0.5">
                    Continuous Production & Smart Monitoring
                  </h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Monitoring loading mesin produksi terintegrasi secara harian untuk memastikan OEE (Overall Equipment Effectiveness) di atas 88%.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-technical-border">
              <span className="font-mono text-[11px] text-gray-400 block">
                Total Output Tahunan: <strong>25+ Juta Komponen</strong>
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of CPM Technical Precision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-neutral-950 rounded border border-technical-border hover:border-primary transition-colors">
            <span className="font-mono text-xs text-primary font-bold">01 / DFM REVIEW</span>
            <h4 className="font-heading text-base font-bold text-white uppercase mt-1 mb-2">
              Design for Manufacturing
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Analisis mold-flow sebelum pemotongan baja cetakan untuk mencegah terjadinya weld-line, air-trap, dan penyusutan (shrinkage).
            </p>
          </div>

          <div className="p-5 bg-neutral-950 rounded border border-technical-border hover:border-primary transition-colors">
            <span className="font-mono text-xs text-accent font-bold">02 / TONNAGE MATCHING</span>
            <h4 className="font-heading text-base font-bold text-white uppercase mt-1 mb-2">
              Seleksi Mesin Optimal
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Penyesuaian clamping force (40T s/d 850T) dengan area proyeksi part untuk mencegah terjadinya flash (burr) dan menjaga keawetan cetakan.
            </p>
          </div>

          <div className="p-5 bg-neutral-950 rounded border border-technical-border hover:border-primary transition-colors">
            <span className="font-mono text-xs text-emerald-400 font-bold">03 / IN-HOUSE TOOLING</span>
            <h4 className="font-heading text-base font-bold text-white uppercase mt-1 mb-2">
              Perawatan Cetakan Rutin
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Divisi maintenance cetakan tersendiri dengan fasilitas ultrasonic cleaning, pemeliharaan parting line berkala, dan cadangan spare core.
            </p>
          </div>

          <div className="p-5 bg-neutral-950 rounded border border-technical-border hover:border-primary transition-colors">
            <span className="font-mono text-xs text-gray-300 font-bold">04 / METROLOGY LAB</span>
            <h4 className="font-heading text-base font-bold text-white uppercase mt-1 mb-2">
              Inspeksi CMM 3D Presisi
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Ruang inspeksi ber-AC dengan Coordinate Measuring Machine Mitutoyo dan profile projector untuk verifikasi dimensi GD&T (Geometric Dimensioning).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
