import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { Project } from "@/app/page"
import { ExternalLink, Github } from "lucide-react" // 1. Import Icon

interface ProjectsGridProps {
  data: Project[]
}

export default function ProjectsGrid({ data }: ProjectsGridProps) {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Portfolio Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          
          {data.map((project) => (
            <div 
              key={project._id} 
              className="group flex flex-col relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
            >
              
              {/* Gambar Project */}
              {/* Kita buat gambarnya juga bisa diklik jika ada linknya */}
              <div className="aspect-video relative w-full overflow-hidden bg-muted">
                {project.mainImage && (
                  <>
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay Link saat hover (Opsional, efek visual tambahan) */}
                    {project.projectLink && (
                       <a 
                         href={project.projectLink}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="absolute inset-0 z-10"
                         aria-label={`View ${project.title}`}
                       />
                    )}
                  </>
                )}
              </div>

              {/* Konten Text */}
              {/* Tambahkan flex-1 agar konten mengisi ruang, dan justify-between agar link terdorong ke bawah jika konten pendek */}
              <div className="p-4 flex flex-col flex-1">
                <div>
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4 font-medium">
                    {project.impact}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* --- 2. Link Section (Footer Card) --- */}
                <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-3">
                  
                  {/* Tombol View Project (Primary / Solid) */}
                  {project.projectLink && (
                    <a 
                      href={project.projectLink}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      View Chart 
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {/* Tombol Code / GitHub (Secondary / Outline) */}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      Code 
                      <Github size={16} />
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}