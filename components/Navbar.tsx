'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight, MessageSquare, Wrench } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Tentang & Rekam Jejak', href: '#tentang' },
    { name: 'Layanan & Produk', href: '#produk' },
    { name: 'Kalkulator B2B', href: '#kalkulator' },
    { name: 'Fasilitas Pabrik', href: '#fasilitas' },
    { name: 'Kualitas & Sertifikasi', href: '#mutu' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Technical Brand Badge */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative p-1 bg-neutral-900 rounded border border-technical-border shadow-inner group-hover:border-primary transition-colors flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="PT Citra Plastik Makmur Logo"
                width={42}
                height={42}
                className="rounded-sm object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white uppercase leading-tight group-hover:text-primary transition-colors">
                PT Citra Plastik Makmur
              </span>
              <span className="font-mono text-[10px] text-gray-400 tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
                Plastic Injection Molding Specialist • Est. 1997
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading uppercase text-xs tracking-wider text-gray-300 hover:text-white px-3 py-2 rounded hover:bg-white/5 transition-colors border border-transparent hover:border-technical-border"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#kalkulator"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-gray-300 hover:text-white bg-technical-dark border border-technical-border hover:border-gray-500 rounded transition-colors"
            >
              <Wrench className="w-3.5 h-3.5 text-primary" />
              <span>Hitung Batch</span>
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-heading font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary-dark rounded transition-colors shadow-sm shadow-primary/30"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-technical-border bg-neutral-950 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded font-heading uppercase text-sm tracking-wider text-gray-200 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-technical-border"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <a
              href="#kalkulator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 font-mono text-xs text-gray-200 bg-neutral-900 border border-technical-border rounded"
            >
              <Wrench className="w-4 h-4 text-primary" />
              <span>Estimator Batch Order</span>
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 font-heading uppercase tracking-wider text-xs font-semibold text-white bg-primary rounded"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Konsultasi & Penawaran B2B</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
