'use client';

import React from 'react';
import Image from 'next/image';
import { Factory, MapPin, Gauge, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function FacilitiesSection() {
  const plants = [
    {
      id: 'plant-1',
      number: 'PLANT 1 (HEADQUARTERS & PRECISION UNIT)',
      image: '/scraped_assets/facilities/plant1ab.png',
      location: 'Jl. Jababeka XIV A, Blok J4F, Kawasan Industri Jababeka 1, Desa Harjamekar, Cikarang Utara, Kab. Bekasi',
      focus: 'Plastic Injection Otomotif Roda 4 & Lighting Modules',
      tonnageCapacity: '250 Ton - 850 Ton (Heavy Duty)',
      facilities: [
        'Overhead Crane 10 Ton',
        'Central Material Feeding System (Vacuum)',
        '3D CMM Metrology Lab (Mitutoyo)',
        'Ruang Kontrol Kualitas Standar IATF',
      ],
      badgeColor: 'border-primary text-primary',
    },
    {
      id: 'plant-2',
      number: 'PLANT 2 (ASSEMBLY & 2W PARTS)',
      image: '/scraped_assets/facilities/plant21.png',
      location: 'Jl. Jababeka G, Blok CC No. 6 – 7, Kawasan Industri Jababeka 1, Pasir Gombong, Lemah Abang, Bekasi 17530',
      focus: 'Spion Motor Suzuki, Komponen Roda 2 & Sub-Assembly Line',
      tonnageCapacity: '80 Ton - 350 Ton (Medium Precision)',
      facilities: [
        'Dedicated Mirror Assembly & Ultrasonic Welding Line',
        'Pad Printing & Hot Stamping Facilities',
        'Vibration & Torque Durability Testing Rig',
        'Gudang Transit Finished Goods Berstandar FIFO',
      ],
      badgeColor: 'border-accent text-accent',
    },
    {
      id: 'plant-3',
      number: 'PLANT 3 (ELECTRICALS & HIGH-SPEED MOLDING)',
      image: '/scraped_assets/facilities/plant3.png',
      location: 'Jl. Jababeka XIB, Blok K No. 10A, Kawasan Industri Jababeka 1, Desa Harjamekar, Cikarang Utara, Kab. Bekasi',
      focus: 'Komponen Elektrikal, Konektor, & Switch Parts',
      tonnageCapacity: '40 Ton - 180 Ton (High Speed Servo)',
      facilities: [
        'Clean Molding Area untuk Part Optik & Kelistrikan',
        'Dehumidifying Dryers (-40°C Dew Point)',
        'Robotic Part Take-Out System',
        'Uji Flame Retardancy & Spark Tester',
      ],
      badgeColor: 'border-emerald-500 text-emerald-400',
    },
  ];

  return (
    <section id="fasilitas" className="py-16 bg-technical-darker border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
              <Factory className="w-4 h-4" />
              <span>MANUFACTURING INFRASTRUCTURE • 3 STRATEGIC PLANTS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-wide text-white">
              TIGA FASILITAS PRODUKSI DI KAWASAN INDUSTRI JABABEKA 1
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md">
            Lokasi strategis di koridor industri Cikarang Bekasi, terhubung langsung dengan akses tol Jakarta-Cikampek untuk kelancaran logistik JIT (Just-In-Time).
          </p>
        </div>

        {/* 3 Plants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-neutral-950 rounded-lg border border-technical-border hover:border-gray-500 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Real Plant Image */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900 border-b border-technical-border">
                  <Image
                    src={plant.image}
                    alt={plant.number}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`font-mono text-[10px] px-2.5 py-1 rounded bg-neutral-950/90 border font-bold uppercase ${plant.badgeColor}`}
                    >
                      {plant.number.split(' (')[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-2">
                    {plant.number}
                  </h3>

                  {/* Address */}
                  <div className="flex items-start gap-2 text-xs text-gray-400 font-sans mb-4">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{plant.location}</span>
                  </div>

                  {/* Focus & Tonnage */}
                  <div className="space-y-2 font-mono text-xs mb-4">
                    <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800">
                      <span className="text-gray-400 text-[10px] uppercase block">Fokus Manufaktur:</span>
                      <span className="text-white font-semibold font-sans">{plant.focus}</span>
                    </div>

                    <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800">
                      <span className="text-gray-400 text-[10px] uppercase block">Kapasitas Tonnage Terpasang:</span>
                      <span className="text-primary font-bold">{plant.tonnageCapacity}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="pt-2 border-t border-technical-border/60">
                    <span className="font-mono text-[11px] text-gray-400 uppercase block mb-2 font-semibold">
                      Infrastruktur & QC Unggulan:
                    </span>
                    <ul className="space-y-1.5 font-sans text-xs text-gray-300">
                      {plant.facilities.map((fac, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Plant Card Footer */}
              <div className="px-6 py-3 bg-neutral-900/60 border-t border-technical-border text-[11px] font-mono text-gray-400 flex justify-between items-center">
                <span>Status: Beroperasi Penuh</span>
                <span className="text-emerald-400 font-medium">Jababeka 1</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
