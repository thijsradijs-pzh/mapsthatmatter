// app/page.tsx
export default function Page(){
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="kicker">Open-source geospatial consulting</div>
          <h1 className="mt-3"
              style={{fontSize:'clamp(2rem, 2.5vw + 1rem, 3.5rem)', lineHeight:1.1}}>
            Ethical maps & reproducible spatial data pipelines
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl">
            I help governments, NGOs, and mission-driven teams design clear, defensible maps and scalable data workflows (H3, Sedona, Databricks, open standards).
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#contact">Start a project</a>
            <a className="btn btn-ghost" href="#projects">See projects</a>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="kicker">Projects</h2>
        <h3 className="text-2xl font-semibold mt-2">Selected work & public demos</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <ProjectCard title="Open Spatial Toolkit"
            blurb="Utilities for ETL, tiling, and H3/hex analysis."
            href="/projects/open-spatial-toolkit" />
          <ProjectCard title="Map Literacy Lab"
            blurb="Workshops and micro-courses on ethical map design."
            href="/projects/map-literacy-lab" />
          <ProjectCard title="Public Data Explorer"
            blurb="CBS/RIVM/Kadaster layers with provenance."
            href="/projects/public-data-explorer" />
        </div>
      </section>

      <section id="services" className="section">
        <h2 className="kicker">Services</h2>
        <div className="grid gap-4 md:grid-cols-2 mt-3">
          <ServiceItem head="Spatial data engineering"
            body="Databricks, Sedona/Spark, Parquet-first pipelines with quality checks and lineage." />
          <ServiceItem head="Ethical cartography"
            body="H3 hex layers, choropleths, and MCA with clear legends and disclosure guards." />
          <ServiceItem head="Open-data integration"
            body="CBS, RIVM, Kadaster — licensed, documented, and reproducible with provenance." />
          <ServiceItem head="Workshops & talks"
            body="Fundamentals of open mapping and spatial storytelling for non-specialists." />
        </div>
      </section>

      <section id="writing" className="section">
        <h2 className="kicker">Writing</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <PostLink title="Choosing the right hex size for policy maps" date="2025-06-12" href="/blog/hex-size" />
          <PostLink title="Ethics of aggregation: when not to map" date="2025-04-29" href="/blog/ethics-aggregation" />
          <PostLink title="From shapefiles to Parquet: a pragmatic pipeline" date="2025-02-07" href="/blog/shp-to-parquet" />
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="kicker">Contact</h2>
        <div className="card p-6 mt-3">
          <p className="text-[var(--muted)]">Briefly describe your project and goals. I typically reply within 1–2 business days.</p>
          <form className="mt-4 grid gap-3 max-w-xl" action="https://formspree.io/f/yourid" method="POST">
            <input className="card p-3" name="name" placeholder="Your name" required />
            <input className="card p-3" name="email" type="email" placeholder="Email" required />
            <textarea className="card p-3" name="message" rows={5} placeholder="Project goals, data sources, timeline"></textarea>
            <button className="btn btn-primary w-max">Send</button>
          </form>
        </div>
      </section>
    </>
  )
}

function ProjectCard({title, blurb, href}:{title:string; blurb:string; href:string}){
  return (
    <a className="card p-5 hover:scale-[1.01] transition" href={href}>
      <div className="text-sm text-[var(--accent-2)]">{title}</div>
      <div className="mt-1 text-[var(--muted)]">{blurb}</div>
    </a>
  )
}
function ServiceItem({head, body}:{head:string; body:string}){
  return (
    <div className="card p-5">
      <div className="font-semibold">{head}</div>
      <p className="text-[var(--muted)] mt-1">{body}</p>
    </div>
  )
}
function PostLink({title, date, href}:{title:string; date:string; href:string}){
  return (
    <a className="card p-5 hover:scale-[1.01] transition" href={href}>
      <div className="text-sm text-[var(--muted)]">{date}</div>
      <div className="mt-1 font-medium">{title}</div>
    </a>
  )
}
