import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WalkwayHero from "@/components/interlock-walkways/WalkwayHero";
import WalkwayWhy from "@/components/interlock-walkways/WalkwayWhy";
import WalkwayGallery from "@/components/interlock-walkways/WalkwayGallery";
import WalkwayFAQ from "@/components/interlock-walkways/WalkwayFAQ";
import WalkwayProcess from "@/components/interlock-walkways/WalkwayProcess";
import WalkwayCTA from "@/components/interlock-walkways/WalkwayCTA";
import WalkwayForm from "@/components/interlock-walkways/WalkwayForm";

export const metadata = {
  title: "Interlock Walkway Installation Kitchener-Waterloo | Everstone Outdoor Living",
  description: "Premium interlock walkways, garden paths, and paver walkway installation across Kitchener, Waterloo, and Cambridge.",
};

export default function InterlockWalkwaysPage() {
  return (
    <>
      <Navbar />
      <main>
        <WalkwayHero />
        <WalkwayWhy />
        <WalkwayProcess />
        <WalkwayGallery />
        <WalkwayFAQ />
        <WalkwayCTA />
        <WalkwayForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
