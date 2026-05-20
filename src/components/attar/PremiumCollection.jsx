import ProductCard from "../common/ProductCard";

import attar1 from "../../assets/attars/attar1.png";
import attar2 from "../../assets/attars/attar2.png";
import attar3 from "../../assets/attars/attar3.png";
import attar4 from "../../assets/attars/attar4.png";

function PremiumCollection() {
  const products = [
    {
      image: attar1,
      name: "Aqua Frio",
    },
    {
      image: attar2,
      name: "Aqua Frio",
    },
    {
      image: attar3,
      name: "Aqua Frio",
    },
    {
      image: attar4,
      name: "Aqua Frio",
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-20 py-10">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold leading-tight">

          Premium Collection

        </h2>

        <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold mt-3">

          Discover the soul of fragrance, rooted in tradition.

        </p>

        <div className="inline-block mt-5 lg:mt-6 border border-black px-5 sm:px-8 lg:px-12 py-3 text-[#e0a84d] text-[16px] sm:text-[22px] lg:text-[28px] font-semibold">

          ₹300 Regular | ₹420 Minara

        </div>

      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-12 lg:mt-14 place-items-center">

        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.name}
          />
        ))}

      </div>

    </section>
  );
}

export default PremiumCollection;