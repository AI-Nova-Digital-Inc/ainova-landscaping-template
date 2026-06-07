"use client";

import { useState } from "react";
import Image from "next/image";

const projectTypes = [
  "Interlock Patio", "Retaining Wall", "Sod Installation", "Garden Upgrade",
  "Driveway / Walkway", "Outdoor Lighting", "Full Backyard Transformation", "Other",
];

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden px-4 py-24 lg:py-32">
      <Image
        src="/images/gallery/gallery-backyard-transformation-01.png"
        alt="Backyard transformation landscaping"
        fill
        className="object-cover -z-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />

      <div className="mx-auto max-w-xl">
        <div className="rounded-3xl border border-white/15 bg-white/96 p-8 shadow-luxury backdrop-blur-sm lg:p-10">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-evergreen-700/12">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-serif text-2xl font-black text-evergreen-800">Thank you — your request has been received.</h3>
              <p className="mt-3 text-charcoal/65">We&apos;ll be in touch soon during business hours.</p>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl">
                Request A Free <span className="text-evergreen-700">Landscaping Estimate</span> Today
              </h2>
              <p className="mt-2 text-sm text-charcoal/55">We respond as soon as possible during business hours.</p>

              <form onSubmit={handleSubmit} className="mt-7 grid gap-3">
                <input required name="name" placeholder="Name *" className="rounded-xl border border-black/12 px-4 py-3 text-sm text-charcoal outline-none focus:border-evergreen-700 focus:ring-1 focus:ring-evergreen-700" />
                <input required name="email" type="email" placeholder="Email *" className="rounded-xl border border-black/12 px-4 py-3 text-sm text-charcoal outline-none focus:border-evergreen-700 focus:ring-1 focus:ring-evergreen-700" />
                <input required name="phone" type="tel" placeholder="Phone Number *" className="rounded-xl border border-black/12 px-4 py-3 text-sm text-charcoal outline-none focus:border-evergreen-700 focus:ring-1 focus:ring-evergreen-700" />
                <input name="address" placeholder="Address or Street" className="rounded-xl border border-black/12 px-4 py-3 text-sm text-charcoal outline-none focus:border-evergreen-700 focus:ring-1 focus:ring-evergreen-700" />
                <select name="project_type" className="rounded-xl border border-black/12 px-4 py-3 text-sm text-charcoal outline-none focus:border-evergreen-700 focus:ring-1 focus:ring-evergreen-700">
                  <option value="">Project Type</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <textarea name="message" rows={4} placeholder="Tell Us About Your Project" className="rounded-xl border border-black/12 px-4 py-3 text-sm text-charcoal outline-none focus:border-evergreen-700 focus:ring-1 focus:ring-evergreen-700 resize-none" />
                <button type="submit" className="mt-1 rounded-full bg-evergreen-700 py-4 font-black text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600">
                  Get A Free Estimate
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
