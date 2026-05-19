import rudrakshHero from "../../assets/rudraksh/rudrakshHero.png";

function RudrakshHero() {
  return (
    <section className="relative overflow-hidden px-20 pt-4 pb-8">

      {/* Main Content */}

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 items-center gap-10 mt-10">

        {/* Left Side */}

        <div className="flex flex-col justify-center">

          <h1 className="text-[52px] leading-[78px] font-serif text-[#2b2b2b] max-w-[650px]">

            EACH BEAD IS
            BLESSED WITH
            SACRED MANTRAS
            AND COMES WITH
            PURE SILVER
            PENDANT.

          </h1>

          {/* Buttons */}

          <div className="flex gap-8 mt-14">

            <button className="border-2 border-black px-12 py-5 text-lg font-medium hover:bg-black hover:text-white transition-all duration-300">

              SHOP NOW

            </button>

            <button className="border-2 border-black px-12 py-5 text-lg font-medium hover:bg-black hover:text-white transition-all duration-300">

              EXPLORE RUDRAKSH

            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-end pr-10">

          <div className="border-[6px] border-black bg-white p-6 shadow-lg">

            <img
              src={rudrakshHero}
              alt="rudraksh"
              className="w-[320px] object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default RudrakshHero;