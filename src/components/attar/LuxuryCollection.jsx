import ProductCard from "../common/ProductCard";

import attar1 from "../../assets/attars/attar1.png";
import attar2 from "../../assets/attars/attar2.png";
import attar3 from "../../assets/attars/attar3.png";
import attar4 from "../../assets/attars/attar4.png";

function LuxuryCollection() {

  const products = [
    {
      image: attar1,
      title: "Aqua Frio",
    },
    {
      image: attar2,
      title: "Aqua Frio",
    },
    {
      image: attar3,
      title: "Aqua Frio",
    },
    {
      image: attar4,
      title: "Aqua Frio",
    },
  ];

  return (
    <section className="px-20 py-10">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-[58px] font-bold">

          Luxury Collection

        </h2>

        <p className="text-[22px] font-semibold mt-2">

          Discover the soul of fragrance, rooted in tradition.

        </p>

        <div className="inline-block border border-black px-10 py-3 mt-6">

          <span className="text-[#d8a144] font-semibold text-2xl">

            ₹380 Regular | ₹500 Minara

          </span>

        </div>

      </div>

      {/* Products */}

      <div className="grid grid-cols-4 gap-10 mt-16">

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