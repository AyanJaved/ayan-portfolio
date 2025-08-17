import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const links = ["Home", "About", "Projects", "Contact"];
  const { scrollYProgress } = useScroll(); // scroll progress 0 → 1

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

        {/* Nav links */}
        <ul className="flex gap-8 text-lg font-medium">
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative group"
            >
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400">
                {link}
              </a>
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Scroll progress bar with gradient */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
}
