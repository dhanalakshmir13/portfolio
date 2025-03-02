import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-5 py-4 bg-black text-white items-center">
      {/* Logo */}
      <a className="font-bold text-lg" href="#">
        Dhanalakshmi R
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-custom">Home</a></li>
          <li><a href="#about" className="hover:text-custom">About</a></li>
          <li><a href="#achievement" className="hover:text-custom">Achievements</a></li>
          <li><a href="#project" className="hover:text-custom">Project</a></li>
          
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="absolute top-16 left-0 w-full bg-custom text-white p-5 shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4">
            <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li><a href="#achievement" onClick={() => setToggleMenu(false)}>Achievements</a></li>
            <li><a href="#project" className="hover:text-gray-400">Project</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Button */}
      <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
        <Bars3Icon className="text-white h-6 w-6" />
      </button>
    </header>
  );
}
