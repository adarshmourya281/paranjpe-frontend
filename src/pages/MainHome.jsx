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
    <div className="min-h-screen bg-[#f5f5f5] px-10 py-16">

      {/* Heading */}

      <div className="text-center">

        <h1 className="text-[72px] font-serif leading-tight text-black">

          PARANJPE ATTARWALE

        </h1>

        <p className="mt-6 text-[24px] text-[#444]">

          Discover Spiritual Luxury Collections

        </p>

      </div>

      {/* Cards */}

      <div className="max-w-[1500px] mx-auto grid grid-cols-3 gap-12 mt-20">

        {collections.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[24px] overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300"
          >

            {/* Image */}

            <div className="h-[420px] overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

            </div>

            {/* Content */}

            <div className="p-10 text-center">

              <h2 className="text-[42px] font-serif text-black">

                {item.title}

              </h2>

              <p className="mt-5 text-[20px] leading-[34px] text-[#555] min-h-[90px]">

                {item.description}

              </p>

              <Link to={item.link}>

                <button className="mt-8 border-2 border-black px-12 py-4 text-[18px] hover:bg-black hover:text-white transition-all duration-300">

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