import Contact from "./components/contact";
import Features from "./components/features";
import HeroSection from "./components/Hero";
import Logos from "./components/logos";
import CopyrightPopup from "./components/popup";
import Product from "./components/product";
import Review from "./components/review";

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
    <CopyrightPopup />
      <HeroSection />
      <Logos />
      <Product />
      <Features />
      <Review />
      <Contact />
    </div>
    </>
  );
}
