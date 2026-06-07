import { site } from "@/config/site";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InterlockHero from "@/components/interlock-driveways/InterlockHero";
import InterlockWhy from "@/components/interlock-driveways/InterlockWhy";
import InterlockProcess from "@/components/interlock-driveways/InterlockProcess";
import InterlockStyles from "@/components/interlock-driveways/InterlockStyles";
import InterlockGallery from "@/components/interlock-driveways/InterlockGallery";
import InterlockFAQ from "@/components/interlock-driveways/InterlockFAQ";
import InterlockCTA from "@/components/interlock-driveways/InterlockCTA";
import InterlockForm from "@/components/interlock-driveways/InterlockForm";

export const metadata = {
  title: `Interlock Driveway Installation Kitchener-Waterloo | ${site.name}`,
  description:
    "Premium interlock driveway installation, paver driveways, base preparation, polymeric sand, sealing, and custom driveway design across Kitchener, Waterloo, and Cambridge.",
};

export default function InterlockDrivewaysPage() {
  return (
    <>
      <Navbar />
      <main>
        <InterlockHero />
        <InterlockWhy />
        <InterlockProcess />
        <InterlockStyles />
        <InterlockGallery />
        <InterlockFAQ />
        <InterlockCTA />
        <InterlockForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
