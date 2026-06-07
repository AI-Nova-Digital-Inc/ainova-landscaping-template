import { FadeUp } from "@/components/FadeUp";
import Image from "next/image";

export default function SodProcessIntro() {
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <FadeUp>
          <div className="relative h-80 overflow-hidden rounded-2xl border-2 border-gold/20 shadow-luxury lg:h-[480px]">
            <Image src="/images/sod/sod-process-intro.png" alt="Sod installation process" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">How We Work</p>
          <div className="mb-5 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black leading-tight text-charcoal sm:text-3xl lg:text-4xl">
            Our Sod Installation Process
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/70">
            A flawless lawn starts before the first roll of sod is ever laid. Our process begins with thorough site preparation — removing old growth, grading for proper drainage, and enriching the soil base. We source premium Kentucky Bluegrass and fescue sod from certified Ontario growers, irrigate on delivery day, and finish every edge with precision detailing.
          </p>
          <p className="mt-4 text-lg leading-8 text-charcoal/70">
            The result is a dense, healthy lawn that roots quickly and stays vibrant through Ontario's changing seasons.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
