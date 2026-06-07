import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const styles = [
  {
    title: "Modern Smooth Pavers",
    img: "/images/interlock-driveways/styles/modern-smooth.jpg",
    text: "Clean lines, large-format pavers, and refined modern textures for contemporary homes.",
  },
  {
    title: "Rustic Cobblestone",
    img: "/images/interlock-driveways/styles/cobblestone.jpg",
    text: "Timeless character with textured stone patterns that pair well with traditional or estate-style homes.",
  },
  {
    title: "Permeable Eco Pavers",
    img: "/images/interlock-driveways/styles/permeable.avif",
    text: "A drainage-friendly paver option designed to help manage water and support sustainable landscape design.",
  },
];

export default function InterlockStyles() {
  return (
    <section className="bg-warm-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-evergreen-700">Paver Styles</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-3xl font-black text-charcoal lg:text-4xl">
              Choose A Driveway Style That Fits Your Home
            </h2>
          </div>
        </FadeUp>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map(({ title, img, text }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-3xl border border-black/8 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-luxury">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-xl font-black text-charcoal">{title}</h3>
                  <div className="my-3 h-px w-8 bg-gold/70" />
                  <p className="text-sm leading-6 text-charcoal/65">{text}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
