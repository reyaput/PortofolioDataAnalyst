"use client"

import { useEffect, useRef } from "react"

const tools = [
  "Python",
  "SQL",
  "Power BI",
  "Google Sheets",
  "Pandas",
  "Scikit-learn",
  "Looker Studio",
  "Microsoft Fabric",
  "Google Colab",
  "Tableau",
]

export default function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    if (!scroll) return

    const scrollWidth = scroll.scrollWidth
    const clientWidth = scroll.clientWidth

    const animate = () => {
      if (scroll.scrollLeft >= scrollWidth - clientWidth) {
        scroll.scrollLeft = 0
      } else {
        scroll.scrollLeft += 1
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="border-b border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase">Tech Stack</h3>
        <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
          {[...tools, ...tools].map((tool, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-6 py-3 bg-background border border-border rounded-lg text-sm font-medium whitespace-nowrap hover:border-primary transition-colors"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
