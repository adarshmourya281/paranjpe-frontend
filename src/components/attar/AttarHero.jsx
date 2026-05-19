
import heroBottle from "../../assets/attars/heroBottle.png";

function AttarHero() {
  return (
    <section className="relative overflow-hidden px-20 pt-6 pb-16">

      {/* Left Leaf */}

     

      {/* Main Content */}

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 items-center gap-12 mt-10">

        {/* Left */}

        <div>

          <h1 className="font-serif text-[58px] leading-[78px] text-[#2f2b28]">

            TRADITION BOTTLED,
            <br />
            SOPHISTICATION
            UNSEALED.

          </h1>

          {/* Buttons */}

          <div className="flex gap-6 mt-10">

            <button className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition">

              EXPLORE ATTARS

            </button>

            <button className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition">

              EXPLORE RUDRAKSH

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-end pr-10">

          <div className="border-[6px] border-black bg-white p-6 shadow-lg">

            <img
              src={heroBottle}
              alt="attar"
              className="w-[240px] object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default AttarHero;