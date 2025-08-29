// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'MapsThatMatter — Ethical maps & reproducible geospatial',
  description:
    'Open-source geospatial consulting for the public good. H3, Sedona, Databricks, open standards.',
  metadataBase: new URL('https://mapsthatmatter.io'),
  openGraph: {
    title: 'MapsThatMatter',
    description: 'Ethical cartography & reproducible spatial data pipelines.',
    url: 'https://mapsthatmatter.io',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="grid-bg" />
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Nav(){
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-[var(--line)]">
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="font-semibold">MapsThatMatter</a>
        <nav className="hidden sm:flex gap-6 text-sm text-[var(--muted)]">
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-primary" href="#contact">Start a project</a>
      </div>
    </header>
  )
}

function Footer(){
  return (
    <footer className="section">
      <div className="container grid gap-6 sm:grid-cols-2">
        <div>
          <div className="kicker">NL / EU based</div>
          <p className="text-[var(--muted)] mt-2">
            Open-source geospatial consulting for the public good.
          </p>
        </div>
        <div className="sm:text-right space-x-4">
          <a href="mailto:hello@mapsthatmatter.org">hello@mapsthatmatter.org</a>
          <a href="https://github.com/thijsradijs-pzh/mapsthatmatter" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <div className="container text-xs text-[var(--muted)] mt-6">© 2025 MapsThatMatter.org • Some rights reserved.</div>
    </footer>
  )
}
