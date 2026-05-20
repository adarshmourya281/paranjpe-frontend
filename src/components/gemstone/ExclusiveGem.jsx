import ProductCard from "../common/ProductCard";

import ring1 from "../../assets/gemstones/ring1.png";
import ring2 from "../../assets/gemstones/ring2.png";
import ring3 from "../../assets/gemstones/ring3.png";
import ring4 from "../../assets/gemstones/ring4.png";

function ExclusiveGem() {

  const exclusive = [
    {
      image: ring1,
      title: "Diamond Ring",
    },
    {
      image: ring2,
      title: "Luxury Ring",
    },
    {
      image: ring3,
      title: "Emerald Ring",
    },
    {
      image: ring4,
      title: "Royal Ring",
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-16 lg:mt-28">

      <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold text-center mb-10 sm:mb-14 lg:mb-20">
        Exclusive Gemstones
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 place-items-center">

        {exclusive.map((item, index) => (
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

export default ExclusiveGem;