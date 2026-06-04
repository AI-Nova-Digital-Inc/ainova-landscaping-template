import { FadeUp } from "@/components/FadeUp";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", location: "Kitchener", text: "Everstone completely transformed our backyard. The patio, garden borders, and lighting look beautiful, and the team was professional from start to finish." },
  { name: "Daniel R.", location: "Waterloo", text: "We hired Everstone for a retaining wall and interlock walkway. The craftsmanship is excellent and the project was completed cleanly and on schedule." },
  { name: "Priya S.", location: "Cambridge", text: "The new sod and front garden upgrade made our home look brand new. The quote was clear, the communication was great, and the final result looks premium." },
  { name: "Michael T.", location: "Guelph", text: "Very impressed with the attention to detail. Our driveway border and patio extension look high-end and have already improved our curb appeal." },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-warm-white px-4 pb-16 pt-10 lg:pb-20 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Testimonials</p>
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">Hear From Local Homeowners</h2>
            <div className="mx-auto mt-5 h-px w-12 bg-gold" />
          </div>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map(({ name, location, text }, i) => (
            <FadeUp key={name} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-black/6 bg-white p-7 shadow-sm">
                <Quote className="mb-4 size-8 text-gold/60" strokeWidth={1.5} />
                <p className="flex-1 text-sm leading-7 text-charcoal/75">{text}</p>
                <div className="mt-6 border-t border-black/6 pt-5">
                  <div className="mb-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="size-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-black text-charcoal">{name}</p>
                  <p className="text-sm text-charcoal/55">{location}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
