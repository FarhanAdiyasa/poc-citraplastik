'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

export default function TechnicalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-technical-border text-gray-400 font-sans text-xs">
      {/* Upper Footer: 3 Plants & Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-neutral-900 rounded border border-technical-border">
                <Image
                  src="/logo.png"
                  alt="PT Citra Plastik Makmur"
                  width={38}
                  height={38}
                  className="rounded-sm object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold tracking-wider text-white uppercase block">
                  PT CITRA PLASTIK MAKMUR
                </span>
                <span className="font-mono text-[10px] text-accent tracking-wider uppercase block">
                  Plastic Injection Molding Specialist
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed font-sans text-xs">
              Didirikan sejak 1997, PT Citra Plastik Makmur adalah perusahaan manufaktur spesialis injeksi plastik presisi tinggi untuk industri otomotif (roda empat & dua), elektrikal, dan perakitan industri nasional maupun multinasional.
            </p>

            <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Telepon: +62 21 89840210</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>Email: marketing@citraplastik.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Operasional Kantor: Senin - Jumat (08:00 - 17:00 WIB)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Plant Locations */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white border-b border-technical-border pb-2 flex items-center justify-between">
              <span>LOKASI TIGA PABRIK PRODUKSI (CIKARANG)</span>
              <span className="font-mono text-[10px] text-primary">KAWASAN INDUSTRI JABABEKA 1</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                <span className="font-mono text-primary font-bold block text-[11px] uppercase">
                  PLANT 1 (HEAD OFFICE & HEAVY TONNAGE):
                </span>
                <p className="text-gray-300 mt-0.5">
                  Jl. Jababeka XIV A, Blok J4F, Kawasan Industri Jababeka 1, Desa Harjamekar, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat
                </p>
              </div>

              <div className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                <span className="font-mono text-accent font-bold block text-[11px] uppercase">
                  PLANT 2 (ASSEMBLY & 2W MOTORCYCLE MIRROR):
                </span>
                <p className="text-gray-300 mt-0.5">
                  Jl. Jababeka G, Blok CC No. 6 – 7, Kawasan Industri Jababeka 1, Desa Pasir Gombong, Lemah Abang, Bekasi 17530, Jawa Barat
                </p>
              </div>

              <div className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                <span className="font-mono text-emerald-400 font-bold block text-[11px] uppercase">
                  PLANT 3 (ELECTRICALS & PRECISION HIGH-SPEED):
                </span>
                <p className="text-gray-300 mt-0.5">
                  Jl. Jababeka XIB, Blok K No. 10A, Kawasan Industri Jababeka 1, Desa Harjamekar, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation & Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white border-b border-technical-border pb-2">
              NAVIGASI & DOKUMEN TEKNIS
            </h4>

            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="#tentang" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="text-gray-600">›</span> Profil Perusahaan & Sejarah 1997
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="text-gray-600">›</span> Katalog Four Wheels & Two Wheels
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="text-gray-600">›</span> Estimator Batch & Tonnage (40T - 850T)
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="text-gray-600">›</span> Fasilitas & Spesifikasi Mesin
                </a>
              </li>
              <li>
                <a href="#mutu" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="text-gray-600">›</span> Sertifikasi IATF 16949 / ISO 9001
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="text-gray-600">›</span> Permintaan Penawaran (RFQ)
                </a>
              </li>
            </ul>

            <div className="pt-3 border-t border-technical-border">
              <span className="font-mono text-[10px] text-gray-400 block uppercase mb-1">Status Kepatuhan:</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Accident Record (P2K3)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-technical-border/80 bg-black/60 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} PT. CITRA PLASTIK MAKMUR. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Standar Manufaktur ASTM / ISO / JIS</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
