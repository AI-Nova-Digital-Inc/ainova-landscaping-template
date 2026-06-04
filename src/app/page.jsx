import AboutSection from "@/components/AboutSection";
import BackToTop from "@/components/BackToTop";
import EstimateCTA from "@/components/EstimateCTA";
import EstimateForm from "@/components/EstimateForm";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesIntro from "@/components/ServicesIntro";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";
import TrustStrip from "@/components/TrustStrip";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <FeatureHighlights />
        <ServicesIntro />
        <ServicesGrid />
        <AboutSection />
        <ProjectGallery />
        <Testimonials />
        <EstimateCTA />
        <TrustStrip />
        <FAQAccordion />
        <EstimateForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
