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
                Saya adalah mahasiswa Ilmu Komputer tingkat akhir di Universitas Negeri Jakarta dengan 
                ketertarikan pada digital marketing dan pengolahan data. Saya aktif mengembangkan 
                diri melalui berbagai kegiatan, mulai dari magang, organisasi, seminar dan bootcamp di bidang 
                data dan teknologi.
              </p>
              <p>
                Ketertarikan saya pada data mendorong saya untuk terus mempelajari bagaimana data 
                dapat digunakan sebagai dasar pengambilan keputusan. Saya memiliki pengalaman 
                mengolah data, menyusun laporan dan dashboard, serta memahami metrik kinerja untuk 
                mengevaluasi efektivitas strategi. Saya juga terbiasa beradaptasi dengan tools dan teknologi 
                baru yang mendukung analisis dan automasi proses.
              </p>
              <p>
                Dalam portofolio saya sebagai Digital Marketing & Data Enthusiast, saya mempunyai 
                berbagai proyek yang menggabungkan strategi pemasaran dengan analitik data, seperti 
                pembangunan dashboard performa, tracking metrik kampanye, serta pengembangan tools 
                sederhana untuk mendukung reporting dan pengambilan insight.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}