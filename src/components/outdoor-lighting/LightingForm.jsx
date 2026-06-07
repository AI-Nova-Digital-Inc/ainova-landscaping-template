"use client";
import { useState } from "react";
import Image from "next/image";
const projectTypes = ["Path & Walkway Lighting","Uplighting & Spotlights","Patio & Deck Lighting","Driveway Lighting","Garden & Bed Lighting","Security Lighting","Full Property Design","Other"];
export default function LightingForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="estimate" className="relative overflow-hidden px-4 py-16 lg:py-24">
      <Image src="/images/outdoor-lighting/hero/hero-bg.jpg" alt="Lighting background" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-evergreen-950/90 via-evergreen-950/82 to-charcoal/90" />
      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="rounded-3xl border border-white/12 bg-white/10 p-8 shadow-luxury backdrop-blur-md sm:p-10">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-gold">Free Quote</p>
          <div className="mb-5 h-px w-10 bg-gold/70" />
          <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl">Get An Outdoor Lighting Quote</h2>
          <p className="mt-3 text-sm leading-6 text-warm-white/70">We respond as soon as possible during business hours.</p>
          {sent ? (
            <div className="mt-8 rounded-2xl border border-gold/30 bg-evergreen-800/60 p-8 text-center">
              <p className="font-serif text-xl font-black text-gold">Thank You!</p>
              <p className="mt-2 text-sm text-warm-white/80">We&apos;ve received your request and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[{ label: "Name *", type: "text", placeholder: "Your full name", required: true },{ label: "Email *", type: "email", placeholder: "your@email.com", required: true },{ label: "Phone Number", type: "tel", placeholder: "+1 (519) 000-0000", required: false },{ label: "Address or Street", type: "text", placeholder: "Property address", required: false }].map(({ label, type, placeholder, required }) => (
                <div key={label}>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">{label}</label>
                  <input required={required} type={type} placeholder={placeholder} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-warm-white placeholder-warm-white/40 backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30" />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">Project Type</label>
                <select className="w-full rounded-xl border border-white/20 bg-evergreen-950/80 px-4 py-3 text-sm text-warm-white backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30">
                  <option value="">Select a project type…</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm-white/70">Tell Us About Your Project</label>
                <textarea rows={4} placeholder="Describe your property, areas you want lit, and any style preferences…" className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-warm-white placeholder-warm-white/40 backdrop-blur-sm transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-xl bg-gold px-6 py-4 font-black text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400">Get A Free Estimate</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
