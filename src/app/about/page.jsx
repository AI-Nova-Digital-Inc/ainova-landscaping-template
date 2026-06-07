import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutCTA from "@/components/about/AboutCTA";
import AboutForm from "@/components/about/AboutForm";
import AboutHero from "@/components/about/AboutHero";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import ExperienceSection from "@/components/about/ExperienceSection";
import FounderSection from "@/components/about/FounderSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";

export const metadata = {
  title: "About Us | Everstone Outdoor Living – Landscaping Kitchener-Waterloo",
  description:
    "Learn about Everstone Outdoor Living – a premium landscaping company serving Kitchener, Waterloo, Cambridge & surrounding areas. Interlock patios, retaining walls, sod installation, and more.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <FounderSection />
        <WhyChooseSection />
        <ExperienceSection />
        <AboutTestimonials />
        <AboutCTA />
        <AboutForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
