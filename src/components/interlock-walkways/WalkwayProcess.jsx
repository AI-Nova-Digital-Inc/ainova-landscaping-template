import { FadeUp } from "@/components/FadeUp";

const steps = [
  { num: "01", title: "Consultation & Layout Design", desc: "We walk the property with you, establish the walkway route, width, and transition points, and recommend paver styles that complement your home's existing hardscape and architecture." },
  { num: "02", title: "Excavation & Sub-Base Prep", desc: "Soil is excavated to 8–10 inches below finished grade. The sub-base is checked for soft spots, graded to drain away from structures, and cleared of roots or debris." },
  { num: "03", title: "Compacted Granular Base", desc: "Multiple lifts of clear stone and granular A are compacted using a plate compactor to form a rigid, frost-resistant base. This step determines whether your walkway stays level long-term." },
  { num: "04", title: "Bedding Sand & Paver Installation", desc: "A 1-inch layer of coarse bedding sand is screeded perfectly level. Pavers are set by hand to your chosen pattern, with consistent spacing and all cuts made precisely along edges." },
  { num: "05", title: "Edge Restraints, Joint Sand & Cleanup", desc: "Edge restraints are spiked along all borders. Polymeric sand is swept into joints, compacted, and activated. The site is cleaned, graded, and ready for use within 24 hours." },
];

export default function WalkwayProcess() {
  return (
    <section className="bg-evergreen-900 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Our Process</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              How We Install Your Walkway
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-warm-white/65">
              A lasting walkway is built from the ground up. Our five-step process ensures proper drainage, a stable compacted base, and clean paver work that holds through Ontario winters.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ num, title, desc }, i) => (
            <FadeUp key={num} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-gold/30 hover:bg-white/8">
                <span className="mb-4 block font-serif text-5xl font-black text-gold/20 leading-none select-none">
                  {num}
                </span>
                <h3 className="mb-3 font-serif text-lg font-black text-warm-white">{title}</h3>
                <p className="text-sm leading-6 text-warm-white/60">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
