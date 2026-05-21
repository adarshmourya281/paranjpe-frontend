// OurStory.jsx

import Navbar from "./Navbar";
import Footer from "./Footer";

import heroBottle from "../../assets/attars/heroBottle.png";
function OurStory() {
  return (
    <div className="bg-[#f8f5ef] min-h-screen overflow-hidden">

      <Navbar />

      {/* Hero */}
      <section className="px-4 sm:px-8 lg:px-20 py-16 lg:py-24">

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[4px] text-[#b58b45] font-semibold text-sm sm:text-base">
              Our Legacy
            </p>

            <h1 className="mt-5 text-[38px] sm:text-[58px] lg:text-[78px] leading-tight font-serif text-[#2d2a26]">

              A Tradition
              <br />
              Of Spiritual
              <br />
              Luxury

            </h1>

            <p className="mt-8 text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed text-[#555] max-w-[700px]">

              PARANJPE ATTARWALE carries forward a sacred tradition
              of handcrafted attars, authentic gemstones and blessed
              rudraksh beads rooted in devotion, purity and elegance.

            </p>

            <button className="mt-10 border-2 border-black px-10 py-4 hover:bg-black hover:text-white transition-all duration-300">

              Explore Collections

            </button>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="border-[6px] border-black bg-white p-6 shadow-2xl">

              <img
                src={heroBottle}
                alt="attar"
                className="w-[240px] sm:w-[320px] lg:w-[420px] object-contain"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-8 lg:px-20 pb-20">

        <div className="bg-white rounded-[32px] p-8 sm:p-12 lg:p-20 shadow-lg max-w-[1500px] mx-auto">

          <h2 className="text-[32px] sm:text-[46px] lg:text-[60px] font-serif text-center text-[#222]">

            Crafted With Faith & Elegance

          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">

            <div className="bg-[#f8f5ef] rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-5 text-[#2d2a26]">
                Authenticity
              </h3>

              <p className="text-lg leading-8 text-[#555]">

                Every gemstone and rudraksh is carefully selected,
                laboratory certified and spiritually blessed.

              </p>

            </div>

            <div className="bg-[#f8f5ef] rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-5 text-[#2d2a26]">
                Tradition
              </h3>

              <p className="text-lg leading-8 text-[#555]">

                Our fragrances are inspired by ancient Indian
                traditions and handcrafted with timeless methods.

              </p>

            </div>

            <div className="bg-[#f8f5ef] rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-5 text-[#2d2a26]">
                Spiritual Energy
              </h3>

              <p className="text-lg leading-8 text-[#555]">

                Each sacred product is prepared with devotion,
                positive intention and spiritual sanctity.

              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default OurStory;