"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  "Sod Installation",
  "Softscaping & Gardens",
  "Retaining Walls",
  "Interlock Driveway",
  "Interlock Walkway",
  "Interlock Patio",
  "Outdoor Staircases",
  "Outdoor Lighting",
  "Lawn Maintenance",
  "Other",
];

export default function AboutForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="estimate" className="relative overflow-hidden px-4 py-16 lg:py-24">
      <Image
        src="/images/about/about-form-background.png"
        alt="Outdoor landscaping background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-evergreen-950/85 via-evergreen-950/80 to-charcoal/90" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="rounded-3xl border border-white/12 bg-white/10 p-8 shadow-luxury backdrop-blur-md sm:p-10">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-gold">Free Estimate</p>
          <div className="mb-5 h-px w-10 bg-gold/70" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl">
            Get A Free Landscaping Estimate
          </h2>
          <p className="mt-3 text-sm leading-6 text-warm-white/70">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>

          {sent ? (
            <div className="mt-8 rounded-2xl border border-gold/30 bg-evergreen-800/60 p-8 text-center">
              <p className="font-serif text-xl font-black text-gold">Thank You!</p>
              <p className="mt-2 text-sm text-warm-white/80">We&apos;ve received your request and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">Name *</label>
                <input required type="text" placeholder="Your full name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-warm-white placeholder-warm-white/40 backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">Email *</label>
                <input required type="email" placeholder="your@email.com" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-warm-white placeholder-warm-white/40 backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">Phone</label>
                <input type="tel" placeholder="+1 (519) 000-0000" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-warm-white placeholder-warm-white/40 backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">Address</label>
                <input type="text" placeholder="Your property address" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-warm-white placeholder-warm-white/40 backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">Project Type</label>
                <select className="w-full rounded-xl border border-white/20 bg-evergreen-900/80 px-4 py-3 text-sm text-warm-white backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30">
                  <option value="">Select a service…</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">Message</label>
                <textarea rows={4} placeholder="Describe your project…" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-warm-white placeholder-warm-white/40 backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 resize-none" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-xl bg-gold px-6 py-4 font-black text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400">
                  Get A Free Estimate
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
