import { site } from "@/config/site";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PatioHero from "@/components/interlock-patios/PatioHero";
import PatioWhy from "@/components/interlock-patios/PatioWhy";
import PatioGallery from "@/components/interlock-patios/PatioGallery";
import PatioFAQ from "@/components/interlock-patios/PatioFAQ";
import PatioProcess from "@/components/interlock-patios/PatioProcess";
import PatioCTA from "@/components/interlock-patios/PatioCTA";
import PatioForm from "@/components/interlock-patios/PatioForm";

export const metadata = {
  title: `Interlock Patio Installation Kitchener-Waterloo | ${site.name}`,
  description: "Custom interlock patio installation, paver patios, seating walls, fire pit pads, and outdoor living design across Kitchener, Waterloo, and Cambridge.",
};

export default function InterlockPatiosPage() {
  return (
    <>
      <Navbar />
      <main>
        <PatioHero />
        <PatioWhy />
        <PatioProcess />
        <PatioGallery />
        <PatioFAQ />
        <PatioCTA />
        <PatioForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
