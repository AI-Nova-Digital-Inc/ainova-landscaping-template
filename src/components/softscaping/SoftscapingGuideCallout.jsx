import { FileDown } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";

export default function SoftscapingGuideCallout() {
  return (
    <section className="bg-evergreen-950 px-4 py-12 lg:py-16">
      <FadeUp>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-gold/20 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-10 lg:flex-row lg:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold/15">
            <FileDown size={28} className="text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-xl font-black text-warm-white sm:text-2xl">
              Download Our Softscaping Guide
            </h3>
            <p className="mt-2 text-sm leading-7 text-warm-white/65">
              Learn how professional planting, soil preparation, mulch, river rock, and privacy screening can improve your property&apos;s curb appeal and long-term landscape health.
            </p>
          </div>
          <a
            href="/docs/Hardscaping-standard-guide-done.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Everstone-Softscaping-Guide.pdf"
            className="shrink-0 rounded-full bg-gold px-8 py-4 font-bold text-charcoal shadow-luxury transition hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            Download Free Guide
          </a>
        </div>
      </FadeUp>
    </section>
  );
}
