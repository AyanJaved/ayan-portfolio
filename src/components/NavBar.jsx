import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons for menu toggle

export default function Navbar() {
  const links = ["Home", "About", "Projects", "Contact"];
  const { scrollYProgress } = useScroll(); // scroll progress 0 → 1
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Ayan Portfolio
        </motion.h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative group"
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-6 bg-gray-800 text-lg font-medium p-6"
        >
          {links.map((link, idx) => (
            <li key={idx} className="cursor-pointer">
              <a
                href={`#${link.toLowerCase()}`}
                className="block hover:text-blue-400"
                onClick={() => setIsOpen(false)} // close menu on link click
              >
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}

      {/* Scroll progress bar with gradient */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
}
