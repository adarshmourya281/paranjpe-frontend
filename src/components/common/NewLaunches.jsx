

import Navbar from "./Navbar";
import Footer from "./Footer";

import launch1 from "../../assets/attars/attar1.png";
import launch2 from "../../assets/gemstones/blue.png";
import launch3 from "../../assets/rudraksh/rudraksh1.png";

function NewLaunches() {
  const launches = [
    {
      image: launch1,
      title: "Royal Oud Attar",
      category: "New Premium Attar",
      description:
        "A luxurious fragrance crafted with traditional essence and royal elegance.",
    },
    {
      image: launch2,
      title: "Blue Sapphire",
      category: "Exclusive Gemstone",
      description:
        "Certified natural gemstone for energy, prosperity and timeless beauty.",
    },
    {
      image: launch3,
      title: "5 Mukhi Rudraksha",
      category: "Sacred Rudraksh",
      description:
        "Blessed spiritual bead with laboratory certification and silver pendant.",
    },
  ];

  return (
    <div className="bg-[#f8f5ef] min-h-screen overflow-hidden">

      <Navbar />

      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-20 pt-12 lg:pt-20 pb-16 text-center">

        <p className="uppercase tracking-[4px] text-[#b58b45] font-semibold text-sm sm:text-base">
          Latest Collections
        </p>

        <h1 className="mt-4 text-[36px] sm:text-[56px] lg:text-[78px] leading-tight font-serif text-[#2c2a28]">

          NEW LAUNCHES

        </h1>

        <p className="mt-6 max-w-[850px] mx-auto text-[16px] sm:text-[20px] lg:text-[24px] text-[#555] leading-relaxed">

          Explore our newest arrivals crafted with spirituality,
          luxury and timeless tradition.

        </p>

      </section>

      {/* Launch Cards */}
      <section className="px-4 sm:px-8 lg:px-20 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {launches.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              <div className="h-[320px] bg-[#f4f1eb] flex items-center justify-center p-8">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain"
                />

              </div>

              <div className="p-8 text-center">

                <p className="text-[#c0954c] uppercase tracking-[3px] text-sm font-semibold">

                  {item.category}

                </p>

                <h2 className="mt-3 text-[30px] font-serif text-[#222]">

                  {item.title}

                </h2>

                <p className="mt-5 text-[#666] leading-8 text-lg">

                  {item.description}

                </p>

                <button className="mt-8 border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300">

                  Explore Product

                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default NewLaunches;