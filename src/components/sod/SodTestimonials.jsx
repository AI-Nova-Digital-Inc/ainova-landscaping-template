import { FadeUp } from "@/components/FadeUp";
import { Star } from "lucide-react";

const reviews = [
  { name: "Amanda L.", location: "Kitchener, ON", text: "Our lawn looks absolutely incredible. The team graded our yard perfectly and the sod was lush from day one. No settling, no dead patches." },
  { name: "David K.", location: "Waterloo, ON", text: "Professional from start to finish. They explained every step, showed up on time, and left our property cleaner than they found it." },
  { name: "Rachel T.", location: "Cambridge, ON", text: "The best investment we made this year. Our front yard transformed overnight. Neighbours have been asking who did the work." },
  { name: "Mark S.", location: "Guelph, ON", text: "Fair pricing, premium materials, and a crew that clearly takes pride in their craft. Our backyard sod rooted beautifully within two weeks." },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#d6b46a" stroke="none" />)}
  </div>
);

export default function SodTestimonials() {
  return (
    <section className="bg-evergreen-950 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-gold">Client Reviews</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-warm-white sm:text-3xl lg:text-4xl">What Homeowners Are Saying</h2>
          </div>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map(({ name, location, text }, i) => (
            <FadeUp key={name} delay={i * 0.07}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-luxury transition hover:-translate-y-1">
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
