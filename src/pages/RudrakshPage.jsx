import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";


import RudrakshHero from "../components/rudraksh/RudrakshHero";

import RudrakshCollection from "../components/rudraksh/RudrakshCollection";
import SpecialSacredItems from "../components/rudraksh/SpecialSacredItems";
import ImportantGuidelines from "../components/rudraksh/ImportantGuidelines";


function RudrakshPage() {
  return (
    <div className="bg-[#f5f5f5]">

      <Navbar />

      <RudrakshHero />

      <RudrakshCollection />

      <SpecialSacredItems />

      <ImportantGuidelines />


      <Footer />

    </div>
  );
}

export default RudrakshPage;