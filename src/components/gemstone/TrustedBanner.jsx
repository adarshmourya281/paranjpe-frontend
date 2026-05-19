import bannerGems from "../../assets/images/bannerGems.png";

function TrustedBanner() {
  return (
    <section className="mt-28 px-16">

      <div className="relative w-full h-[360px] overflow-hidden bg-[#1d0f2e]">

        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#2d1145] to-[#14071f]" />

        {/* Content */}

        <div className="relative z-20 flex items-center justify-between h-full px-20">

          {/* Left Gems */}

          <img
            src={bannerGems}
            alt="gems"
            className="w-[380px] object-contain"
          />

          {/* Right Text */}

          <div className="flex-1 flex justify-center">

            <h1 className="text-white text-[68px] font-bold text-center leading-[90px]">

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