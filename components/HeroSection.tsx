'use client';

import React from 'react';
import { ArrowUpRight, Cpu, Layers, ShieldCheck, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-technical-border">
      {/* Subtle background technical grid line */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Business Problem & Value Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900/90 border border-technical-border text-xs font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span>STANDAR PRESISI TINGGI • IATF 16949 / ISO 9001</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05]">
              PRESISI TINGGI <span className="text-primary">PLASTIC INJECTION MOLDING</span> UNTUK INDUSTRI OTOMOTIF & ELEKTRIKAL
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans max-w-2xl">
              Mitra manufaktur komponen plastik presisi sejak 1997. Didukung armada <strong>55 unit mesin injeksi</strong> berkapasitas <strong>40 hingga 850 ton</strong> serta rekayasa VA/VE terbukti untuk efisiensi mold dan keandalan supply chain di 3 fasilitas modern Cikarang.
            </p>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>55 Mesin Injeksi:</strong> Tonnage 40T – 850T melayani part presisi mikro hingga part bodi besar.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Inovasi VA/VE Nyata:</strong> Pengurangan biaya mold melalui konsolidasi desain multi-part.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>3 Fasilitas Jababeka 1:</strong> Kapasitas produksi terintegrasi dengan jaminan pengiriman tepat waktu.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Tier-1 & Tier-2 Rekanan:</strong> Dipercaya merek global otomotif roda 4, roda 2, dan kelistrikan.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#kalkulator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary hover:bg-primary-dark font-heading uppercase text-sm font-semibold tracking-wider text-white shadow-lg shadow-primary/20 transition-all group"
              >
                <span>Kalkulasi Batch Order</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-technical-border hover:border-gray-500 font-mono text-xs text-gray-200 transition-colors"
              >
                <span>Konsultasi Teknis B2B</span>
                <ChevronRight className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Right Column: Technical Operational Snapshot */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-950 rounded-lg border border-technical-border p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl pointer-events-none"></div>

              {/* Header Box */}
              <div className="flex items-center justify-between border-b border-technical-border pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <Gauge className="w-5 h-5 text-accent" />
                  <div>
                    <h3 className="font-heading uppercase text-sm font-bold tracking-wider text-white">
                      OPERATIONAL SNAPSHOT
                    </h3>
                    <p className="font-mono text-[10px] text-gray-400">STATUS PABRIK & KAPASITAS 2026</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-600/40 text-emerald-400">
                  ALL PLANTS ACTIVE
                </span>
              </div>

              {/* Metric Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 bg-neutral-900/90 rounded border border-technical-border">
                  <span className="text-[10px] text-gray-400 block uppercase">Mesin Injeksi</span>
                  <span className="font-heading text-2xl font-bold text-white block">55 Unit</span>
                  <span className="text-[10px] text-primary">Tonnage 40T - 850T</span>
                </div>

                <div className="p-3 bg-neutral-900/90 rounded border border-technical-border">
                  <span className="text-[10px] text-gray-400 block uppercase">Pengalaman Industri</span>
                  <span className="font-heading text-2xl font-bold text-white block">28+ Tahun</span>
                  <span className="text-[10px] text-accent">Perintis sejak 1997</span>
                </div>

                <div className="p-3 bg-neutral-900/90 rounded border border-technical-border">
                  <span className="text-[10px] text-gray-400 block uppercase">Lokasi Produksi</span>
                  <span className="font-heading text-2xl font-bold text-white block">3 Plant</span>
                  <span className="text-[10px] text-gray-400">Kawasan Jababeka 1</span>
                </div>

                <div className="p-3 bg-neutral-900/90 rounded border border-technical-border">
                  <span className="text-[10px] text-gray-400 block uppercase">Sertifikasi Mutu</span>
                  <span className="font-heading text-xl font-bold text-white block">IATF 16949</span>
                  <span className="text-[10px] text-emerald-400">ISO 9001 & ISO 14001</span>
                </div>
              </div>

              {/* Technical Specifications Snapshot Table */}
              <div className="mt-5 pt-4 border-t border-technical-border">
                <div className="flex items-center justify-between text-[11px] font-mono mb-2 text-gray-400">
                  <span>Parameter Rekayasa</span>
                  <span>Standar Pengujian</span>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between items-center py-1 px-2 rounded bg-neutral-900/50 border border-neutral-800">
                    <span className="text-gray-300">Toleransi Dimensi</span>
                    <span className="text-emerald-400 font-semibold">± 0.02 mm (High Precision)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded bg-neutral-900/50 border border-neutral-800">
                    <span className="text-gray-300">Kapasitas Shot Weight</span>
                    <span className="text-white">1.5 gram s/d 3.800 gram</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded bg-neutral-900/50 border border-neutral-800">
                    <span className="text-gray-300">CMM & Optical Quality Lab</span>
                    <span className="text-white">Mitutoyo 3D Coordinate Machine</span>
                  </div>
                  <div className="flex justify-between items-center py-1 px-2 rounded bg-neutral-900/50 border border-neutral-800">
                    <span className="text-gray-300">Resin Engineering</span>
                    <span className="text-primary font-medium">PA66-GF, PBT, POM, PC, ABS, PP</span>
                  </div>
                </div>
              </div>

              {/* Footer Quote in Card */}
              <div className="mt-4 pt-3 border-t border-technical-border flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Direct Inquiry:</span>
                <span className="text-white font-medium">+62 21 89840210</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
