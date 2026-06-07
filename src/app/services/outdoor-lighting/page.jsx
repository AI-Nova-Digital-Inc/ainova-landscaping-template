import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LightingHero from "@/components/outdoor-lighting/LightingHero";
import LightingWhy from "@/components/outdoor-lighting/LightingWhy";
import LightingGallery from "@/components/outdoor-lighting/LightingGallery";
import LightingFAQ from "@/components/outdoor-lighting/LightingFAQ";
import LightingProcess from "@/components/outdoor-lighting/LightingProcess";
import LightingCTA from "@/components/outdoor-lighting/LightingCTA";
import LightingForm from "@/components/outdoor-lighting/LightingForm";

export const metadata = {
  title: "Outdoor Lighting Installation Kitchener-Waterloo | Everstone Outdoor Living",
  description: "Professional outdoor lighting design and installation — path lights, uplights, patio lighting, and landscape lighting across Kitchener, Waterloo, and Cambridge.",
};

export default function OutdoorLightingPage() {
  return (
    <>
      <Navbar />
      <main>
        <LightingHero />
        <LightingWhy />
        <LightingProcess />
        <LightingGallery />
        <LightingFAQ />
        <LightingCTA />
        <LightingForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
