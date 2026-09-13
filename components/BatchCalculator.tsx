'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Settings2, Clock, CheckCircle, ArrowRight, Layers, AlertCircle } from 'lucide-react';

interface CalculationResult {
  recommendedTonnage: number;
  cycleTimeSec: number;
  dailyCapacityUnits: number;
  productionDays: number;
  unitPriceRange: string;
  recommendedMachine: string;
  moldCavityInfo: string;
}

export default function BatchCalculator() {
  const [productType, setProductType] = useState<'four-wheels' | 'two-wheels' | 'electricals' | 'custom'>('four-wheels');
  const [targetTonnage, setTargetTonnage] = useState<number>(250);
  const [batchQuantity, setBatchQuantity] = useState<number>(10000);
  const [moldComplexity, setMoldComplexity] = useState<'standard' | 'multi-action' | 'high-precision'>('multi-action');
  const [materialType, setMaterialType] = useState<string>('PP-TD20');

  // Interactive calculation based on injection molding engineering principles
  const result: CalculationResult = useMemo(() => {
    // Determine recommended tonnage if selected tonnage needs adjustment
    let baseTonnage = targetTonnage;
    let baseCycle = 30; // seconds
    let cavityCount = 2;

    if (productType === 'four-wheels') {
      // 4W parts usually require higher tonnage (180T - 850T), complex cooling
      if (baseTonnage < 180) baseTonnage = 180;
      baseCycle = moldComplexity === 'high-precision' ? 45 : moldComplexity === 'multi-action' ? 38 : 30;
      cavityCount = baseTonnage > 450 ? 4 : 2;
    } else if (productType === 'two-wheels') {
      // 2W parts (80T - 350T)
      baseCycle = moldComplexity === 'high-precision' ? 32 : moldComplexity === 'multi-action' ? 26 : 22;
      cavityCount = baseTonnage > 200 ? 4 : 2;
    } else if (productType === 'electricals') {
      // Electrical parts (40T - 160T)
      baseCycle = moldComplexity === 'high-precision' ? 24 : moldComplexity === 'multi-action' ? 20 : 16;
      cavityCount = baseTonnage > 120 ? 8 : 4;
    } else {
      baseCycle = 35;
      cavityCount = 2;
    }

    // Machine working hours: 20 effective hours per day (2 shifts of 10 hrs or 3 shifts with changeover)
    const effectiveSecondsPerDay = 20 * 3600;
    const cyclesPerDay = Math.floor(effectiveSecondsPerDay / baseCycle);
    const dailyCapacity = cyclesPerDay * cavityCount;
    const productionDays = Math.max(1, Math.ceil(batchQuantity / dailyCapacity));

    // Unit Price Range Estimate (IDR)
    let minPrice = 0;
    let maxPrice = 0;

    if (productType === 'four-wheels') {
      minPrice = 8500 + baseTonnage * 18;
      maxPrice = 14500 + baseTonnage * 28;
    } else if (productType === 'two-wheels') {
      minPrice = 4500 + baseTonnage * 12;
      maxPrice = 8500 + baseTonnage * 20;
    } else if (productType === 'electricals') {
      minPrice = 1800 + baseTonnage * 8;
      maxPrice = 4200 + baseTonnage * 14;
    } else {
      minPrice = 5000 + baseTonnage * 15;
      maxPrice = 11000 + baseTonnage * 24;
    }

    // Volume discount for larger batch
    if (batchQuantity >= 50000) {
      minPrice *= 0.88;
      maxPrice *= 0.88;
    } else if (batchQuantity >= 20000) {
      minPrice *= 0.94;
      maxPrice *= 0.94;
    }

    const formatIdr = (val: number) =>
      'Rp ' + Math.round(val).toLocaleString('id-ID');

    let machineDesc = `${baseTonnage} Ton Servo-Hydraulic Injection Unit`;
    if (baseTonnage <= 80) machineDesc = `${baseTonnage} Ton Precision Electric/Hydraulic`;
    else if (baseTonnage >= 650) machineDesc = `${baseTonnage} Ton Heavy-Duty Automotive Grade`;

    return {
      recommendedTonnage: baseTonnage,
      cycleTimeSec: baseCycle,
      dailyCapacityUnits: dailyCapacity,
      productionDays,
      unitPriceRange: `${formatIdr(minPrice)} - ${formatIdr(maxPrice)}`,
      recommendedMachine: machineDesc,
      moldCavityInfo: `${cavityCount} Cavity Mold (${moldComplexity === 'high-precision' ? 'Hot Runner' : 'Cold Runner Standard'})`,
    };
  }, [productType, targetTonnage, batchQuantity, moldComplexity]);

  const handleApplyToForm = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kalkulator" className="py-16 bg-[#111111] border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary mb-2">
              <Calculator className="w-4 h-4" />
              <span>B2B MANUFACTURING SIMULATOR • REKAYASA TEKNIK</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-wide text-white">
              ESTIMATOR KAPASITAS PRODUKSI & BATCH ORDER
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-lg">
            Kalkulasikan kebutuhan tonnage mesin (40T - 850T), estimasi cycle time, durasi pengerjaan, dan estimasi rentang harga per unit untuk perencanaan lini Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Input Parameters */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-lg border border-technical-border space-y-6">
            <div className="flex items-center gap-2 border-b border-technical-border pb-3">
              <Settings2 className="w-4 h-4 text-primary" />
              <h3 className="font-heading uppercase text-sm font-bold tracking-wider text-white">
                PARAMETER SPESIFIKASI INJECTION
              </h3>
            </div>

            {/* 1. Kategori Komponen */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                1. Kategori Komponen Plastik:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'four-wheels', label: 'Four Wheels' },
                  { id: 'two-wheels', label: 'Two Wheels' },
                  { id: 'electricals', label: 'Electricals' },
                  { id: 'custom', label: 'Custom Industrial' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProductType(item.id as any)}
                    className={`py-2 px-3 rounded text-xs font-mono transition-all text-center border ${
                      productType === item.id
                        ? 'bg-primary text-white border-primary font-semibold shadow-md'
                        : 'bg-neutral-900 text-gray-300 border-technical-border hover:border-gray-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Tonnage Mesin (40 - 850 Ton) */}
            <div>
              <div className="flex justify-between items-center mb-1.5 font-mono text-xs">
                <span className="text-gray-300 uppercase">2. Tonnage Mesin Injeksi (Range CPM: 40T - 850T):</span>
                <span className="text-primary font-bold px-2 py-0.5 bg-neutral-900 rounded border border-neutral-800">
                  {targetTonnage} TON
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="850"
                step="10"
                value={targetTonnage}
                onChange={(e) => setTargetTonnage(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-1">
                <span>40T (Part Mikro)</span>
                <span>250T (Medium Housing)</span>
                <span>550T (Automotive Lamp)</span>
                <span>850T (Bumper/Large Parts)</span>
              </div>
            </div>

            {/* 3. Batch Quantity */}
            <div>
              <div className="flex justify-between items-center mb-1.5 font-mono text-xs">
                <span className="text-gray-300 uppercase">3. Kuantitas Batch Pesanan (Unit):</span>
                <span className="text-accent font-bold px-2 py-0.5 bg-neutral-900 rounded border border-neutral-800">
                  {batchQuantity.toLocaleString('id-ID')} UNIT
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {[2500, 10000, 30000, 75000].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setBatchQuantity(qty)}
                    className={`py-1.5 rounded text-[11px] font-mono border ${
                      batchQuantity === qty
                        ? 'bg-neutral-800 text-white border-accent font-semibold'
                        : 'bg-neutral-900 text-gray-400 border-technical-border hover:text-white'
                    }`}
                  >
                    {qty.toLocaleString('id-ID')}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={batchQuantity}
                onChange={(e) => setBatchQuantity(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            {/* 4. Kompleksitas Mold & Material */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                  4. Kompleksitas Mold:
                </label>
                <select
                  value={moldComplexity}
                  onChange={(e) => setMoldComplexity(e.target.value as any)}
                  className="w-full bg-neutral-900 border border-technical-border rounded px-3 py-2 text-xs font-mono text-gray-200 focus:outline-none focus:border-primary"
                >
                  <option value="standard">Standard Core & Cavity (Simple)</option>
                  <option value="multi-action">Multi-Slider / Side-Action (Medium)</option>
                  <option value="high-precision">High Precision Optical / Multi-Insert</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-2 uppercase">
                  5. Material Resin Thermoplastic:
                </label>
                <select
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value)}
                  className="w-full bg-neutral-900 border border-technical-border rounded px-3 py-2 text-xs font-mono text-gray-200 focus:outline-none focus:border-primary"
                >
                  <option value="PP-TD20">PP / Talc Filled (Polypropylene)</option>
                  <option value="ABS-Automotive">ABS High Impact (Automotive Grade)</option>
                  <option value="PA66-GF30">PA66-GF30 (Glass Filled Nylon)</option>
                  <option value="POM">POM Polyacetal (Low Friction / Gear)</option>
                  <option value="PC-Optical">PC Optical Grade (Lens / Lighting)</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-neutral-900/60 rounded border border-neutral-800 text-[11px] font-mono text-gray-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                Kalkulasi ini adalah simulasi awal rekayasa teknis. Toleransi cetakan, cooling time riil, dan runner system akan diverifikasi melalui DFM (Design for Manufacturing) review oleh engineer CPM.
              </span>
            </div>
          </div>

          {/* Output Simulation Card */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-lg border border-technical-border relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-technical-border pb-4 mb-5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <h3 className="font-heading uppercase text-base font-bold tracking-wider text-white">
                  ESTIMASI REKAYASA PRODUKSI
                </h3>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 bg-primary/20 text-primary border border-primary/40 rounded">
                SIMULASI REAL-TIME
              </span>
            </div>

            <div className="space-y-4 font-mono">
              {/* Output Item 1: Rekomendasi Tonnage */}
              <div className="p-3 bg-neutral-900/90 rounded border border-technical-border">
                <span className="text-[10px] text-gray-400 uppercase block">Rekomendasi Tonnage & Tipe Mesin</span>
                <span className="font-heading text-xl font-bold text-white block mt-0.5">
                  {result.recommendedTonnage} TON
                </span>
                <span className="text-xs text-primary block mt-0.5 font-sans">
                  {result.recommendedMachine}
                </span>
              </div>

              {/* Output Item 2: Cycle Time & Cavity */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-neutral-900/90 rounded border border-technical-border">
                  <span className="text-[10px] text-gray-400 uppercase block">Cycle Time Est.</span>
                  <span className="font-heading text-lg font-bold text-white block mt-0.5">
                    {result.cycleTimeSec} detik / shot
                  </span>
                  <span className="text-[10px] text-gray-400">{result.moldCavityInfo}</span>
                </div>

                <div className="p-3 bg-neutral-900/90 rounded border border-technical-border">
                  <span className="text-[10px] text-gray-400 uppercase block">Kapasitas Harian</span>
                  <span className="font-heading text-lg font-bold text-emerald-400 block mt-0.5">
                    {result.dailyCapacityUnits.toLocaleString('id-ID')} unit / hari
                  </span>
                  <span className="text-[10px] text-gray-400">Efisiensi 2 Shift Aktif</span>
                </div>
              </div>

              {/* Output Item 3: Waktu Pengerjaan */}
              <div className="p-3 bg-neutral-900/90 rounded border border-technical-border flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block">Waktu Selesai Produksi Batch</span>
                  <span className="font-heading text-2xl font-bold text-white block mt-0.5">
                    ~ {result.productionDays} Hari Kerja
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block">Total Batch</span>
                  <span className="text-sm font-bold text-accent">
                    {batchQuantity.toLocaleString('id-ID')} pcs
                  </span>
                </div>
              </div>

              {/* Output Item 4: Estimasi Biaya per Unit Range */}
              <div className="p-3.5 bg-neutral-900 rounded border border-primary/40">
                <span className="text-[10px] text-gray-300 uppercase block">
                  Indikasi Estimasi Biaya Cetak per Unit (IDR)
                </span>
                <span className="font-heading text-xl sm:text-2xl font-bold text-primary block mt-1">
                  {result.unitPriceRange}
                </span>
                <span className="text-[10px] text-gray-400 block mt-1 font-sans">
                  *Termasuk amortisasi mesin & QC. Disesuaikan dengan berat gramasi netto part & resin grade {materialType}.
                </span>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyToForm}
                className="w-full mt-2 py-3.5 px-4 rounded bg-primary hover:bg-primary-dark font-heading uppercase text-xs sm:text-sm font-bold tracking-wider text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                <span>Bawa Data Estimasi ke Form Penawaran</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
