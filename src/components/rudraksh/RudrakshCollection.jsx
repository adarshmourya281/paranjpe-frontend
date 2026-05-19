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
    <section className="mt-24 px-16">

      {/* Heading */}

      <div className="text-center">

        <h1 className="text-6xl font-bold">
          Sacred Rudraksh Collection
        </h1>

        <p className="mt-5 text-2xl text-gray-700">
          Authentic, laboratory certified rudraksh beads with X-Ray reports.
        </p>

        <p className="mt-2 text-2xl text-gray-700">
          Each bead is blessed with sacred mantras and comes with pure silver pendant.
        </p>

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

export default RudrakshCollection;