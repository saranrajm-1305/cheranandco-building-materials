import { createFileRoute } from "@tanstack/react-router";
import ch1 from "@/assets/ch1.asset.json";
import ch2 from "@/assets/ch2.asset.json";
import ch3 from "@/assets/ch3.asset.json";
import ch4 from "@/assets/ch4.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cheran & Co. Building Materials Yard" },
      { name: "description", content: "A look inside Cheran & Co.'s yard in Podanur, Coimbatore — concrete blocks, cement stock and project sites we've supplied." },
      { property: "og:title", content: "Gallery — Cheran & Co." },
      { property: "og:description", content: "A look inside our yard and projects across Coimbatore." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: ch1.url, t: "Concrete Block Production" },
  { src: ch3.url, t: "Ramco Cement Stock" },
  { src: ch4.url, t: "Cheran & Co. Yard Entrance" },
  { src: ch2.url, t: "Project Site Delivery" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="text-xs uppercase tracking-widest text-accent">Our Gallery</div>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">A Look Inside Our Yard</h1>
          <p className="mt-5 text-white/80">Real photos from our Podanur facility and project sites across the region.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img src={it.src} alt={it.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-5 text-primary-foreground">
                <div className="font-serif text-lg font-bold">{it.t}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}