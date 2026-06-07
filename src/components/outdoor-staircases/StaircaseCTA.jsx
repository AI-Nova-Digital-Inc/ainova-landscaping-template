import { FadeUp } from "@/components/FadeUp";
export default function StaircaseCTA() {
  return (
    <section className="bg-evergreen-800 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <FadeUp>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold">Get Started</p>
          <div className="mx-auto mb-6 h-px w-10 bg-gold" />
          <h2 className="font-serif text-3xl font-black text-warm-white lg:text-4xl">Make Your Slope Work For You</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-warm-white/70">Stone steps and grade transitions that are safe, elegant, and built to last through Ontario winters.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#estimate" className="rounded-xl bg-gold px-8 py-4 font-black text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400">Book Free Estimate</a>
            <a href="tel:+15195550148" className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-warm-white transition hover:bg-white/20">Call Now</a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
