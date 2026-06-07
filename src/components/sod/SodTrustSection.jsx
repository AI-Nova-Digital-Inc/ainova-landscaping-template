import { FadeUp } from "@/components/FadeUp";
import Image from "next/image";

const features = [
  { title: "10+ Years Experience", desc: "A decade of lawn transformations across Kitchener, Waterloo, and Cambridge." },
  { title: "Locally Owned & Operated", desc: "We live and work in the same communities we serve — your neighbours trust us." },
  { title: "Custom Lawn Solutions", desc: "Every property gets a tailored grading, drainage, and sod plan built for your yard." },
];

export default function SodTrustSection() {
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <FadeUp>
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-gold/30 shadow-luxury sm:h-64 sm:w-64">
              <Image src="/images/sod/sod-owner.png" alt="Everstone owner" fill sizes="256px" className="object-cover object-top" />
            </div>
            <div className="relative mt-2 h-64 w-full overflow-hidden rounded-2xl border border-gold/20 shadow-luxury sm:h-72">
              <Image src="/images/sod/sod-backyard-premium.png" alt="Premium backyard sod installation" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Our Commitment</p>
          <div className="mb-5 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black leading-tight text-charcoal sm:text-3xl lg:text-4xl">
            Your Satisfaction Is Our Reputation
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/70">
            As a locally owned company, every lawn we install reflects our name and our neighbourhood. We use only premium-grade sod, precise grading techniques, and transparent communication from first quote to final roll.
          </p>
          <div className="mt-8 grid gap-5">
            {features.map(({ title, desc }) => (
              <div key={title} className="flex gap-4 border-l-2 border-gold pl-5">
                <div>
                  <p className="font-serif font-black text-charcoal">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-charcoal/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#estimate" className="mt-8 inline-block rounded-full bg-evergreen-700 px-8 py-4 font-semibold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600">
            Get A Free Estimate
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
