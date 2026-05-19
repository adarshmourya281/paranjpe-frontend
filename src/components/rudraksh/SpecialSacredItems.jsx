import ProductCard from "../common/ProductCard";

import rudraksh1 from "../../assets/rudraksh/rudraksh1.png";
import rudraksh2 from "../../assets/rudraksh/rudraksh2.png";
import rudraksh3 from "../../assets/rudraksh/rudraksh3.png";
import rudraksh4 from "../../assets/rudraksh/rudraksh4.png";

function SpecialSacredItems() {

  const products = [
    {
      image: rudraksh1,
      title: "गौरी शंकर",
    },
    {
      image: rudraksh2,
      title: "गणेश",
    },
    {
      image: rudraksh3,
      title: "कालभैरव निराकार",
    },
    {
      image: rudraksh4,
      title: "गणेश",
    },
  ];

  return (
    <section className="mt-28 px-16">

      {/* Heading */}

      <h1 className="text-center text-6xl font-bold">
        Special Sacred Items
      </h1>

      {/* Products */}

      <div className="grid grid-cols-4 gap-10 mt-16">

        {products.map((item, index) => (

          <div key={index}>

            <ProductCard
              image={item.image}
              title={item.title}
            />

            <p className="text-center mt-4 text-xl text-gray-700">
              शिक्षण, ज्ञान आणि पूर्तता
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default SpecialSacredItems;