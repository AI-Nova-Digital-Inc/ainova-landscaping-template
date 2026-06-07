import { site } from "@/config/site";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoftscapingHero from "@/components/softscaping/SoftscapingHero";
import SoftscapingWhyInvest from "@/components/softscaping/SoftscapingWhyInvest";
import SoftscapingServices from "@/components/softscaping/SoftscapingServices";
import SoftscapingGallery from "@/components/softscaping/SoftscapingGallery";
import SoftscapingGuideCallout from "@/components/softscaping/SoftscapingGuideCallout";
import SoftscapingFAQ from "@/components/softscaping/SoftscapingFAQ";
import SoftscapingCTA from "@/components/softscaping/SoftscapingCTA";
import SoftscapingForm from "@/components/softscaping/SoftscapingForm";

export const metadata = {
  title: `Softscaping & Garden Bed Installation Kitchener-Waterloo | ${site.name}`,
  description:
    "Premium softscaping, garden bed installation, mulch, river rock, shrubs, privacy hedges, and planting services across Kitchener, Waterloo, and Cambridge.",
};

export default function SoftscapingPage() {
  return (
    <>
      <Navbar />
      <main>
        <SoftscapingHero />
        <SoftscapingWhyInvest />
        <SoftscapingServices />
        <SoftscapingGallery />
        <SoftscapingGuideCallout />
        <SoftscapingFAQ />
        <SoftscapingCTA />
        <SoftscapingForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
