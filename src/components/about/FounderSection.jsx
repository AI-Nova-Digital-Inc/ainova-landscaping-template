import { FadeUp } from "@/components/FadeUp";
import Image from "next/image";

const highlights = [
  {
    title: "10+ Years Experience",
    text: "Experienced in interlock, retaining walls, sod installation, and premium outdoor transformations throughout Ontario.",
  },
  {
    title: "Work Directly With The Team",
    text: "Clear communication, organized project management, and detail-driven craftsmanship from start to finish.",
  },
  {
    title: "Tailored Outdoor Spaces",
    text: "Every project is designed around your property, goals, lifestyle, and long-term curb appeal.",
  },
];

export default function FounderSection() {
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Left: founder portrait + highlight cards */}
        <FadeUp>
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-gold/30 shadow-luxury sm:h-72 sm:w-72">
              <Image
                src="/images/about/founder-portrait.png"
                alt="Everstone Outdoor Living founder"
                fill
                sizes="288px"
                className="object-cover object-top"
              />
            </div>
            <div className="grid gap-5 w-full">
              {highlights.map(({ title, text }) => (
                <div key={title} className="rounded-2xl border border-gold/20 bg-white px-6 py-5 shadow-sm">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="h-1 w-6 rounded-full bg-gold" />
                    <h3 className="font-serif text-base font-black text-charcoal">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-charcoal/65 pl-9">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Right: story + project image */}
        <FadeUp delay={0.12}>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Our Story</p>
          <div className="mb-5 h-px w-10 bg-gold" />
          <h2 className="font-serif text-2xl font-black leading-tight text-charcoal sm:text-3xl lg:text-4xl">
            Built Around Craftsmanship &amp; Trust
          </h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/70">
            Everstone Outdoor Living was founded with one goal — to create outdoor spaces that feel refined, functional, and built to last. We believe landscaping should enhance both the beauty and long-term value of your property.
          </p>
          <div className="relative mt-8 h-72 overflow-hidden rounded-2xl border-2 border-gold/20 shadow-luxury lg:h-80">
            <Image
              src="/images/about/about-project-01.png"
              alt="Everstone premium landscaping project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <a
            href="#estimate"
            className="mt-8 inline-block rounded-full bg-evergreen-700 px-8 py-4 font-semibold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600"
          >
            Request A Consultation
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
