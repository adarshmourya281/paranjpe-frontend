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
    <section className="mt-16 lg:mt-28 px-4 sm:px-8 lg:px-16">

      {/* Heading */}
      <h1 className="text-center text-[32px] sm:text-[48px] lg:text-6xl font-bold leading-tight">
        Special Sacred Items
      </h1>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-12 lg:mt-16 place-items-center">

        {products.map((item, index) => (

          <div key={index} className="w-full max-w-[250px]">

            <ProductCard
              image={item.image}
              title={item.title}
            />

            <p className="text-center mt-4 text-[16px] sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              शिक्षण, ज्ञान आणि पूर्तता
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default SpecialSacredItems;