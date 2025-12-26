"use client"

import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// Nanti uncomment baris di bawah ini jika sudah siap pakai gambar asli
// import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">

          {/* === TEXT CONTENT === */}
          <div className="flex-1 max-w-2xl text-center md:text-left md:pr-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing & <span className="text-muted-foreground">Data Enthusiast</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Turning Data into Strategy</p>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
              Saya menggabungkan pemahaman digital marketing dengan kemampuan teknis dan pembuatan dashboard untuk membantu perusahaan menganalisis data, dan menghasilkan insight yang mendukung pengambilan keputusan berbasis data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a
                href="/CV_ReynandaAryaPutra.pdf"
                download="CV_ReynandaAryaPutra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          {/* === PROFILE AVATAR SECTION === */}
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Container Lingkaran Luar (Gradient Ring) - Ukuran responsif di sini */}
            <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-muted to-muted-foreground p-1 flex-shrink-0">
              
              {/* ========================================= */}
              {/* VERSI MOBILE (Tampil di HP, Sembunyi di Desktop) */}
              {/* Perhatikan class: block md:hidden */}
              {/* ========================================= */}
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-2 border-border overflow-hidden block md:hidden relative">
                 {/* CONTOH Placeholder Mobile */}
                  <Image
                    src="/fototerbaru.jpg"
                    alt="Profile Mobile"
                    fill                           // Agar gambar mengisi penuh lingkaran parent-nya
                    className="object-cover"       // Agar gambar tidak gepeng/terdistorsi (crop otomatis)
                    priority                       // Opsional: Agar loading lebih cepat karena ini di Hero section
                  />
                 {/* NANTI GANTI DENGAN INI KALAU SUDAH ADA GAMBAR ASLI:
                 <Image 
                   src="/foto-mobile.jpg" // Pastikan foto ada di folder public
                   alt="Profile Mobile"
                   fill
                   className="object-cover"
                 /> 
                 */}
              </div>

              {/* ========================================= */}
              {/* VERSI DESKTOP (Sembunyi di HP, Tampil di Desktop) */}
              {/* Perhatikan class: hidden md:block */}
              {/* ========================================= */}
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-2 border-border overflow-hidden hidden md:block relative">
                {/* CONTOH Placeholder Desktop */}
                <Image 
                  src="/fototerbaru.jpg" 
                  alt="Profile Desktop"
                  fill                           // Agar gambar mengisi penuh lingkaran parent-nya
                  className="object-cover"       // Agar gambar tidak gepeng/terdistorsi (crop otomatis)
                  priority                       // Opsional: Agar loading lebih cepat karena ini di Hero section
                />
                {/* NANTI GANTI DENGAN INI KALAU SUDAH ADA GAMBAR ASLI:
                 <Image 
                   src="/foto-desktop.jpg" // Foto berbeda di folder public
                   alt="Profile Desktop"
                   fill
                   className="object-cover"
                 /> 
                 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}