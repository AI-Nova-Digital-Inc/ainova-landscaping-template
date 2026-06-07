import { FadeUp } from "@/components/FadeUp";

const steps = [
  { num: "01", title: "Site Assessment & Design", desc: "We measure the grade change, calculate riser-to-tread ratios for safe stepping, and design the staircase layout. Material options — armour stone, interlock, or natural stone — are reviewed on-site." },
  { num: "02", title: "Excavation & Foundation Prep", desc: "The staircase footprint is excavated below frost line. A compacted granular base is installed to prevent heaving and shifting through Ontario freeze-thaw cycles." },
  { num: "03", title: "Base Stone & Footing", desc: "Large base stones or concrete footings are set and leveled at grade to anchor the first riser. This foundation layer is the most critical element in long-term staircase stability." },
  { num: "04", title: "Riser & Tread Installation", desc: "Each riser is set plumb and level, with treads cut or selected for consistent depth. Stones are pinned or mortared as required for the material type and height of the staircase." },
  { num: "05", title: "Backfill & Side Grading", desc: "Side walls are backfilled with compacted granular material. Surrounding grade is re-established to drain away from the structure and transition cleanly to lawn or existing hardscape." },
  { num: "06", title: "Final Finish & Cleanup", desc: "Joints are pointed, caps are set, and the full staircase is inspected for plumb, level, and uniform overhang. The site is cleaned and debris removed before final walkthrough." },
];

export default function StaircaseProcess() {
  return (
    <section className="bg-evergreen-900 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Our Process</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              How We Build Your Staircase
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-warm-white/65">
              Safe, beautiful outdoor stairs start below grade. Our six-step process accounts for frost depth, proper riser-tread ratios, and drainage so your staircase stays solid season after season.
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
