import { site } from "@/config/site";
import { FadeUp } from "@/components/FadeUp";

export default function ServicesIntro() {
  return (
    <section className="bg-evergreen-950 px-4 pt-20 pb-12 text-center">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-gold">
            Everstone Outdoor Living
          </p>
          <div className="mx-auto mb-8 h-px w-12 bg-gold/60" />
          <h2 className="font-serif text-2xl font-black leading-tight text-warm-white sm:text-3xl lg:text-4xl">
            Comprehensive Landscaping Services in Kitchener-Waterloo
          </h2>
          <p className="mt-7 text-lg leading-8 text-warm-white/72 sm:text-xl">
            From custom stonework to complete lawn transformations, we design and build refined outdoor spaces that improve curb appeal, function, and long-term property value.
          </p>
          <a
            href="#services"
            className="mt-10 inline-block rounded-full bg-evergreen-700 px-8 py-4 font-black text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600"
          >
            Explore Our Services
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
