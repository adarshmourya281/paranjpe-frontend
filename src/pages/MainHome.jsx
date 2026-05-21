import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";

import heroBottle from "../assets/attars/heroBottle.png";
import rudrakshHero from "../assets/rudraksh/rudrakshHero.png";
import heroGem from "../assets/gemstones/heroGem.png";

function MainHome() {
  const collections = [
    {
      title: "Attars",
      description:
        "Luxury fragrances rooted in tradition and spirituality.",
      image: heroBottle,
      link: "/attar",
    },
    {
      title: "Gemstones",
      description:
        "Premium certified gemstones for elegance and energy.",
      image: heroGem,
      link: "/gemstone",
    },
    {
      title: "Rudraksh",
      description:
        "Sacred rudraksh beads blessed with spiritual sanctity.",
      image: rudrakshHero,
      link: "/rudraksh",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-4 sm:px-6 lg:px-10 py-10 lg:py-16">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-serif leading-tight text-black">
          PARANJPE ATTARWALE
        </h1>

        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-[#444]">
          Discover Spiritual Luxury Collections
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-20">

        {collections.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[24px] overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300"
          >

            {/* Image */}
            <div className="h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] bg-white flex items-center justify-center p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 text-center">

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-black">
                {item.title}
              </h2>

              <p className="mt-4 text-base sm:text-lg lg:text-[20px] leading-7 lg:leading-[34px] text-[#555] min-h-[80px]">
                {item.description}
              </p>

              <Link to={item.link}>
                <button className="mt-6 lg:mt-8 border-2 border-black px-6 sm:px-10 py-3 text-base sm:text-lg hover:bg-black hover:text-white transition-all duration-300 rounded-md">
                  Explore {item.title}
                </button>
              </Link>

            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default MainHome;