import { FadeUp } from "@/components/FadeUp";
import { BadgeCheck, Layers, ShieldCheck, Wrench } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    text: "Honest, detailed quotes with no surprises, built around your property, goals, and budget.",
  },
  {
    icon: Wrench,
    title: "Skilled Craftsmanship",
    text: "Experienced crews specializing in interlock patios, retaining walls, sod installation, and outdoor upgrades.",
  },
  {
    icon: Layers,
    title: "Premium Materials",
    text: "We use quality stone, soil, sod, edging, and installation methods designed to last.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    text: "Professional, insured landscaping services completed safely, cleanly, and on schedule.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="bg-warm-white px-4 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }, i) => (
          <FadeUp key={title} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-black/6 bg-white p-7 shadow-sm transition hover:shadow-md">
              <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-evergreen-700/10">
                <Icon className="size-7 text-evergreen-700" strokeWidth={1.75} />
              </div>
              <h3 className="mb-1 font-serif text-xl font-black text-evergreen-800">{title}</h3>
              <div className="mb-4 h-px w-10 bg-gold" />
              <p className="text-sm leading-7 text-charcoal/70">{text}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
