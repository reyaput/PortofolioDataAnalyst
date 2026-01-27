import { Experience } from "@/app/page"
import { PortableText } from "@portabletext/react"

interface AboutProps {
  id?: string
  data: Experience[]
}

// Helper: Fungsi untuk mengubah "2023-10-01" menjadi "Oct 2023"
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  
  // Array nama bulan pendek
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Split string tanggal (YYYY-MM-DD)
  const [year, month] = dateString.split('-');
  
  // Ambil nama bulan berdasarkan index (kurangi 1 karena array mulai dari 0)
  const monthName = months[parseInt(month) - 1];
  
  return `${monthName} ${year}`;
}

const components = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
  },
}

export default function About({ id = "about", data }: AboutProps) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold mb-12">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* KOLOM KIRI: TIMELINE */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Professional Journey</h3>
            <div className="space-y-8">
              {data.map((item) => (
                <div key={item._id} className="border-l-2 border-border pl-6 pb-6 relative">
                  
                  {/* Dot Indikator */}
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />
                  
                  {/* TANGGAL DENGAN FORMAT BULAN & TAHUN */}
                  <p className="text-sm text-primary font-semibold">
                    {formatDate(item.startDate)} — {item.endDate ? formatDate(item.endDate) : "Present"}
                  </p>
                  
                  <h4 className="text-lg font-bold mt-2">{item.role}</h4>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                  
                  <div className="mt-2">
                    {item.description && (
                       <PortableText value={item.description} components={components} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: ABOUT ME */}
          <div>
            <h3 className="text-xl font-semibold mb-8">About Me</h3>
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                Sebagai mahasiswa tingkat akhir Ilmu Komputer di Universitas Negeri Jakarta, saya memiliki fokus mendalam untuk menjembatani kesenjangan antara teknologi, pengolahan data, dan strategi bisnis. Saya tidak hanya melihat data sebagai angka, tetapi sebagai fondasi utama dalam pengambilan keputusan strategis. Berbekal kemampuan teknis dalam Python (Pandas, Scikit-Learn), SQL, dan Machine Learning, saya telah berhasil membangun model prediksi bisnis dengan akurasi tinggi serta dashboard visualisasi menggunakan Power BI, Tableau, dan Looker Studio untuk mempermudah pemantauan kinerja.
              </p>
              <p>
                Pengalaman saya tidak berhenti tentang coding, saya juga terjun langsung ke dunia Digital Marketing dengan pendekatan berbasis data. Saya pernah mengelola strategi kampanye KOL yang sukses menghasilkan total 3.3 juta views, membuktikan bahwa gabungan antara intuisi pemasaran dan analisis data yang akurat dapat menciptakan dampak nyata. Saya adalah pembelajar cepat yang selalu antusias mengadopsi teknologi baru untuk efisiensi operasional. Temukan detail proyek analisis dan studi kasus.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}