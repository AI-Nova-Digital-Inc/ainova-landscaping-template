import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SodCalculator from "@/components/sod/SodCalculator";
import SodFAQ from "@/components/sod/SodFAQ";
import SodFinalCTA from "@/components/sod/SodFinalCTA";
import SodForm from "@/components/sod/SodForm";
import SodGallery from "@/components/sod/SodGallery";
import SodHero from "@/components/sod/SodHero";
import SodProcess from "@/components/sod/SodProcess";
import SodProcessIntro from "@/components/sod/SodProcessIntro";
import SodPromoCTA from "@/components/sod/SodPromoCTA";
import SodTestimonials from "@/components/sod/SodTestimonials";
import SodTrustSection from "@/components/sod/SodTrustSection";

export const metadata = {
  title: "Sod Installation Kitchener-Waterloo | Everstone Outdoor Living",
  description:
    "Premium sod installation services in Kitchener, Waterloo, Cambridge & surrounding areas. Kentucky Bluegrass, professional grading, and expert lawn transformations by Everstone Outdoor Living.",
};

export default function SodInstallationPage() {
  return (
    <>
      <Navbar />
      <main>
        <SodHero />
        <SodTrustSection />
        <SodTestimonials />
        <SodProcessIntro />
        <SodProcess />
        <SodCalculator />
        <SodGallery />
        <SodPromoCTA />
        <SodForm />
        <SodFAQ />
        <SodFinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
