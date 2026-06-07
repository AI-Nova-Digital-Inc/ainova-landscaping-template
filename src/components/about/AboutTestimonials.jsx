import { FadeUp } from "@/components/FadeUp";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Kitchener, ON",
    text: "Everstone transformed our backyard completely. The interlock patio and retaining wall are absolutely stunning. Every detail was handled with care and professionalism.",
  },
  {
    name: "James R.",
    location: "Waterloo, ON",
    text: "From the initial consultation to the final cleanup, the team was outstanding. Our sod and garden work looks better than we ever imagined.",
  },
  {
    name: "Linda K.",
    location: "Cambridge, ON",
    text: "The crew was punctual, clean, and incredibly skilled. Our driveway interlock has completely elevated our home's curb appeal.",
  },
  {
    name: "Michael T.",
    location: "Guelph, ON",
    text: "Transparent pricing, no surprises, and the quality of the stone steps exceeded our expectations. Would highly recommend to any homeowner.",
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} fill="#d6b46a" stroke="none" />
    ))}
  </div>
);

export default function AboutTestimonials() {
  return (
    <section className="bg-charcoal px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-gold">Client Reviews</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">
              Hear From Local Homeowners
            </h2>
          </div>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ name, location, text }, i) => (
            <FadeUp key={name} delay={i * 0.07}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-luxury">
                <Stars />
                <p className="mt-4 flex-1 text-sm leading-7 text-charcoal/75 italic">&ldquo;{text}&rdquo;</p>
                <div className="mt-5 border-t border-black/8 pt-4">
                  <p className="font-serif font-black text-charcoal">{name}</p>
                  <p className="text-xs text-charcoal/50">{location}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
