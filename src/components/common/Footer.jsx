import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

function Footer() {
  return (
    <footer id="footer-section" className="px-4 sm:px-6 lg:px-16 py-12 lg:py-24 bg-[#f5f5f5]">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold uppercase leading-tight">
          HOW TO ORDER
        </h1>

        <p className="text-lg sm:text-2xl lg:text-[28px] font-semibold mt-3 lg:mt-4">
          Simple and secure ordering process
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 mt-12 lg:mt-20">

        {/* Card 1 */}
        <div className="border border-gray-200 bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">

          <FaWhatsapp className="text-4xl sm:text-5xl mb-6 lg:mb-8" />

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-5">
            WhatsApp Order
          </h2>

          <p className="text-gray-600 leading-7 text-base sm:text-lg">
            Contact us directly on WhatsApp for instant ordering and queries
          </p>

          <button
            onClick={() =>
              window.open("https://wa.me/+919700088555", "_blank")
            }
            className="mt-6 lg:mt-10 font-semibold border-b border-black hover:text-green-600 transition-all duration-300"
          >
            Message on WhatsApp
          </button>

        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">

          <IoLocationOutline className="text-4xl sm:text-5xl mb-6 lg:mb-8" />

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-5">
            Bank Details
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-gray-700 break-words">

            <p>
              <span className="font-semibold">Name:</span>{" "}
              Sachin Madhukar Paranjpe
            </p>

            <p>
              <span className="font-semibold">Bank:</span>{" "}
              HDFC Bank, Palghar
            </p>

            <p>
              <span className="font-semibold">Account:</span>{" "}
              50200022980226
            </p>

            <p>
              <span className="font-semibold">IFSC:</span>{" "}
              HDFC0000663
            </p>

          </div>

        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">

          <FiClock className="text-4xl sm:text-5xl mb-6 lg:mb-8" />

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-5">
            Delivery Info
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-7">

            <p>
              Courier charges additional based on location and quantity
            </p>

            <p>
              Standard delivery: 7-10 days
            </p>

            <p>
              Rudraksha delivery: 1-1.5 months
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 lg:mt-20 border-t border-gray-300 pt-6 lg:pt-8 text-center text-sm sm:text-base text-gray-500">
        <p>© 2026 PARANJPE ATTARWALE</p>

        <p className="mt-2">
          Designed by{" "}
          <span className="font-semibold">
  <a
    href="https://www.sanstrojan.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Sanstrojan Solutions Pvt Ltd
  </a>
</span>
        </p>
      </div>

    </footer>
  );
}

export default Footer;