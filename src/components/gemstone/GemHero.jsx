import heroImage from "../../assets/images/hero.png";

function GemHero() {
  return (
    <section className="relative px-24 mt-16">

      <div className="flex justify-between items-center">

        {/* Left */}

        <div className="max-w-[540px]">

          <h2 className="text-[58px] leading-[78px] font-serif text-[#2e2a26] uppercase">

            EACH BEAD IS BLESSED WITH SACRED MANTRAS AND COMES WITH PURE SILVER PENDANT.

          </h2>

          <div className="flex gap-6 mt-12">

            <button className="border border-black px-10 py-4 text-sm hover:bg-black hover:text-white transition">

              SHOP NOW

            </button>

            <button className="border border-black px-10 py-4 text-sm hover:bg-black hover:text-white transition">

              EXPLORE RUDRAKSH

            </button>

          </div>

        </div>

        {/* Right Image */}

        <div className="border-[7px] border-black p-4 bg-white">

          <img
            src={heroImage}
            alt=""
            className="w-[340px] h-[340px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}

export default GemHero;