import { useState } from "react";
import { toast } from "sonner";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = f.get("name");
    const phone = f.get("phone");
    const product = f.get("product") || "General Enquiry";
    const message = f.get("message") || "";
    const text = `Hi Cheran & Co.,%0A%0AName: ${name}%0APhone: ${phone}%0AInterested in: ${product}%0A%0A${message}`;
    setSending(true);
    setTimeout(() => {
      window.open(`https://wa.me/919865467787?text=${text}`, "_blank");
      toast.success("Thanks! Redirecting you to WhatsApp to confirm your quote request.");
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 300);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className={compact ? "grid gap-3 md:grid-cols-2" : "grid gap-3"}>
        <input required name="name" placeholder="Your Name" className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
        <input required name="phone" type="tel" placeholder="Phone Number" className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
      </div>
      <select name="product" defaultValue="" className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent">
        <option value="" disabled>Select a product</option>
        <option>Cement</option>
        <option>Steel / TMT Bars</option>
        <option>Concrete Blocks</option>
        <option>M-Sand / River Sand</option>
        <option>Aggregates / Jelly</option>
        <option>Bricks</option>
        <option>Other</option>
      </select>
      <textarea name="message" rows={compact ? 2 : 4} placeholder="Tell us about your project (optional)" className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" />
      <button disabled={sending} className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] disabled:opacity-60">
        {sending ? "Sending…" : "Get Free Quote"}
      </button>
      <p className="text-center text-xs text-muted-foreground">We typically respond within 15 minutes — 24/7</p>
    </form>
  );
}