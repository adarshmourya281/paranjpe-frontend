import spiritualBottle from "../../assets/attars/spiritualBottle.png";
import flower from "../../assets/attars/flower.png";

function SpiritualSection() {
  return (
    <section className="px-20 py-24 bg-[#f5f5f5] overflow-hidden">

      <div className="max-w-[1500px] mx-auto grid grid-cols-2 items-center gap-12">

        {/* Left Image */}

        <div>

          <img
            src={spiritualBottle}
            alt="attar bottle"
            className="w-[700px] h-[560px] object-cover"
          />

        </div>

        {/* Right Content */}

        <div className="relative">

          <h2 className="font-serif text-[64px] leading-[82px] text-black max-w-[700px]">

            Premium Fragrances &
            <br />
            Spiritual Treasures

          </h2>

          <p className="mt-8 text-[24px] leading-[42px] text-[#222] max-w-[650px]">

            Each product is carefully crafted with traditional
            methods and blessed with spiritual sanctity.

          </p>

          <button className="mt-12 border-2 border-black px-14 py-5 text-[22px] hover:bg-black hover:text-white transition-all duration-300">

            EXPLORE MORE

          </button>

          {/* Flower */}

          <img
            src={flower}
            alt="flower"
            className="absolute bottom-[-140px] right-[-20px] w-[190px]"
          />

        </div>

      </div>

    </section>
  );
}

export default SpiritualSection;