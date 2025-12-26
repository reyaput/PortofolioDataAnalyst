import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Konfigurasi koneksi ke Sanity
export const client = createClient({
  projectId: 'hhkme831', // <--- Cek langkah di bawah
  dataset: 'production',
  apiVersion: '2023-05-03', // Gunakan tanggal hari ini atau biarkan ini
  useCdn: false, // false agar data update real-time saat development
})

// Helper untuk memproses gambar dari Sanity
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}