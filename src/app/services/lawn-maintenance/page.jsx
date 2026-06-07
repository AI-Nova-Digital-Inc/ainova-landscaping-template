import { site } from "@/config/site";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LawnHero from "@/components/lawn-maintenance/LawnHero";
import LawnWhy from "@/components/lawn-maintenance/LawnWhy";
import LawnGallery from "@/components/lawn-maintenance/LawnGallery";
import LawnFAQ from "@/components/lawn-maintenance/LawnFAQ";
import LawnProcess from "@/components/lawn-maintenance/LawnProcess";
import LawnCTA from "@/components/lawn-maintenance/LawnCTA";
import LawnForm from "@/components/lawn-maintenance/LawnForm";

export const metadata = {
  title: `Lawn Maintenance Kitchener-Waterloo | ${site.name}`,
  description: "Professional lawn mowing, edging, trimming, seasonal cleanup, and lawn maintenance programs across Kitchener, Waterloo, and Cambridge.",
};

export default function LawnMaintenancePage() {
  return (
    <>
      <Navbar />
      <main>
        <LawnHero />
        <LawnWhy />
        <LawnProcess />
        <LawnGallery />
        <LawnFAQ />
        <LawnCTA />
        <LawnForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
