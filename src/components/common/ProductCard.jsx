function ProductCard({ image, title }) {
  return (
    <div className="w-[250px]">

      {/* Image Box */}

      <div className="border border-gray-500 bg-white">

        <img
          src={image}
          alt={title}
          className="w-full h-[240px] object-contain p-5"
        />

        {/* Title */}

        <div className="bg-[#2f2f2f] text-white text-center py-3 text-[15px]">

          {title}

        </div>

      </div>

      {/* Button */}

      <button className="w-full bg-[#19a84c] text-white py-3 mt-4 text-sm hover:bg-green-700 transition">

        Order on Whatsapp

      </button>

    </div>
  );
}

export default ProductCard;