import { site } from "@/config/site";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const services = ["Sod Installation", "Softscaping & Gardens", "Retaining Walls", "Interlock Driveways", "Interlock Patios & Walkways", "Outdoor Staircases", "Outdoor Lighting", "Lawn Maintenance"];
const areas = ["Kitchener", "Waterloo", "Cambridge", "Guelph", "Woolwich", "North Dumfries"];
const links = [{ label: "About Us", href: "#about" }, { label: "Services", href: "#services" }, { label: "Gallery", href: "#gallery" }, { label: "Contact", href: "#contact" }, { label: "Privacy Policy", href: "#" }, { label: "Terms and Conditions", href: "#" }];

export default function Footer() {
  return (
    <footer className="bg-evergreen-950 text-warm-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>
          <div className="relative mb-5 h-16 w-44">
            <Image src="/images/logo/everstone-logo.svg" alt={site.name} fill className="object-contain object-left" style={{ filter: "brightness(0) invert(1)" }} />
          </div>
          <p className="text-sm leading-7 text-warm-white/65">Premium landscaping and outdoor living services across Kitchener, Waterloo, Cambridge, and surrounding areas.</p>
          <ul className="mt-6 grid gap-2.5 text-sm text-warm-white/70">
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> <a href={`tel:${site.phone}`} className="hover:text-gold transition">{site.phoneDisplay}</a></li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> <a href="mailto:{site.email}" className="hover:text-gold transition">{site.email}</a></li>
            <li className="flex items-center gap-2"><Clock size={14} className="text-gold" /> Mon - Sat: 7AM - 7PM</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0 text-gold" /> Kitchener-Waterloo, Cambridge &amp; nearby communities</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-gold">Our Services</h3>
          <div className="mb-3 h-px w-8 bg-gold/40" />
          <ul className="grid gap-2.5 text-sm text-warm-white/70">
            {services.map((s) => <li key={s}><a href="#services" className="transition hover:text-gold">{s}</a></li>)}
          </ul>
        </div>

        {/* Areas */}
        <div id="service-areas" className="scroll-mt-28">
          <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-gold">Areas We Serve</h3>
          <div className="mb-3 h-px w-8 bg-gold/40" />
          <ul className="grid gap-2.5 text-sm text-warm-white/70">
            {areas.map((a) => <li key={a}><a href="#contact" className="transition hover:text-gold">{a}</a></li>)}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-gold">Quick Links</h3>
          <div className="mb-3 h-px w-8 bg-gold/40" />
          <ul className="grid gap-2.5 text-sm text-warm-white/70">
            {links.map(({ label, href }) => <li key={label}><a href={href} className="transition hover:text-gold">{label}</a></li>)}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8 bg-black/30 px-4 py-5">
        <p className="text-center text-xs text-warm-white/45">&copy; 2026 Everstone Outdoor Living. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

