import heroImage from "../../assets/images/hero.png";

function GemHero() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-24 mt-10 lg:mt-16">

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-16">

        {/* Left */}
        <div className="max-w-[540px] text-center lg:text-left">

          <h2 className="text-[30px] sm:text-[42px] lg:text-[58px] leading-[42px] sm:leading-[58px] lg:leading-[78px] font-serif text-[#2e2a26] uppercase">

            EACH BEAD IS BLESSED WITH SACRED MANTRAS AND COMES WITH PURE SILVER PENDANT.

          </h2>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 lg:mt-12 justify-center lg:justify-start">

            <button className="border border-black px-6 sm:px-10 py-3 sm:py-4 text-sm hover:bg-black hover:text-white transition">

              SHOP NOW

            </button>

            <button className="border border-black px-6 sm:px-10 py-3 sm:py-4 text-sm hover:bg-black hover:text-white transition">

              EXPLORE RUDRAKSH

            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="border-[5px] lg:border-[7px] border-black p-3 sm:p-4 bg-white">

          <img
            src={heroImage}
            alt="Hero"
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}

export default GemHero;