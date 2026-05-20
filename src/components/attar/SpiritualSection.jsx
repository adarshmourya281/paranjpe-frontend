import spiritualBottle from "../../assets/attars/spiritualBottle.png";
import flower from "../../assets/attars/flower.png";

function SpiritualSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-12 lg:py-24 bg-[#f5f5f5] overflow-hidden">

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">

        {/* Left Image */}
        <div className="flex justify-center">

          <img
            src={spiritualBottle}
            alt="attar bottle"
            className="w-full max-w-[700px] h-auto lg:h-[560px] object-cover"
          />

        </div>

        {/* Right Content */}
        <div className="relative text-center lg:text-left">

          <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[64px] leading-[48px] sm:leading-[62px] lg:leading-[82px] text-black max-w-[700px] mx-auto lg:mx-0">

            Premium Fragrances &
            <br />
            Spiritual Treasures

          </h2>

          <p className="mt-6 lg:mt-8 text-[16px] sm:text-[20px] lg:text-[24px] leading-[30px] sm:leading-[36px] lg:leading-[42px] text-[#222] max-w-[650px] mx-auto lg:mx-0">

            Each product is carefully crafted with traditional
            methods and blessed with spiritual sanctity.

          </p>

          <button className="mt-8 lg:mt-12 border-2 border-black px-8 sm:px-12 lg:px-14 py-3 sm:py-4 lg:py-5 text-[16px] sm:text-[18px] lg:text-[22px] hover:bg-black hover:text-white transition-all duration-300">

            EXPLORE MORE

          </button>

          {/* Flower */}
          <img
            src={flower}
            alt="flower"
            className="absolute bottom-[-80px] sm:bottom-[-100px] lg:bottom-[-140px] 
            right-[-10px] lg:right-[-20px] 
            w-[100px] sm:w-[140px] lg:w-[190px] opacity-90"
          />

        </div>

      </div>

    </section>
  );
}

export default SpiritualSection;