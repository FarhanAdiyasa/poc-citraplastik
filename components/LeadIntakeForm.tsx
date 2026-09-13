'use client';

import React, { useState } from 'react';
import { Mail, Phone, Building2, Send, CheckCircle2, AlertCircle, FileSpreadsheet, MessageSquare } from 'lucide-react';

export default function LeadIntakeForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Four Wheels Parts');
  const [details, setDetails] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Indonesian phone validation: starts with 08 or +628, min 10 digits, max 15 digits
  const validateIndonesianPhone = (phone: string) => {
    const cleaned = phone.replace(/[\s-]/g, '');
    const regex = /^(08|\+628)[0-9]{8,12}$/;
    return regex.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Nama lengkap wajib diisi.';
    if (!company.trim()) newErrors.company = 'Nama perusahaan / instansi wajib diisi.';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Alamat email bisnis tidak valid.';

    if (!whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp wajib diisi.';
    } else if (!validateIndonesianPhone(whatsapp)) {
      newErrors.whatsapp = 'Format nomor WhatsApp Indonesia harus diawali 08xx atau +628xx (10-14 digit).';
    }

    if (!details.trim()) {
      newErrors.details = 'Mohon sertakan ringkasan spesifikasi part, estimasi batch, atau kebutuhan tooling.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const createWhatsAppLink = () => {
    const cleanedPhone = '6281289840210'; // Marketing / CPM WhatsApp
    const message = `Halo Tim Marketing & Engineering PT Citra Plastik Makmur,
Saya: ${name}
Perusahaan: ${company}
Email: ${email}
No. WhatsApp: ${whatsapp}
Jenis Kebutuhan: ${serviceType}
Detail Spesifikasi:
${details}

Mohon informasi ketersediaan kapasitas mesin dan estimasi penawaran harga (RFQ). Terima kasih.`;

    return `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="kontak" className="py-16 bg-[#111111] border-b border-technical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Technical Inquiry Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span>REQUEST FOR QUOTATION (RFQ) & TECHNICAL CONSULTATION</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-wide text-white">
              KONSULTASI TEKNIS & PENGAJUAN PENAWARAN B2B
            </h2>

            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              Tim engineering kami siap meninjau gambar teknis (2D/3D CAD: STEP, IGES, DXF), spesifikasi toleransi cetakan, dan kebutuhan volume batch produksi Anda.
            </p>

            <div className="p-5 rounded-lg bg-neutral-950 border border-technical-border space-y-4 font-mono text-xs">
              <div className="flex items-start gap-3">
                <FileSpreadsheet className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block uppercase">Waktu Respon DFM & RFQ:</span>
                  <span className="text-gray-400">1x24 Jam Kerja untuk peninjauan kelayakan awal cetakan (Design for Manufacturing).</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block uppercase">Kunjungan Audit Pabrik:</span>
                  <span className="text-gray-400">Terbuka untuk audit vendor & lini produksi di 3 lokasi pabrik Kawasan Industri Jababeka 1 Cikarang.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block uppercase">Layanan Kantor Pusat:</span>
                  <span className="text-gray-300 font-sans">+62 21 89840210 (Senin - Jumat, 08:00 - 17:00 WIB)</span>
                  <span className="text-gray-400 block">marketing@citraplastik.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-lg border border-technical-border shadow-2xl">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-white">
                  Permintaan Penawaran Berhasil Diterima
                </h3>
                <p className="text-xs text-gray-300 font-sans max-w-md mx-auto leading-relaxed">
                  Terima kasih, {name} dari <strong>{company}</strong>. Tim Engineering PT Citra Plastik Makmur akan menghubungi Anda melalui email <strong>{email}</strong> atau WhatsApp <strong>{whatsapp}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 font-heading uppercase text-xs font-bold text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Buka Chat Langsung via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setCompany('');
                      setWhatsapp('');
                      setEmail('');
                      setDetails('');
                    }}
                    className="px-4 py-2.5 rounded bg-neutral-900 border border-technical-border text-xs font-mono text-gray-400 hover:text-white"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-technical-border pb-3 mb-2">
                  <h3 className="font-heading uppercase text-base font-bold text-white tracking-wide">
                    FORMULIR INTAKE KEBUTUHAN PRODUKSI (RFQ)
                  </h3>
                  <p className="font-mono text-[11px] text-gray-400">
                    Lengkapi parameter kebutuhan di bawah ini untuk kalkulasi penawaran resmi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1 uppercase">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-neutral-900 border border-technical-border rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-primary"
                    />
                    {errors.name && <span className="text-[10px] text-accent font-mono block mt-1">{errors.name}</span>}
                  </div>

                  {/* Perusahaan */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1 uppercase">
                      Perusahaan / PT / Instansi *
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Contoh: PT Manufaktur Otomotif Indonesia"
                      className="w-full bg-neutral-900 border border-technical-border rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-primary"
                    />
                    {errors.company && <span className="text-[10px] text-accent font-mono block mt-1">{errors.company}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp (08xx) */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1 uppercase">
                      WhatsApp (Format Indonesia: 08xx) *
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full bg-neutral-900 border border-technical-border rounded px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-primary"
                    />
                    {errors.whatsapp && <span className="text-[10px] text-accent font-mono block mt-1">{errors.whatsapp}</span>}
                  </div>

                  {/* Email Bisnis */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1 uppercase">
                      Email Bisnis Resmi *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Contoh: procurement@perusahaan.co.id"
                      className="w-full bg-neutral-900 border border-technical-border rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-primary"
                    />
                    {errors.email && <span className="text-[10px] text-accent font-mono block mt-1">{errors.email}</span>}
                  </div>
                </div>

                {/* Jenis Kebutuhan Dropdown */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1 uppercase">
                    Jenis Kebutuhan Komponen Plastik:
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-neutral-900 border border-technical-border rounded px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-primary"
                  >
                    <option value="Four Wheels Parts">Four Wheels Parts (Komponen Otomotif Roda 4 / Lampu / Eksterior)</option>
                    <option value="Two Wheels Parts">Two Wheels Parts (Spion, Inner Cover, Roller CVT Roda 2)</option>
                    <option value="Electrical Parts">Electrical Parts (Terminal Box, Solenoid, kWh Meter, Switch)</option>
                    <option value="Custom Injection Molding">Custom Injection Molding (Tooling Baru / Pengalihan Mold)</option>
                  </select>
                </div>

                {/* Detail Spesifikasi */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1 uppercase">
                    Detail Spesifikasi Teknis / Kebutuhan Batch:
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Sebutkan estimasi kuantitas batch, dimensi atau berat part, tipe resin plastik (PP/ABS/PA66/dll), ketersediaan mold eksisting, atau kebutuhan DFM baru..."
                    className="w-full bg-neutral-900 border border-technical-border rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-primary"
                  ></textarea>
                  {errors.details && <span className="text-[10px] text-accent font-mono block mt-1">{errors.details}</span>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded bg-primary hover:bg-primary-dark font-heading uppercase text-xs sm:text-sm font-bold tracking-wider text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permintaan Penawaran Resmi (RFQ)</span>
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] font-mono text-gray-400">
                    Kerahasiaan data teknis & gambar 3D dilindungi dengan perjanjian kerahasiaan (NDA) standar industri.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
