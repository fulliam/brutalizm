"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Resume() {
  const [activeSection, setActiveSection] = useState("experience")

  const sections = {
    experience: {
      title: "ОПЫТ РАБОТЫ",
      content: [
        {
          title: "Senior Brutal Designer",
          company: "CHAOS STUDIO",
          period: "2022 - НАСТОЯЩЕЕ ВРЕМЯ",
          description: "Создание брутальных веб-интерфейсов и экспериментальных дизайн-решений",
        },
        {
          title: "Frontend Developer",
          company: "GLITCH AGENCY",
          period: "2020 - 2022",
          description: "Разработка интерактивных веб-приложений с использованием React и Next.js",
        },
        {
          title: "UI/UX Designer",
          company: "PIXEL FACTORY",
          period: "2018 - 2020",
          description: "Дизайн пользовательских интерфейсов для мобильных и веб-приложений",
        },
      ],
    },
    skills: {
      title: "НАВЫКИ",
      content: [
        { category: "ДИЗАЙН", items: ["Figma", "Adobe Creative Suite", "Sketch", "Principle"] },
        { category: "РАЗРАБОТКА", items: ["React", "Next.js", "TypeScript", "Framer Motion"] },
        { category: "ИНСТРУМЕНТЫ", items: ["Git", "Webpack", "Sass", "Tailwind CSS"] },
      ],
    },
    education: {
      title: "ОБРАЗОВАНИЕ",
      content: [
        {
          title: "Магистр Дизайна",
          company: "МОСКОВСКИЙ ИНСТИТУТ ДИЗАЙНА",
          period: "2016 - 2018",
          description: "Специализация: Цифровой дизайн и интерактивные медиа",
        },
        {
          title: "Бакалавр Информатики",
          company: "МГУ",
          period: "2012 - 2016",
          description: "Факультет вычислительной математики и кибернетики",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="font-anton text-4xl md:text-6xl mb-12 text-center glitch-text"
          data-text="RESUME.TXT"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          RESUME.TXT
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="brutal-card mb-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-brutal-red mx-auto mb-4 border-4 border-brutal-black"></div>
                <h2 className="font-anton text-2xl">BRUTAL DESIGNER</h2>
                <p className="font-mono text-sm mt-2">CREATIVE DEVELOPER</p>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <p>📧 brutal@designer.com</p>
                <p>📱 +7 (999) 123-45-67</p>
                <p>📍 Москва, Россия</p>
                <p>🌐 github.com/brutal</p>
              </div>
            </div>

            <div className="space-y-2">
              {Object.keys(sections).map((key) => (
                <motion.button
                  key={key}
                  className={`w-full text-left font-mono p-3 border-2 border-brutal-black transition-all ${
                    activeSection === key
                      ? "bg-brutal-yellow text-brutal-black"
                      : "bg-brutal-white text-brutal-black hover:bg-brutal-pink"
                  }`}
                  onClick={() => setActiveSection(key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sections[key as keyof typeof sections].title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="brutal-card">
              <h2 className="font-anton text-3xl mb-8 text-brutal-red">
                {sections[activeSection as keyof typeof sections].title}
              </h2>

              {activeSection === "skills" ? (
                <div className="space-y-6">
                  {(sections.skills.content as any[]).map((skillGroup, index) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-anton text-xl mb-3 text-brutal-blue">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill: string, skillIndex: number) => (
                          <motion.span
                            key={skill}
                            className="bg-brutal-black text-brutal-white px-3 py-1 font-mono text-sm border-2 border-brutal-black"
                            whileHover={{
                              backgroundColor: "#FF0000",
                              scale: 1.05,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {(sections[activeSection as keyof typeof sections].content as any[]).map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-brutal-red pl-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-anton text-xl mb-2">{item.title}</h3>
                      <p className="font-mono text-brutal-blue mb-2">
                        {item.company} | {item.period}
                      </p>
                      <p className="font-helvetica">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
