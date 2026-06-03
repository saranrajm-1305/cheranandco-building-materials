import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Cement, Steel, Blocks, Sand | Cheran & Co." },
      { name: "description", content: "Complete range of building materials — cement, TMT bars, concrete blocks, M-sand, river sand, aggregates and bricks. Delivered in Coimbatore." },
      { property: "og:title", content: "Products — Cheran & Co." },
      { property: "og:description", content: "Cement, steel, blocks, sand, aggregates & more — delivered across Coimbatore." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const products = [
  { name: "Cement", brands: "Ramco · UltraTech · Dalmia · Coromandel", desc: "OPC 43 & 53 grade, PPC and PSC cement in 50kg bags. Available in any quantity from a single bag to full truckloads." },
  { name: "Steel & TMT Bars", brands: "Fe 500 · Fe 550 · Fe 600", desc: "Premium TMT bars in 8mm, 10mm, 12mm, 16mm, 20mm and 25mm sizes from leading brands like TATA Tiscon, JSW and Vizag." },
  { name: "Concrete Blocks", brands: "Solid · Hollow · AAC", desc: "Manufactured on-site with high-grade aggregates. Available in 4\", 6\", 8\" and custom sizes for walls and partitions." },
  { name: "M-Sand & River Sand", brands: "Plastering · Concreting", desc: "Washed, sieved and graded sand for plastering, masonry and concreting work. Consistent quality, prompt delivery." },
  { name: "Aggregates / Jelly", brands: "20mm · 12mm · 40mm", desc: "Crushed stone aggregates for RCC, foundations and road works. Sourced from reputed quarries." },
  { name: "Bricks", brands: "Red · Fly-ash · AAC", desc: "Traditional red bricks, eco-friendly fly-ash bricks and lightweight AAC blocks — choose what suits your project best." },
  { name: "Plumbing & Electrical", brands: "On Request", desc: "Pipes, fittings, wires and basic electrical supplies — ask us for what you need and we'll arrange it." },
  { name: "Hardware & Tools", brands: "On Request", desc: "Nails, binding wire, tools and accessories to keep your site moving without trips to multiple shops." },
];

function ProductsPage() {
  return (
    <>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="text-xs uppercase tracking-widest text-accent">Our Products</div>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Everything You Need to Build</h1>
          <p className="mt-5 text-white/80">From foundation to finishing — explore our full range of building materials.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <div key={p.name} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy font-serif text-base font-bold text-accent">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-[11px] uppercase tracking-widest text-accent">{p.brands}</div>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-bold text-navy">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-accent">Enquire Now <ArrowRight className="h-4 w-4" /></Link>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-accent py-14 text-accent-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Need something not listed here?</h2>
            <p className="mt-1 text-sm opacity-90">We arrange custom orders for almost any building material — just ask.</p>
          </div>
          <Link to="/contact" className="rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]">Talk to Us</Link>
        </div>
      </section>
    </>
  );
}