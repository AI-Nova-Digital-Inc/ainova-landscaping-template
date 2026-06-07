import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RetainingHero from "@/components/retaining-walls/RetainingHero";
import RetainingWhySection from "@/components/retaining-walls/RetainingWhySection";
import RetainingProcess from "@/components/retaining-walls/RetainingProcess";
import RetainingMaterials from "@/components/retaining-walls/RetainingMaterials";
import RetainingGallery from "@/components/retaining-walls/RetainingGallery";
import RetainingFAQ from "@/components/retaining-walls/RetainingFAQ";
import RetainingCTA from "@/components/retaining-walls/RetainingCTA";
import RetainingForm from "@/components/retaining-walls/RetainingForm";

export const metadata = {
  title: "Retaining Wall Construction Kitchener-Waterloo | Everstone Outdoor Living",
  description:
    "Premium retaining wall construction, armor stone walls, interlock block walls, drainage, excavation, and landscape wall installation across Kitchener, Waterloo, and Cambridge.",
};

export default function RetainingWallsPage() {
  return (
    <>
      <Navbar />
      <main>
        <RetainingHero />
        <RetainingWhySection />
        <RetainingProcess />
        <RetainingMaterials />
        <RetainingGallery />
        <RetainingFAQ />
        <RetainingCTA />
        <RetainingForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
