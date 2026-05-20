import leftLeaf from "../../assets/images/leftLeaf.png";
import rightFlower from "../../assets/images/rightFlower.png";

function Navbar() {
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

        {/* Logo */}
        <h1 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[42px] tracking-[2px] sm:tracking-[4px] lg:tracking-[6px] font-medium text-[#111] text-center leading-tight">
          PARANJPE ATTARWALE
        </h1>

        {/* Menu - Hidden on Mobile */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-10 lg:gap-12 mt-6 lg:mt-8 text-[13px] sm:text-[14px] lg:text-[15px] text-gray-500">

          <li className="cursor-pointer hover:text-black transition font-medium">
            Home
          </li>

          <li className="cursor-pointer hover:text-black transition">
            Rudraksh
          </li>

          <li className="cursor-pointer hover:text-black transition">
            New Launches
          </li>

          <li className="cursor-pointer hover:text-black transition">
            Our Story
          </li>

          <li className="cursor-pointer hover:text-black transition">
            Contact
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;