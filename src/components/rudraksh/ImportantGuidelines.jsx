import rightFlower from "../../assets/images/rightFlower.png";

function ImportantGuidelines() {
  return (
    <section className="mt-16 lg:mt-28 px-4 sm:px-8 lg:px-16 relative overflow-hidden">

      {/* Flower */}
      <img
        src={rightFlower}
        alt="flower"
        className="absolute left-0 sm:left-4 lg:left-10 top-0 
        w-[70px] sm:w-[90px] lg:w-[120px] opacity-90"
      />

      {/* Box */}
      <div className="bg-[#f4efe6] py-10 sm:py-14 lg:py-20 px-6 sm:px-10 lg:px-20">

        <h1 className="text-center text-[32px] sm:text-[48px] lg:text-6xl font-bold leading-tight">
          Important Guidelines
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-10 lg:mt-16">

          {/* Left */}
          <div>

            <h2 className="text-[#f28c00] text-[26px] sm:text-[32px] lg:text-4xl font-bold">
              Wearing Guidelines:
            </h2>

            <ul className="mt-6 lg:mt-8 space-y-4 lg:space-y-5 text-[18px] sm:text-[22px] lg:text-2xl leading-relaxed">

              <li>• मद्यपान न करणे (No alcohol consumption)</li>

              <li>• परस्त्रीगमन न करणे (Maintain fidelity)</li>

              <li>• जुगार न खेळणे (No gambling)</li>

            </ul>

          </div>

          {/* Right */}
          <div>

            <h2 className="text-[#f28c00] text-[26px] sm:text-[32px] lg:text-4xl font-bold">
              Certification:
            </h2>

            <ul className="mt-6 lg:mt-8 space-y-4 lg:space-y-5 text-[18px] sm:text-[22px] lg:text-2xl leading-relaxed">

              <li>• Laboratory certification available</li>

              <li>• X-Ray reports provided</li>

              <li>• Pure silver pendant included</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ImportantGuidelines;