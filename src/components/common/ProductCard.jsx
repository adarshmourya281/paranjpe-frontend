function ProductCard({ image, title }) {
  return (
    <div className="w-full max-w-[250px] mx-auto">

      {/* Image Box */}
      <div className="border border-gray-500 bg-white rounded-md overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-[200px] sm:h-[220px] lg:h-[240px] object-contain p-4 sm:p-5"
        />

        {/* Title */}
        <div className="bg-[#2f2f2f] text-white text-center py-3 text-[14px] sm:text-[15px] px-2">

          {title}

        </div>

      </div>

      {/* Button */}
      <button className="w-full bg-[#19a84c] text-white py-3 mt-4 text-sm sm:text-[15px] hover:bg-green-700 transition rounded-md">

        Order on Whatsapp

      </button>

    </div>
  );
}

export default ProductCard;