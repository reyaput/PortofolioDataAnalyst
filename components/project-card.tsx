"use client"

import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group border border-border rounded-lg p-6 bg-background hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer h-full flex flex-col">
      <div className="mb-6 aspect-video bg-muted rounded-md flex items-center justify-center text-5xl border border-border group-hover:border-primary transition-colors">
        {project.image}
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

      <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.summary}</p>

      <div className="mb-4">
        <p className="text-xs text-primary font-semibold mb-2">{project.impact}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground border border-border">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
        View Case Study
        <ArrowUpRight size={16} className="ml-2" />
      </div>
    </div>
  )
}
