import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-6"
    >
      <div className="relative w-full max-w-4xl rounded-2xl border border-black/10 dark:border-white/10
                      bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-10 md:p-14
                      shadow-[0_10px_40px_-10px_rgba(0,0,0,.35)]">
        
        {/* Glowing accent line */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-tight text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          Hi 👋 I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Ayan Javed</span>, 
          a passionate Computer Science student and developer who loves crafting 
          <span className="font-medium"> modern, responsive, and AI-powered applications</span>. 
          I specialize in <span className="font-medium">React, JavaScript, and Machine Learning</span>, 
          and I’m driven by the challenge of building apps that are both 
          visually beautiful and technically impactful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 grid gap-8 sm:grid-cols-2 text-gray-800 dark:text-gray-200"
        >
          {/* Skills */}
          <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">💻 Skills</h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>⚡ Frontend: React, JavaScript, Tailwind</li>
              <li>🤖 AI/ML: NLP, Scikit-learn, AI APIs</li>
              <li>🛠 Backend: Node.js, Express, MongoDB</li>
              <li>📱 Tools: Git, Firebase, Streamlit</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">🌟 Interests</h3>
            <p className="text-sm leading-relaxed">
              I enjoy blending <span className="font-medium">design and technology </span> 
              to create seamless digital experiences. Beyond coding, I love exploring 
              AI-driven solutions, contributing to open-source projects, and constantly 
              learning new technologies that push the boundaries of innovation.
            </p>
          </div>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 p-6 rounded-xl bg-blue-50 dark:bg-blue-900/40 shadow-md text-center"
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">🚀 My Goal</h3>
          <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
            My mission is to become a versatile software engineer who can design 
            <span className="font-medium"> scalable, intelligent, and user-friendly applications</span>. 
            I aim to work on impactful projects, collaborate with talented teams, 
            and contribute to technology that makes people’s lives easier.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
