import ProductCard from "../common/ProductCard";

import attar1 from "../../assets/attars/attar1.png";
import attar2 from "../../assets/attars/attar2.png";
import attar3 from "../../assets/attars/attar3.png";
import attar4 from "../../assets/attars/attar4.png";

function LuxuryCollection() {

  const products = [
    {
      image: attar1,
      title: "Mukhallat Emirates",
    },
    {
      image: attar2,
      title: " Musk Nirvana",
    },
    {
      image: attar3,
      title: "Oud Venice",
    },
    {
      image: attar4,
      title: "Milaan Moods",
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-20 py-10">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-[32px] sm:text-[46px] lg:text-[58px] font-bold leading-tight">

          Luxury Collection

        </h2>

        <p className="text-[16px] sm:text-[20px] lg:text-[22px] font-semibold mt-2">

          Discover the soul of fragrance, rooted in tradition.

        </p>

        <div className="inline-block border border-black px-5 sm:px-8 lg:px-10 py-3 mt-5 lg:mt-6">

          <span className="text-[#d8a144] font-semibold text-[16px] sm:text-[20px] lg:text-2xl">

            ₹380 Regular | ₹500 Minara

          </span>

        </div>

      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-12 lg:mt-16 place-items-center">

        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
          />
        ))}

      </div>

    </section>
  );
}

export default LuxuryCollection;
