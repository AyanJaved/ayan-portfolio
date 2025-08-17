import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-6"
    >
      <div className="relative w-full max-w-3xl rounded-2xl border border-black/10 dark:border-white/10
                      bg-white/60 dark:bg-gray-900/60 backdrop-blur p-8 md:p-10
                      shadow-[0_10px_40px_-10px_rgba(0,0,0,.35)]">
        {/* subtle glowing accent line */}
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px
                        bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold text-center tracking-tight
                       text-gray-900 dark:text-white"
          >
            Let’s Connect
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-3 text-center text-gray-600 dark:text-gray-300"
          >
            Open to internships, freelance, and collabs. Reach me on your favorite platform.
          </motion.p>

          {/* Single-line chips with graceful overflow on very small screens */}
          <motion.div
  variants={container}
  className="mt-8 overflow-x-auto no-scrollbar flex justify-center"
>

            <div className="inline-flex gap-4">
              <motion.a
                variants={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/Ayan-Javed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="group inline-flex items-center gap-3 rounded-full px-5 py-3
                           font-medium text-white shadow ring-1 ring-black/10
                           bg-gradient-to-r from-blue-600 to-blue-500
                           hover:shadow-lg transition-all"
              >
                <FaLinkedin className="text-white" />
                <span className="tracking-wide">LinkedIn</span>
              </motion.a>

              <motion.a
                variants={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/AyanJaved"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="group inline-flex items-center gap-3 rounded-full px-5 py-3
                           font-medium text-white shadow ring-1 ring-black/10
                           bg-gradient-to-r from-gray-900 to-gray-700
                           hover:shadow-lg transition-all"
              >
                <FaGithub className="text-white" />
                <span className="tracking-wide">GitHub</span>
              </motion.a>

              <motion.a
                variants={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:9307ayan@gmail.com"
                aria-label="Email"
                title="Email"
                className="group inline-flex items-center gap-3 rounded-full px-5 py-3
                           font-medium text-white shadow ring-1 ring-black/10
                           bg-gradient-to-r from-rose-600 to-red-500
                           hover:shadow-lg transition-all"
              >
                <MdEmail className="text-white" />
                <span className="tracking-wide">Gmail</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Subtle helper text */}
          <motion.p
            variants={item}
            className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
          >
            Prefer quick mail? <a href="mailto:your-email@gmail.com" className="underline hover:opacity-80">9307ayan@gmail.com</a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
