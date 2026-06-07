import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

const services = [
  {
    title: "Custom Garden Bed Creation & Natural Edging",
    text: "We transform empty or overgrown areas into clean, layered garden beds with proper soil preparation, crisp edging, and carefully selected plantings.",
    src: "/images/softscaping/softscaping-service-garden-beds.png",
    alt: "Custom garden bed creation and natural edging",
  },
  {
    title: "Tree, Shrub & Privacy Hedge Planting",
    text: "We install trees, shrubs, evergreens, ornamental plants, and privacy hedges suited for Waterloo Region properties and Ontario weather.",
    src: "/images/softscaping/softscaping-service-shrubs.png",
    alt: "Tree shrub and privacy hedge planting",
  },
  {
    title: "Premium Mulch & River Rock Installation",
    text: "We install mulch, decorative stone, and river rock to control weeds, retain moisture, regulate soil temperature, and create a polished finished look.",
    src: "/images/softscaping/softscaping-service-mulch-rock.png",
    alt: "Premium mulch and river rock installation",
  },
];

export default function SoftscapingServices() {
  return (
    <section className="bg-white px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-evergreen-700">Our Expert Services</p>
            <div className="mx-auto mb-5 h-px w-10 bg-gold" />
            <h2 className="font-serif text-2xl font-black text-charcoal sm:text-3xl lg:text-4xl">
              Our Comprehensive Softscaping Services
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-charcoal/65 leading-7">
              A beautiful landscape requires the right balance of living plant material, soil preparation, mulch, stone, and clean finishing touches.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, src, alt }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-3xl border border-charcoal/8 bg-white shadow-sm transition hover:shadow-luxury">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="mb-3 font-serif text-lg font-black text-charcoal">{title}</h3>
                  <p className="text-sm leading-7 text-charcoal/65">{text}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="#estimate"
              className="inline-block rounded-full bg-evergreen-700 px-10 py-4 font-bold text-white shadow-luxury transition hover:-translate-y-0.5 hover:bg-evergreen-600"
            >
              Get A Free Estimate
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
