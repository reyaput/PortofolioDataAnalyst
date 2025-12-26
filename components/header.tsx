"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useEffect } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(saved ? saved === "dark" : prefersDark)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")

    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reynanda Arya Putra</h1>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="#hero" className="text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#experience" className="text-sm hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="text-sm hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </Link>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-4">
          <Link href="#hero" className="block text-sm hover:text-primary">
            Home
          </Link>
          <Link href="#experience" className="block text-sm hover:text-primary">
            Experience
          </Link>
          <Link href="#projects" className="block text-sm hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="block text-sm hover:text-primary">
            Contact
          </Link>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span className="text-sm">{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          )}
        </div>
      )}
    </header>
  )
}
