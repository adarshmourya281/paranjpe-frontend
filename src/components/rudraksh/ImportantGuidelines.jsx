import rightFlower from "../../assets/images/rightFlower.png";

function ImportantGuidelines() {
  return (
    <section className="mt-28 px-16 relative">

      {/* Flower */}

      <img
        src={rightFlower}
        alt="flower"
        className="absolute left-10 top-0 w-[120px]"
      />

      {/* Box */}

      <div className="bg-[#f4efe6] py-20 px-20">

        <h1 className="text-center text-6xl font-bold">
          Important Guidelines
        </h1>

        <div className="grid grid-cols-2 gap-20 mt-16">

          {/* Left */}

          <div>

            <h2 className="text-[#f28c00] text-4xl font-bold">
              Wearing Guidelines:
            </h2>

            <ul className="mt-8 space-y-5 text-2xl">

              <li>• मद्यपान न करणे (No alcohol consumption)</li>

              <li>• परस्त्रीगमन न करणे (Maintain fidelity)</li>

              <li>• जुगार न खेळणे (No gambling)</li>

            </ul>

          </div>

          {/* Right */}

          <div>

            <h2 className="text-[#f28c00] text-4xl font-bold">
              Certification:
            </h2>

            <ul className="mt-8 space-y-5 text-2xl">

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