"use client"

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/reynandaaryap/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/reyaput", label: "GitHub" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=ariyapel@gmail.com", label: "Email" },
  ]

  return (
    <footer id="contact" className="bg-muted/20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold mb-6">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-3 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                    title={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Get In Touch</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Let's collaborate on data projects or discuss analytics strategies.
            </p>
            <a
              // Ganti href di sini:
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ariyapel@gmail.com"
              target="_blank" // Wajib: Buka di tab baru
              rel="noopener noreferrer" // Keamanan untuk target blank
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
            >
              Send me an email
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
