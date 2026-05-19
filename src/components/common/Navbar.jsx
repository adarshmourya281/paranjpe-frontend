import leftLeaf from "../../assets/images/leftLeaf.png";
import rightFlower from "../../assets/images/rightFlower.png";

function Navbar() {
  return (
    <nav className="relative w-full flex justify-center pt-10">

      {/* Left Leaf */}

      <img
        src={leftLeaf}
        alt="leaf"
        className="absolute left-0 top-0 w-[230px]"
      />

      {/* Right Flower */}

      <img
        src={rightFlower}
        alt="flower"
        className="absolute right-0 top-0 w-[220px]"
      />

      <div className="flex flex-col items-center z-10">

        {/* Logo */}

        <h1 className="text-[42px] tracking-[6px] font-medium text-[#111]">
          PARANJPE ATTARWALE
        </h1>

        {/* Menu */}

        <ul className="flex gap-12 mt-8 text-[15px] text-gray-500">

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