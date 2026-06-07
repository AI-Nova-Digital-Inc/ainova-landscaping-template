import { FadeUp } from "@/components/FadeUp";

const steps = [
  { num: "01", title: "Property Assessment", desc: "Before your first visit we assess your lawn size, grass type, soil condition, and any problem areas — bare patches, compaction, drainage issues — so we can schedule and equip properly." },
  { num: "02", title: "Scheduled Mowing & Edging", desc: "We mow at the correct height for your grass type (never removing more than one-third of the blade), then edge cleanly along driveways, walkways, and garden beds for a sharp, defined finish." },
  { num: "03", title: "Trimming & Line Work", desc: "String trimmers tackle areas the mower can't reach — around fences, trees, and obstacles. Every visible edge is cleaned to match the mowed surface and leave a uniform, professional look." },
  { num: "04", title: "Blowing & Site Cleanup", desc: "Clippings, debris, and dust are blown off all hard surfaces — driveways, walkways, patios, and steps — so your property looks tidy from curb to backyard after every visit." },
  { num: "05", title: "Seasonal Treatments & Reporting", desc: "Depending on season we include fertilization scheduling, aeration recommendations, overseeding flagging, and end-of-season leaf cleanup. You receive updates after each visit so you're always informed." },
];

export default function LawnProcess() {
  return (
    <section className="bg-evergreen-900 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Our Process</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              How We Maintain Your Lawn
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-warm-white/65">
              Consistent results come from a consistent process. Every visit follows the same five-step routine so your lawn always looks sharp — regardless of which crew member shows up.
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
