import { FadeUp } from "@/components/FadeUp";

const steps = [
  { num: "01", title: "Design Consultation & Site Visit", desc: "We meet on-site to understand your vision, measure the space, assess drainage, and recommend paver styles, patterns, and colours that match your home's exterior." },
  { num: "02", title: "Excavation & Grading", desc: "Existing soil is excavated to the required depth — typically 8–12 inches. The sub-grade is graded to slope away from the home for proper water runoff." },
  { num: "03", title: "Granular Base & Compaction", desc: "A compacted layer of clear stone and granular A is installed in lifts and plate-compacted to form a rigid, frost-stable base — the most critical step for patio longevity." },
  { num: "04", title: "Edge Restraint Installation", desc: "Plastic or aluminum edge restraints are spiked into the base along all perimeters to lock pavers in place permanently and prevent edge creep over time." },
  { num: "05", title: "Paver Laying & Pattern Setting", desc: "Pavers are laid to your chosen pattern — herringbone, running bond, or custom — with consistent joints maintained throughout. Cuts are made with a wet saw for clean edges." },
  { num: "06", title: "Polymeric Sand & Final Sealing", desc: "Joints are filled with polymeric sand and compacted in. Sealer is optionally applied to enhance colour, lock sand, and protect the surface from staining and freeze-thaw cycles." },
];

export default function PatioProcess() {
  return (
    <section className="bg-evergreen-900 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Our Process</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              How We Build Your Patio
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-warm-white/65">
              Every patio starts below ground. Our six-step process ensures a structurally sound, properly drained base so your patio looks perfect for decades.
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
