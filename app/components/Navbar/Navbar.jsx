
// import { Link } from "react-router-dom";
import Link from "next/link";
import ToggleBtn from "../ToggleBtn";
const Navbar = () => {
  

  return (
    <nav className="absolute inset-0 z-10 pt-8   px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white h-[100px] w-[100px] font-bold text-xl">
          <img src="kissanlogo.png" alt="Kissan Dost" className="h-[100px] w-[100px]" />
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/"  className=" font-poppinsMedium text-white hover:text-green-200">Home</Link>
          <Link href="/FarmerCommunity" className=" font-poppinsMedium text-white hover:text-green-200">Community</Link>
          <Link href="/loanfinder"  className=" font-poppinsMedium text-white hover:text-green-200">Loans</Link>
          <Link href="/About"   className=" font-poppinsMedium text-white hover:text-green-200">About Us</Link>
          <Link href="/Contact"  className=" font-poppinsMedium text-white hover:text-green-200">Contact Us</Link>
          <Link href="/chatbot"  className=" font-poppinsMedium text-white hover:text-green-200">Chat Bot</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <ToggleBtn />
        </div>
      </div>

      {/* Mobile Navbar Links */}
      {/* <div
  className={`md:hidden flex flex-col items-center justify-start absolute top-16 left-0 w-full bg-black bg-opacity-3 0 p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
>
  <Link to="/"
    
    className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-white transition-all duration-300 ease-in-out"
  >
    Home
  </Link>
  <Link to="/FarmerCommunity"
    
    className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-white transition-all duration-300 ease-in-out"
  >
    Community
  </Link>
  <Link to="/loanfinder"
    
    className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-white transition-all duration-300 ease-in-out"
  >
    Loans
  </Link>
  <Link to="/About"
    
    className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-white transition-all duration-300 ease-in-out"
  >
    About Us
  </Link>
  <Link to="/Contact"
    
    className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-white transition-all duration-300 ease-in-out"
  >
    Contact Us
  </Link>
  <Link to="/chatbot"  className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-white transition-all duration-300 ease-in-out">Chat Bot</Link>
</div> */}

    </nav>
  );
};

export default Navbar;

