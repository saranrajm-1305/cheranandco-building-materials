import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, ClipboardList, Headphones, Package, MapPinned, Calculator, Construction } from "lucide-react";
import jcbImg from "@/assets/rental-jcb.jpg";
import dumpImg from "@/assets/rental-dumptruck.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Delivery, Bulk Supply, Site Support | Cheran & Co." },
      { name: "description", content: "Site delivery, bulk supply for contractors, project consultation and 24/7 support across Coimbatore." },
      { property: "og:title", content: "Services — Cheran & Co." },
      { property: "og:description", content: "Delivery, bulk supply, project consultation and 24/7 support in Coimbatore." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { i: Truck, t: "Site Delivery", d: "We deliver to your construction site across Coimbatore — on time, every time." },
  { i: Package, t: "Bulk Supply for Projects", d: "Special pricing and dedicated logistics for builders, contractors and large-scale projects." },
  { i: Calculator, t: "Quantity Estimation", d: "Not sure how much you need? Share your plan — we'll help you estimate quantities and budget." },
  { i: ClipboardList, t: "Project Consultation", d: "Tap into our experience to choose the right materials and brands for every stage of construction." },
  { i: Headphones, t: "24/7 Customer Support", d: "Whether it's 3 PM or 3 AM, our team picks up the phone. Emergencies and last-minute orders welcome." },
  { i: MapPinned, t: "Region-Wide Coverage", d: "Serving Podanur, Madukkarai, Sundarapuram, Kuniyamuthur, Pollachi Road and the wider Coimbatore region." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="text-xs uppercase tracking-widest text-accent">What We Offer</div>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Beyond Supply — Real Service</h1>
          <p className="mt-5 text-white/80">We don't just deliver materials. We deliver convenience, expertise and peace of mind.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-accent transition-transform group-hover:scale-110"><s.i className="h-6 w-6" /></div>
              <h3 className="mt-5 font-serif text-xl font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-center font-serif text-3xl font-bold text-navy md:text-4xl">How It Works</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Tell Us Your Need", d: "Call us or WhatsApp your requirement." },
              { n: "02", t: "Get a Quick Price", d: "We confirm pricing within 15 minutes." },
              { n: "03", t: "Confirm & Schedule", d: "Pick a delivery time that suits you." },
              { n: "04", t: "Receive at Site", d: "Materials arrive on time, inspected." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="font-serif text-3xl font-bold text-accent">{step.n}</div>
                <div className="mt-3 font-serif text-lg font-bold text-navy">{step.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="tel:+919865467787" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]">Call Now — +91 98654 67787</a>
          </div>
        </div>
      </section>
    </>
  );
}