import { useState } from "react";
import { useRef } from "react";
// Helper function to scroll to footer
const scrollToFooter = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import leftLeaf from "../../assets/images/leftLeaf.png";
import rightFlower from "../../assets/images/rightFlower.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full flex justify-center pt-6 sm:pt-8 lg:pt-10 overflow-hidden">

      {/* Left Leaf */}
      <img
        src={leftLeaf}
        alt="leaf"
        className="absolute left-0 top-0 
        w-[90px] sm:w-[140px] md:w-[180px] lg:w-[230px]"
      />

      {/* Right Flower */}
      <img
        src={rightFlower}
        alt="flower"
        className="absolute right-0 top-0 
        w-[90px] sm:w-[140px] md:w-[180px] lg:w-[220px]"
      />

      <div className="flex flex-col items-center z-10 px-4 w-full">

        {/* Top Section */}
        <div className="w-full flex items-center justify-between sm:justify-center">

          {/* Logo */}
          <h1 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[42px] tracking-[2px] sm:tracking-[4px] lg:tracking-[6px] font-medium text-[#111] text-center leading-tight">
            PARANJPE ATTARWALE
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-3xl text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-10 lg:gap-12 mt-6 lg:mt-8 text-[13px] sm:text-[14px] lg:text-[15px] text-gray-500">

          <li className="cursor-pointer hover:text-black transition font-medium">
            <Link to="/">Home</Link>
          </li>


          <li className="cursor-pointer hover:text-black transition">
            <Link to="/rudraksh">Rudraksh</Link>
          </li>
          <li className="cursor-pointer hover:text-black transition">
            <Link to="/Gemstone">Gemstone</Link>
          </li>
          <li className="cursor-pointer hover:text-black transition">
            <Link to="/attar">Attar</Link>
          </li>

         

          <li className="cursor-pointer hover:text-black transition">
            <Link to="/new-launches">New Launches</Link>
          </li>

          <li className="cursor-pointer hover:text-black transition">
            <Link to="/our-story">Our Story</Link>
          </li>
          <li className="cursor-pointer hover:text-black transition" onClick={scrollToFooter}>
            Contact
          </li>

        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="sm:hidden flex flex-col items-center gap-5 mt-6 text-[15px] text-gray-700 bg-white w-full py-6 rounded-xl shadow-lg">


            <li className="cursor-pointer hover:text-black transition font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-black transition">
              <Link to="/rudraksh" onClick={() => setMenuOpen(false)}>
                Rudraksh
              </Link>
            </li>
            <li className="cursor-pointer hover:text-black transition">
              <Link to="/Gemstone" onClick={() => setMenuOpen(false)}>
                Gemstone
              </Link>
            </li>
            <li className="cursor-pointer hover:text-black transition">
              <Link to="/attar" onClick={() => setMenuOpen(false)}>
                Attar
              </Link>
            </li>
            // Mobile Menu Links Update

            <li className="cursor-pointer hover:text-black transition">
              <Link to="/new-launches" onClick={() => setMenuOpen(false)}>
                New Launches
              </Link>
            </li>

            <li className="cursor-pointer hover:text-black transition">
              <Link to="/our-story" onClick={() => setMenuOpen(false)}>
                Our Story
              </Link>
            </li>
            <li className="cursor-pointer hover:text-black transition" onClick={() => { scrollToFooter(); setMenuOpen(false); }}>
              Contact
            </li>

          </ul>
        )}

      </div>

    </nav>
  );
}

export default Navbar;