import ProductCard from "../common/ProductCard";

import blueGem from "../../assets/gemstones/blue.png";
import pinkGem from "../../assets/gemstones/pink.png";
import yellowGem from "../../assets/gemstones/yellow.png";
import redGem from "../../assets/gemstones/red.png";

function GemCollection() {

  const gemstones = [
    {
      image: blueGem,
      title: "Blue Sapphire",
    },
    {
      image: pinkGem,
      title: "Ruby Stone",
    },
    {
      image: yellowGem,
      title: "Yellow Sapphire",
    },
    {
      image: redGem,
      title: "Red Garnet",
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-16 lg:mt-28">

      <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold text-center mb-10 sm:mb-14 lg:mb-20">
        Natural Gemstones
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 place-items-center">

        {gemstones.map((item, index) => (
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

export default GemCollection;