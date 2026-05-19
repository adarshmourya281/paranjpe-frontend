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
    <section className="px-16 mt-28">

      <h1 className="text-[64px] font-bold text-center mb-20">
        Natural Gemstones
      </h1>

      <div className="flex justify-center gap-10 flex-wrap">

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