import bannerGems from "../../assets/images/bannerGems.png";

function TrustedBanner() {
  return (
    <section className="mt-16 lg:mt-28 px-4 sm:px-8 lg:px-16">

      <div className="relative w-full min-h-[300px] lg:h-[360px] overflow-hidden bg-[#1d0f2e] rounded-xl">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d1145] to-[#14071f]" />

        {/* Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-6 sm:px-10 lg:px-20 py-10 lg:py-0 gap-8 lg:gap-0">

          {/* Left Gems */}
          <img
            src={bannerGems}
            alt="gems"
            className="w-[220px] sm:w-[300px] lg:w-[380px] object-contain"
          />

          {/* Right Text */}
          <div className="flex-1 flex justify-center">

            <h1 className="text-white text-[32px] sm:text-[48px] lg:text-[68px] font-bold text-center leading-[45px] sm:leading-[65px] lg:leading-[90px]">

              Products Of Trusted
              <br />
              Excellence

            </h1>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TrustedBanner;