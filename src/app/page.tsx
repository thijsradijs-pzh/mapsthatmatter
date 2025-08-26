"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Map, Menu } from "lucide-react";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

const projects = [
  { title: "Open Spatial Toolkit", blurb: "Open-source geospatial utilities for ETL, tiling, and H3/hex-based analysis.", href: "#" },
  { title: "Map Literacy Lab", blurb: "Workshops and micro-courses on ethical map-making and spatial storytelling.", href: "#" },
  { title: "Public Data Explorer", blurb: "Viewer for CBS/RIVM/Kadaster layers with provenance.", href: "#" },
];

const writings = [
  { title: "Choosing the right hex size for policy maps", date: "2025-06-12", href: "#" },
  { title: "Ethics of aggregation: when not to map", date: "2025-04-29", href: "#" },
  { title: "From shapefiles to Parquet: a pragmatic pipeline", date: "2025-02-07", href: "#" },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-lime-200">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <Map className="h-5 w-5" aria-hidden />
            <span>MapsThatMatter.org</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:opacity-70 transition-opacity">
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden p-2 rounded-lg border border-neutral-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-neutral-200">
            <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-2">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-1">{n.label}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="max-w-4xl mx-auto px-4 pt-14 pb-12">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Open-source geospatial consulting for the public good
        </motion.h1>
        <p className="mt-4 text-lg text-neutral-700 max-w-2xl">
          I help governments, NGOs, and mission-driven teams design ethical, clear maps and build reproducible spatial data pipelines. H3, Sedona, Databricks, and open standards.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">
            Start a project
          </a>
          <a href="#projects" className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50">
            See projects
          </a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
          <a href="#" className="flex items-center gap-1 hover:opacity-70"><Globe className="h-4 w-4"/>NL / EU based</a>
          <a href="https://github.com/" className="flex items-center gap-1 hover:opacity-70"><Github className="h-4 w-4"/>GitHub</a>
          <a href="https://www.linkedin.com/" className="flex items-center gap-1 hover:opacity-70"><Linkedin className="h-4 w-4"/>LinkedIn</a>
          <a href="mailto:hello@mapsthatmatter.org" className="flex items-center gap-1 hover:opacity-70"><Mail className="h-4 w-4"/>hello@mapsthatmatter.org</a>
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        <p className="text-neutral-700 mt-2">Selected work and public demos.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="group border border-neutral-200 rounded-2xl p-4 hover:shadow-sm transition">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium group-hover:underline">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="services" className="max-w-4xl mx-auto px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Services</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-neutral-700 list-disc pl-5">
          <li>Spatial data engineering (Databricks, Sedona, Spark, Parquet)</li>
          <li>Ethical cartography & map design (H3 hex layers, choropleths, MCA)</li>
          <li>Open-data integration (CBS, RIVM, Kadaster) with transparent provenance</li>
          <li>Workshops & talks: fundamentals of open mapping and storytelling</li>
        </ul>
      </section>

      <section id="writing" className="max-w-4xl mx-auto px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Writing</h2>
        <div className="mt-4 space-y-3">
          {writings.map((w) => (
            <a key={w.title} href={w.href} className="block group">
              <div className="flex items-center justify-between">
                <h3 className="font-medium group-hover:underline">{w.title}</h3>
                <time className="text-sm text-neutral-500">{w.date}</time>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-neutral-700">Briefly describe your project and goals. I typically reply within 1–2 business days.</p>
        <form className="mt-6 grid gap-3 max-w-xl" onSubmit={(e)=>e.preventDefault()}>
          <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Your name" />
          <input className="rounded-xl border border-neutral-300 px-3 py-2" type="email" placeholder="Email" />
          <textarea className="rounded-xl border border-neutral-300 px-3 py-2 min-h-[120px]" placeholder="Project details"></textarea>
          <button className="justify-self-start rounded-2xl border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">Send</button>
        </form>
      </section>

      <footer className="border-t border-neutral-200 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-sm text-neutral-600 flex flex-col md:flex-row gap-3 items-center justify-between">
          <p>© {new Date().getFullYear()} MapsThatMatter.org. Some rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" className="flex items-center gap-1 hover:opacity-70"><Github className="h-4 w-4"/>GitHub</a>
            <a href="https://www.linkedin.com/" className="flex items-center gap-1 hover:opacity-70"><Linkedin className="h-4 w-4"/>LinkedIn</a>
            <a href="mailto:hello@mapsthatmatter.org" className="flex items-center gap-1 hover:opacity-70"><Mail className="h-4 w-4"/>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
