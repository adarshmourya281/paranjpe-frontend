import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

function Footer() {
  return (
    <footer className="px-16 py-24 bg-[#f5f5f5]">

      {/* Heading */}

      <div className="text-center">

        <h1 className="text-[64px] font-bold uppercase">
          HOW TO ORDER
        </h1>

        <p className="text-[28px] font-semibold mt-4">
          Simple and secure ordering process
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-3 gap-10 mt-20">

        {/* Card 1 */}

        <div className="border border-gray-200 bg-white p-8 rounded-sm">

          <FaWhatsapp className="text-5xl mb-8" />

          <h2 className="text-2xl font-semibold mb-5">
            WhatsApp Order
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            Contact us directly on WhatsApp for instant ordering and queries
          </p>

          <button className="mt-10 font-semibold">
            Message on WhatsApp
          </button>

        </div>

        {/* Card 2 */}

        <div className="border border-gray-200 bg-white p-8 rounded-sm">

          <IoLocationOutline className="text-5xl mb-8" />

          <h2 className="text-2xl font-semibold mb-5">
            Bank Details
          </h2>

          <div className="space-y-2 text-lg text-gray-700">

            <p>
              <span className="font-semibold">Name:</span> Sachin Madhukar Paranjpe
            </p>

            <p>
              <span className="font-semibold">Bank:</span> HDFC Bank, Palghar
            </p>

            <p>
              <span className="font-semibold">Account:</span> 50200022980226
            </p>

            <p>
              <span className="font-semibold">IFSC:</span> HDFC0000663
            </p>

          </div>

        </div>

        {/* Card 3 */}

        <div className="border border-gray-200 bg-white p-8 rounded-sm">

          <FiClock className="text-5xl mb-8" />

          <h2 className="text-2xl font-semibold mb-5">
            Delivery Info
          </h2>

          <div className="space-y-5 text-lg text-gray-700">

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

      <div className="mt-20 border-t border-gray-300 pt-8 text-center text-gray-500">

        © 2026 PARANJPE ATTARWALE

      </div>

    </footer>
  );
}

export default Footer;