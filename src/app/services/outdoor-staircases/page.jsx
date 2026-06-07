import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StaircaseHero from "@/components/outdoor-staircases/StaircaseHero";
import StaircaseWhy from "@/components/outdoor-staircases/StaircaseWhy";
import StaircaseGallery from "@/components/outdoor-staircases/StaircaseGallery";
import StaircaseFAQ from "@/components/outdoor-staircases/StaircaseFAQ";
import StaircaseCTA from "@/components/outdoor-staircases/StaircaseCTA";
import StaircaseForm from "@/components/outdoor-staircases/StaircaseForm";

export const metadata = {
  title: "Outdoor Staircase Installation Kitchener-Waterloo | Everstone Outdoor Living",
  description: "Natural stone steps, interlock staircase installation, grade transitions, and outdoor staircase design across Kitchener, Waterloo, and Cambridge.",
};

export default function OutdoorStaircasesPage() {
  return (
    <>
      <Navbar />
      <main>
        <StaircaseHero />
        <StaircaseWhy />
        <StaircaseGallery />
        <StaircaseFAQ />
        <StaircaseCTA />
        <StaircaseForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
