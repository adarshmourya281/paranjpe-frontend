import ProductCard from "../common/ProductCard";

import rudraksh1 from "../../assets/rudraksh/rudraksh1.png";
import rudraksh2 from "../../assets/rudraksh/rudraksh2.png";
import rudraksh3 from "../../assets/rudraksh/rudraksh3.png";
import rudraksh4 from "../../assets/rudraksh/rudraksh4.png";

function RudrakshCollection() {

  const products = [
    {
      image: rudraksh1,
      title: "5 Mukhi Rudraksha",
    },
    {
      image: rudraksh2,
      title: "2 Mukhi Rudraksha",
    },
    {
      image: rudraksh3,
      title: "5 Mukhi Rudraksha",
    },
    {
      image: rudraksh4,
      title: "5 Mukhi Rudraksha",
    },
  ];

  return (
    <section className="mt-16 lg:mt-24 px-4 sm:px-8 lg:px-16">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-[32px] sm:text-[48px] lg:text-6xl font-bold leading-tight">
          Sacred Rudraksh Collection
        </h1>

        <p className="mt-4 lg:mt-5 text-[16px] sm:text-[20px] lg:text-2xl text-gray-700 leading-relaxed">
          Authentic, laboratory certified rudraksh beads with X-Ray reports.
        </p>

        <p className="mt-2 text-[16px] sm:text-[20px] lg:text-2xl text-gray-700 leading-relaxed">
          Each bead is blessed with sacred mantras and comes with pure silver pendant.
        </p>

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

export default RudrakshCollection;