import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import GemHero from "../components/gemstone/GemHero";
import GemCollection from "../components/gemstone/GemCollection";
import ExclusiveGem from "../components/gemstone/ExclusiveGem";
import TrustedBanner from "../components/gemstone/TrustedBanner";

function GemstonePage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      <Navbar />

      <GemHero />

      <GemCollection />

      <ExclusiveGem />

      <TrustedBanner />

      <Footer />

    </div>
  );
}

export default GemstonePage;