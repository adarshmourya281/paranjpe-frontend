import ProductCard from "../common/ProductCard";

import leafRight from "../../assets/images/leftLeaf.png";

import attar1 from "../../assets/attars/attar1.png";
import attar2 from "../../assets/attars/attar2.png";
import attar3 from "../../assets/attars/attar3.png";
import attar4 from "../../assets/attars/attar4.png";

function AttarCollection() {

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
    <section className="relative px-4 sm:px-8 lg:px-20 py-10 lg:py-16 overflow-hidden">

      {/* Leaf */}
      <img
        src={leafRight}
        alt="leaf"
        className="absolute right-0 sm:right-6 lg:right-10 top-4 lg:top-10 
        w-[90px] sm:w-[130px] lg:w-[180px] opacity-90"
      />

      {/* Heading */}
      <div className="text-center relative z-10">

        <h2 className="text-[32px] sm:text-[46px] lg:text-[58px] font-bold leading-tight">

          नवीन अत्तर - NEW ATTARS

        </h2>

        <p className="text-[16px] sm:text-[20px] lg:text-[22px] font-semibold mt-2">

          Discover the soul of fragrance, rooted in tradition.

        </p>

        {/* Price */}
        <div className="inline-block border border-black px-5 sm:px-8 lg:px-10 py-3 mt-5 lg:mt-6">

          <span className="text-[#d8a144] font-semibold text-[16px] sm:text-[20px] lg:text-2xl">

            ₹250 Regular | ₹370 Minara

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

export default AttarCollection;