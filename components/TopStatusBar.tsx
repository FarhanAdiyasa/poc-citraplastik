'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Mail, Clock, Activity } from 'lucide-react';

export default function TopStatusBar() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' WIB'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-technical-darker border-b border-technical-border text-xs text-gray-400 font-mono py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wider uppercase text-[11px]">
              PLANT OPERASIONAL 24/7 (3 PABRIK AKTIF)
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-gray-400 border-l border-technical-border pl-3">
            <Activity className="w-3.5 h-3.5 text-primary" />
            <span>55 Mesin Injeksi (40T - 850T)</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-gray-400 border-l border-technical-border pl-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>ISO 9001 & IATF 16949 Certified</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          {time && (
            <div className="hidden sm:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3 h-3 text-primary" />
              <span>{time}</span>
            </div>
          )}
          <a
            href="tel:+622189840210"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-primary" />
            <span>+62 21 89840210</span>
          </a>
          <a
            href="mailto:marketing@citraplastik.com"
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-accent" />
            <span>marketing@citraplastik.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
