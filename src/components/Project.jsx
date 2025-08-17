import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "Spam Sentinal",
      desc: "Detects spam messages using NLP and ML.",
      tech: ["Python", "Scikit-learn", "Streamlit"],
      link: "https://spam-in-detection.streamlit.app/",
    },
    {
      title: "WeatherApp",
      desc: "Provides weather updates with a clean UI.",
      tech: ["React", "API"],
      link: "https://ayanjaved.github.io/weatherApp/",
    },
    {
      title: "RentyWenty",
      desc: "Solution for renting Appartments with a user-friendly interface.",
      tech: ["JS", "MongoDB", "API"],
      link: "https://rentywenty.onrender.com/",
    },
    {
      title: "MindTussle",
      desc: "Quiz web app with real-time multiplayer.",
      tech: ["React", "MongoDB", "API"],
      link: "https://mindtussle.onrender.com/",
    },
    {
      title: "TicTacToe",
      desc: "Classic Tic Tac Toe game with a modern twist.",
      tech: ["JS", "HTML", "CSS"],
      link: "https://ayanjaved.github.io/tic-tac-toe/",
    },
    {
      title: "E-Commerce Store",
      desc: "An e-commerce application.",
      tech: ["HTML", "CSS"],
      link: "https://ayanjaved.github.io/Amazon-clone-css/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="relative group p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl"
          >
            {/* Inner card with glow effect */}
            <div className="relative h-full w-full rounded-2xl bg-white dark:bg-gray-950 p-6 flex flex-col shadow-lg transition-all duration-300 group-hover:shadow-blue-500/40">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{project.desc}</p>

              {/* Tech tags */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-md text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>

              {/* Animated glow overlay */}
              {/* Animated glow overlay */}
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500 pointer-events-none"></div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
