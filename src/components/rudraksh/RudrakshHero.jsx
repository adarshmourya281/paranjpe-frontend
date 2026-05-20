import rudrakshHero from "../../assets/rudraksh/rudrakshHero.png";

function RudrakshHero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-8 lg:px-20 pt-4 pb-8">

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 mt-6 lg:mt-10">

        {/* Left Side */}
        <div className="flex flex-col justify-center text-center lg:text-left">

          <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] leading-[48px] sm:leading-[62px] lg:leading-[78px] font-serif text-[#2b2b2b] max-w-[650px] mx-auto lg:mx-0">

            EACH BEAD IS
            <br />
            BLESSED WITH
            <br />
            SACRED MANTRAS
            <br />
            AND COMES WITH
            <br />
            PURE SILVER
            <br />
            PENDANT.

          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-14 justify-center lg:justify-start">

            <button className="border-2 border-black px-6 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-medium hover:bg-black hover:text-white transition-all duration-300">

              SHOP NOW

            </button>

            <button className="border-2 border-black px-6 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-medium hover:bg-black hover:text-white transition-all duration-300">

              EXPLORE RUDRAKSH

            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end lg:pr-10">

          <div className="border-[4px] sm:border-[6px] border-black bg-white p-4 sm:p-6 shadow-lg">

            <img
              src={rudrakshHero}
              alt="rudraksh"
              className="w-[220px] sm:w-[280px] lg:w-[320px] object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default RudrakshHero;