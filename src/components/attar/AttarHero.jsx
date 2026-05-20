
import heroBottle from "../../assets/attars/heroBottle.png";

function AttarHero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 pt-6 pb-10 md:pb-14 lg:pb-16">
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 mt-8 md:mt-10">
        {/* Left */}
        <div>
          <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[58px] leading-[40px] sm:leading-[56px] md:leading-[78px] text-[#2f2b28]">
            TRADITION BOTTLED,<br />SOPHISTICATION UNSEALED.
          </h1>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10">
            <button className="border-2 border-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg hover:bg-black hover:text-white transition">
              EXPLORE ATTARS
            </button>
            <button className="border-2 border-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg hover:bg-black hover:text-white transition">
              EXPLORE RUDRAKSH
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="flex justify-center md:justify-end pr-0 md:pr-10 mt-8 md:mt-0">
          <div className="border-[4px] md:border-[6px] border-black bg-white p-4 md:p-6 shadow-lg">
            <img
              src={heroBottle}
              alt="attar"
              className="w-[160px] sm:w-[200px] md:w-[240px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttarHero;