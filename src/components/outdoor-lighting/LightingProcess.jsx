import { FadeUp } from "@/components/FadeUp";

const steps = [
  { num: "01", title: "Design Consultation & Walkthrough", desc: "We walk your property at dusk if possible, identifying focal points — architecture, trees, pathways, water features — and discuss the mood, brightness, and zones you want to control." },
  { num: "02", title: "Lighting Plan & Fixture Selection", desc: "A scaled layout is produced showing fixture placement, aiming angles, and cable routes. We recommend fixture types (spotlights, path lights, wall wash, uplights) and colour temperatures for each zone." },
  { num: "03", title: "Cable Trenching & Routing", desc: "Low-voltage cable is trenched 6 inches below grade along planned routes. All cables are protected with conduit at crossing points and routed to minimize future disruption to landscaping." },
  { num: "04", title: "Fixture Mounting & Aiming", desc: "Fixtures are installed at engineered positions and aimed precisely to avoid light spill onto neighbours, minimize glare, and achieve the designed effect for each focal point and pathway." },
  { num: "05", title: "Transformer Install & Programming", desc: "A weather-rated transformer is mounted and programmed with timed schedules and photocell control. Zones are balanced for consistent output, and the full system is tested before final walkthrough." },
];

export default function LightingProcess() {
  return (
    <section className="bg-evergreen-900 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Our Process</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold/60" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              How We Light Your Property
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-warm-white/65">
              Great outdoor lighting is invisible during the day and transformative at night. Our five-step process ensures precise fixture placement, clean cable work, and a system that runs reliably year-round.
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
