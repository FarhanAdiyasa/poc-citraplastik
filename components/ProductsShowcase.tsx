'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, CheckCircle2, ChevronRight, Eye, Shield, Tag, X, FileText } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: 'four-wheels' | 'two-wheels' | 'electricals';
  image: string;
  tonnage: string;
  material: string;
  tolerance: string;
  standard: string;
  application: string;
  description: string;
}

export default function ProductsShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'four-wheels' | 'two-wheels' | 'electricals'>('four-wheels');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    // Four Wheels
    {
      id: '4w-1',
      name: 'Automotive Front Fascia & Grille Component',
      category: 'four-wheels',
      image: '/scraped_assets/products/r4-1.jpg',
      tonnage: '650 Ton',
      material: 'PP-TD20 (Talc Filled 20%)',
      tolerance: '± 0.05 mm',
      standard: 'ISO 527-2 / ASTM D638',
      application: 'Commercial Truck & Passenger SUV Exterior',
      description: 'Komponen fascia depan kendaraan dengan stabilitas dimensi tinggi, tahan benturan dan deformasi cuaca ekstrem.',
    },
    {
      id: '4w-2',
      name: 'Headlamp Dual-Cavity Lens Assembly',
      category: 'four-wheels',
      image: '/scraped_assets/products/lens-assy.png',
      tonnage: '350 Ton',
      material: 'Optical Grade Polycarbonate (PC)',
      tolerance: '± 0.02 mm (Optical Surface)',
      standard: 'JIS K7105 / ASTM D1003',
      application: 'Automotive Lighting Tier-1 OEM',
      description: 'Lensa lampu utama dengan transmisi cahaya >90%, perlakuan anti-UV coating, dan mold mirror finish Ra <0.02 µm.',
    },
    {
      id: '4w-3',
      name: 'High Precision Projector Inner Lens',
      category: 'four-wheels',
      image: '/scraped_assets/products/lens.png',
      tonnage: '180 Ton',
      material: 'High Purity Optical PC / PMMA',
      tolerance: '± 0.015 mm',
      standard: 'ISO 13468-1 / ASTM E308',
      application: 'LED Automotive Headlamp Module',
      description: 'Lensa fokus proyektor LED tanpa gelembung atau sink mark, menjamin beam pattern cahaya sesuai regulasi ECE.',
    },
    {
      id: '4w-4',
      name: 'Rear Combination Tail Lamp Lens',
      category: 'four-wheels',
      image: '/scraped_assets/products/reld-lens.png',
      tonnage: '250 Ton',
      material: 'PMMA Acrylic Red Pigmented',
      tolerance: '± 0.03 mm',
      standard: 'SAE J578 / ECE R7',
      application: 'Rear Combination Lamp Assembly',
      description: 'Reflektor dan lensa lampu belakang dengan intensitas warna merah stabil dan ketahanan retak thermal cycling.',
    },
    {
      id: '4w-5',
      name: 'Rear Fog Lamp Structural Housing',
      category: 'four-wheels',
      image: '/scraped_assets/products/rr-fog.png',
      tonnage: '150 Ton',
      material: 'PBT-GF15 (Polybutylene Terephthalate)',
      tolerance: '± 0.025 mm',
      standard: 'ASTM D790 / ISO 178',
      application: 'Bumper Lower Fog Lamp Unit',
      description: 'Housing lampu kabut tahan panas reflektor hingga 140°C dengan locking tab presisi untuk perakitan bebas getaran.',
    },
    {
      id: '4w-6',
      name: 'Turn Signal Internal Reflector',
      category: 'four-wheels',
      image: '/scraped_assets/products/lens2.png',
      tonnage: '120 Ton',
      material: 'Heat-Resistant ABS Metallizable',
      tolerance: '± 0.02 mm',
      standard: 'ASTM D256 / ISO 180',
      application: 'Direct Vacuum Metallizing Substrate',
      description: 'Part reflektor permukaan ultra-halus siap proses vacuum metallizing aluminium tanpa cacat outgassing.',
    },
    {
      id: '4w-7',
      name: 'Exterior Mirror Bracket & Base Mount',
      category: 'four-wheels',
      image: '/scraped_assets/products/outside.png',
      tonnage: '220 Ton',
      material: 'PA66-GF30 (Polyamide Glass Filled)',
      tolerance: '± 0.03 mm',
      standard: 'ISO 527-2 / ASTM D638',
      application: 'Door Frame Structural Mirror Mount',
      description: 'Braket struktural kekuatan beban tarik tinggi dengan ketahanan getaran kecepatan tinggi dan peredam resonansi.',
    },

    // Two Wheels
    {
      id: '2w-1',
      name: 'Complete Rear View Mirror Assembly (Suzuki)',
      category: 'two-wheels',
      image: '/scraped_assets/products/2w.jpeg',
      tonnage: '160 Ton',
      material: 'Impact Modified ABS & PP',
      tolerance: '± 0.03 mm',
      standard: 'SNI 09-0144 / JIS D5705',
      application: 'Suzuki Indomobil Motor OEM (Established 1997)',
      description: 'Produk pionir PT Citra Plastik Makmur sejak 1997, dirancang tahan getaran mesin motor dan cuaca tropis basah.',
    },
    {
      id: '2w-2',
      name: 'Inner Leg Shield & Panel Cowling',
      category: 'two-wheels',
      image: '/scraped_assets/products/inner.png',
      tonnage: '280 Ton',
      material: 'PP High Flow Scratch-Resistant',
      tolerance: '± 0.05 mm',
      standard: 'ASTM D1238 / ISO 1133',
      application: 'Motorcycle Front Interior Panel',
      description: 'Panel bodi dalam motor matic dengan tekstur mold graining halus anti-gores dan sistem clip snap-fit kuat.',
    },
    {
      id: '2w-3',
      name: 'CVT Weight Roller Bushing & Guide',
      category: 'two-wheels',
      image: '/scraped_assets/products/roler.png',
      tonnage: '80 Ton',
      material: 'POM (Polyoxymethylene / Acetal)',
      tolerance: '± 0.01 mm (Ultra Precision)',
      standard: 'ISO 178 / ASTM D695',
      application: 'Continuous Variable Transmission System',
      description: 'Komponen mekanikal gesek rendah tahan aus temperatur oli transmisi 120°C dengan akurasi berat roller ±0.05 gram.',
    },
    {
      id: '2w-4',
      name: 'Handle Throttle Grip Inner Core',
      category: 'two-wheels',
      image: '/scraped_assets/products/grip.png',
      tonnage: '60 Ton',
      material: 'PA6 Polyamide Unreinforced',
      tolerance: '± 0.02 mm',
      standard: 'ASTM D638',
      application: 'Motorcycle Handlebar Throttle Control',
      description: 'Pipa selongsong gas stang motor dengan ketahanan torsi putar dan kestabilan dimensi pada kelembapan tinggi.',
    },
    {
      id: '2w-5',
      name: 'Aerodynamic Mirror Outer Shell',
      category: 'two-wheels',
      image: '/scraped_assets/products/mirror.png',
      tonnage: '110 Ton',
      material: 'Engineering ABS Grade',
      tolerance: '± 0.025 mm',
      standard: 'ISO 179 Charpy Impact',
      application: 'OEM Sport & Scooter Mirror Housing',
      description: 'Cangkang spion aerodinamis dengan permukaan siap cat (paintable) ataupun finishing textured injection.',
    },
    {
      id: '2w-6',
      name: 'Upper Handlebar Cover & Speedo Mask',
      category: 'two-wheels',
      image: '/scraped_assets/products/upper.png',
      tonnage: '180 Ton',
      material: 'Impact Resistant ABS',
      tolerance: '± 0.03 mm',
      standard: 'ASTM D648 HDT @ 1.8 MPa',
      application: 'Motorcycle Cockpit Assembly',
      description: 'Cover atas batok stang dengan dudukan sakelar dan speedometer presisi tanpa gap sambungan.',
    },

    // Electricals & Industrial
    {
      id: 'el-1',
      name: 'Automotive Starter Solenoid Switch Housing',
      category: 'electricals',
      image: '/scraped_assets/products/start.png',
      tonnage: '90 Ton',
      material: 'PBT-GF30 Flame Retardant V-0',
      tolerance: '± 0.02 mm',
      standard: 'UL94 V-0 / IEC 60695-11-10',
      application: 'Automotive Starter Motor Electricals',
      description: 'Housing saklar solenoid berisolasi listrik tinggi tahan spark arc dan temperatur ruang mesin hingga 160°C.',
    },
    {
      id: 'el-2',
      name: 'Precision Rotary Selector Switch Knob',
      category: 'electricals',
      image: '/scraped_assets/products/knob-st.png',
      tonnage: '50 Ton',
      material: 'PA66 with Brass Metal Bushing Insert',
      tolerance: '± 0.015 mm',
      standard: 'DIN EN ISO 1874-1',
      application: 'HVAC Dashboard & Industrial Switch',
      description: 'Knob sakelar putar dengan proses insert molding metal bushing kuningan untuk daya tahan klik 100.000 siklus.',
    },
    {
      id: 'el-3',
      name: 'Electric Horn Resonator & Diaphragm Cover',
      category: 'electricals',
      image: '/scraped_assets/products/horn.png',
      tonnage: '70 Ton',
      material: 'PBT Impact Modified',
      tolerance: '± 0.02 mm',
      standard: 'ISO 527 / ASTM D792',
      application: 'Automotive & Motorcycle Electric Horn',
      description: 'Penutup resonator akustik klakson tahan air (IP67) dengan ketebalan dinding presisi menjaga frekuensi suara.',
    },
    {
      id: 'el-4',
      name: 'Heavy Duty Terminal Connector Body',
      category: 'electricals',
      image: '/scraped_assets/products/body.jpeg',
      tonnage: '110 Ton',
      material: 'PA66 Heat Stabilized (Non-Halogen V-0)',
      tolerance: '± 0.02 mm',
      standard: 'IEC 60664-1 / UL 94',
      application: 'Wire-to-Wire Harness Connection',
      description: 'Konektor wiring harness multi-pin dengan secondary lock retention mencegah kabel terlepas dari guncangan.',
    },
    {
      id: 'el-5',
      name: 'Digital kWh Meter Transparent Security Cover',
      category: 'electricals',
      image: '/scraped_assets/products/kwh1.png',
      tonnage: '150 Ton',
      material: 'Polycarbonate Optical High Impact',
      tolerance: '± 0.025 mm',
      standard: 'SPLN D3.006-1 / IEC 62052-11',
      application: 'State Electricity Utility (PLN) Digital Meter',
      description: 'Cover meteran listrik anti-tamper dengan segel ultrasonik, kejernihan optik tahan radiasi UV 10 tahun.',
    },
    {
      id: 'el-6',
      name: 'Industrial Air Filter Housing & Cyclonic Cap',
      category: 'electricals',
      image: '/scraped_assets/products/filter.png',
      tonnage: '160 Ton',
      material: 'PP Copolymer High Flow',
      tolerance: '± 0.04 mm',
      standard: 'ISO 5011 Filtration Test',
      application: 'Industrial Machinery & Compressor Filter',
      description: 'Wadah filter udara industri dengan alur aliran siklonik dan gasket groove kedap udara 100%.',
    },
    {
      id: 'el-7',
      name: 'Automotive Fuse & Relay Junction Box',
      category: 'electricals',
      image: '/scraped_assets/products/c-box.png',
      tonnage: '200 Ton',
      material: 'PA66-GF25 Flame Retardant',
      tolerance: '± 0.03 mm',
      standard: 'ISO 8820 / SAE J1171',
      application: 'Main Engine Bay Power Distribution Unit',
      description: 'Kotak sekring utama ruang mesin kendaraan dengan desain kedap air, tahan kontak kimia oli dan bahan bakar.',
    },
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section id="produk" className="py-16 bg-technical-darker border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
              <Layers className="w-4 h-4" />
              <span>CATALOG & TECHNICAL SPECIFICATIONS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-wide text-white">
              PORTOFOLIO PRODUK & KOMPONEN PRESISI TINGGI
            </h2>
          </div>
          <p className="font-mono text-xs text-gray-400 max-w-md">
            Dokumentasi foto produk riil manufaktur PT Citra Plastik Makmur. Klik setiap komponen untuk melihat toleransi teknis, material resin, dan standar pengujian ASTM/ISO.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-technical-border pb-4 mb-8">
          {[
            { id: 'four-wheels', label: 'FOUR WHEELS (RODA 4)' },
            { id: 'two-wheels', label: 'TWO WHEELS (RODA 2)' },
            { id: 'electricals', label: 'ELECTRICALS & INDUSTRIAL' },
            { id: 'all', label: 'SEMUA KATEGORI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-4 rounded font-heading text-xs uppercase tracking-wider transition-colors border ${
                activeTab === tab.id
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-neutral-900 text-gray-400 border-technical-border hover:text-white hover:border-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              className="bg-neutral-950 rounded-lg border border-technical-border hover:border-primary transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              {/* Image Container with Dark Precision Background */}
              <div className="relative h-48 w-full bg-neutral-900 flex items-center justify-center p-3 border-b border-technical-border/80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={280}
                  height={200}
                  className="max-h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300 filter contrast-105"
                />
                <span className="absolute top-2.5 left-2.5 font-mono text-[10px] px-2 py-0.5 rounded bg-neutral-950/80 border border-technical-border text-gray-300">
                  {item.tonnage}
                </span>
                <span className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] px-2 py-0.5 bg-primary text-white rounded flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>Detail Spek</span>
                </span>
              </div>

              {/* Specs & Description */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent uppercase mb-1">
                    <Tag className="w-3 h-3" />
                    <span>{item.category.replace('-', ' ')}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide group-hover:text-primary transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-technical-border/60 space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Material:</span>
                    <span className="text-gray-200 truncate max-w-[150px]">{item.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Toleransi:</span>
                    <span className="text-emerald-400 font-semibold">{item.tolerance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Standar:</span>
                    <span className="text-primary truncate max-w-[150px]">{item.standard}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Spesifikasi ASTM/ISO */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-neutral-950 border border-technical-border rounded-lg max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded hover:bg-neutral-900"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
                <FileText className="w-4 h-4" />
                <span>LEMBAR SPESIFIKASI TEKNIS PRODUK (TECHNICAL DATA SHEET)</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-4">
                {selectedProduct.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 bg-neutral-900 p-4 rounded border border-technical-border flex items-center justify-center">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={260}
                    height={200}
                    className="max-h-48 w-auto object-contain"
                  />
                </div>

                <div className="sm:col-span-7 space-y-2.5 font-mono text-xs">
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex justify-between">
                    <span className="text-gray-400">Kapasitas Tonnage:</span>
                    <span className="text-white font-bold">{selectedProduct.tonnage}</span>
                  </div>
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex justify-between">
                    <span className="text-gray-400">Material Resin:</span>
                    <span className="text-primary font-bold">{selectedProduct.material}</span>
                  </div>
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex justify-between">
                    <span className="text-gray-400">Toleransi Dimensi:</span>
                    <span className="text-emerald-400 font-bold">{selectedProduct.tolerance}</span>
                  </div>
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800 flex justify-between">
                    <span className="text-gray-400">Standar Pengujian:</span>
                    <span className="text-white">{selectedProduct.standard}</span>
                  </div>
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                    <span className="text-gray-400 block mb-1">Aplikasi Sistem:</span>
                    <span className="text-gray-200">{selectedProduct.application}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-300 font-sans mt-4 leading-relaxed bg-neutral-900/40 p-3 rounded border border-neutral-800">
                {selectedProduct.description}
              </p>

              <div className="mt-6 pt-4 border-t border-technical-border flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[11px] text-gray-400">
                  Ready for Tooling Optimization & High-Volume Delivery
                </span>
                <a
                  href="#kontak"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-dark font-heading uppercase text-xs font-semibold text-white rounded transition-colors"
                >
                  <span>Minta Penawaran Spesifikasi Serupa</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
