import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import AttarHero from "../components/attar/AttarHero";
import AttarCollection from "../components/attar/AttarCollection";
import AttarInfoSection from "../components/attar/AttarInfoSection";
import LuxuryCollection from "../components/attar/LuxuryCollection";

import PremiumCollection from "../components/attar/PremiumCollection";
import SpiritualSection from "../components/attar/SpiritualSection";
function AttarPage() {
  return (
    <div className="bg-[#f5f5f5] overflow-hidden">

      <Navbar />

      <AttarHero />

      <AttarCollection />

      <AttarInfoSection />

      <LuxuryCollection />
     <SpiritualSection />
      <PremiumCollection />
      <Footer />

    </div>
  );
}

export default AttarPage;