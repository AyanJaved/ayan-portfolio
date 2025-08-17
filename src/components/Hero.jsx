import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id ="home"className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      
      {/* Gradient circle glow - simplified */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ayan Javed
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
      >
        Full Stack Developer <span className="text-blue-400">|</span> AI Enthusiast
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 flex gap-4 z-10"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:scale-105 transition-transform font-medium"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-gray-400 hover:border-white hover:bg-white/10 transition-all font-medium"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
