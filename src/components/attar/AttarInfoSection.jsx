import infoSection from "../../assets/attars/infoSection.png";

function AttarInfoSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-10 lg:py-16">

      <img
        src={infoSection}
        alt="Premium Fragrances"
        className="w-full h-auto object-cover rounded-lg"
      />

    </section>
  );
}

export default AttarInfoSection;