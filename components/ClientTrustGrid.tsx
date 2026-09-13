'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck } from 'lucide-react';

export default function ClientTrustGrid() {
  const clients = [
    {
      name: 'Mitsubishi Fuso',
      logo: '/scraped_assets/clients/mitsubishi-fuso.png',
      tier: 'Commercial Vehicle OEM',
      scope: 'Komponen Kabin & Braket Elektrikal Truk',
      borderTone: 'hover:border-accent',
    },
    {
      name: 'Lear Corporation',
      logo: '/scraped_assets/clients/lear-corporation.jpg',
      tier: 'Tier-1 Global Seating & E-Systems',
      scope: 'Wiring Harness Clamp & Structural Plastic',
      borderTone: 'hover:border-primary',
    },
    {
      name: 'Akebono Brake (AJI)',
      logo: '/scraped_assets/clients/akebono-brake.png',
      tier: 'Automotive Brake Systems Specialist',
      scope: 'Brake Fluid Reservoirs & Precision Dust Covers',
      borderTone: 'hover:border-accent',
    },
    {
      name: 'Suzuki Indomobil Motor',
      logo: '/scraped_assets/clients/suzuki-indomobil.jpg',
      tier: 'Automotive & Motorcycle OEM',
      scope: 'Rear View Mirror Housing Sejak 1997 & 2W Body Parts',
      borderTone: 'hover:border-primary',
    },
  ];

  return (
    <section className="py-12 bg-technical-darker border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>KEY CLIENTS & OEM SUPPLY CHAIN PARTNERS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
              DIPERCAYA PEMIMPIN INDUSTRI OTOMOTIF & MANUFAKTUR
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md">
            Memasok komponen plastik presisi tinggi untuk lini perakitan OEM langsung dan Tier-1 sistem otomotif nasional dan multinasional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className={`p-5 rounded bg-neutral-950 border border-technical-border ${client.borderTone} transition-all duration-300 flex flex-col justify-between group`}
            >
              {/* Logo Frame: Clean technical background without harsh white box */}
              <div className="h-20 w-full flex items-center justify-center p-2 rounded bg-neutral-900 border border-technical-border/80 group-hover:border-gray-600 transition-colors overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={70}
                    className="max-h-16 w-auto object-contain filter contrast-125 group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-technical-border/60">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide">
                    {client.name}
                  </h3>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-neutral-800 text-gray-300 border border-neutral-700">
                    OEM / Tier 1
                  </span>
                </div>
                <p className="font-mono text-[11px] text-primary mt-1">{client.tier}</p>
                <p className="text-xs text-gray-400 mt-2 font-sans leading-relaxed">
                  {client.scope}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote quote from lead profile */}
        <div className="mt-6 p-3.5 rounded bg-neutral-900/50 border border-technical-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-accent shrink-0" />
            <span>Rekam Jejak Kemitraan: Sejak tahun 1997 memproduksi spion motor Suzuki hingga kini dipercaya 30+ lini produksi industri.</span>
          </div>
          <span className="text-gray-300 font-semibold uppercase text-[11px]">Audit Skor Mutu: A Grade</span>
        </div>
      </div>
    </section>
  );
}
