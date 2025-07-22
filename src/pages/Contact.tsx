"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ContactForm from "../components/ContactForm"
import { useTheme } from "../contexts/ThemeContext"

export default function Contact() {
  const [glitchText, setGlitchText] = useState("CONTACT")
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const glitchWords = ["CONTACT", "C0NT4CT", "CONT@CT", "C[]NT4CT", "CONTACT"]

  const startGlitch = () => {
    let index = 0
    const interval = setInterval(() => {
      setGlitchText(glitchWords[index])
      index++
      if (index >= glitchWords.length) {
        clearInterval(interval)
        setGlitchText("CONTACT")
      }
    }, 100)
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className={`font-anton text-4xl md:text-6xl mb-12 text-center cursor-pointer ${
            isDark ? "text-brutal-white" : "text-brutal-black"
          }`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={startGlitch}
          whileHover={{ scale: 1.05 }}
        >
          {glitchText}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={`mb-8 ${isDark ? "brutal-card-dark" : "brutal-card"}`}>
              <h2 className={`font-anton text-2xl mb-6 ${isDark ? "text-brutal-green" : "text-brutal-red"}`}>
                СВЯЗАТЬСЯ СО МНОЙ
              </h2>

              <div className="space-y-4 font-mono">
                <motion.div
                  className={`flex items-center space-x-4 p-4 border-2 ${
                    isDark
                      ? "bg-dark-bg text-brutal-white border-brutal-white"
                      : "bg-brutal-black text-brutal-white border-brutal-black"
                  }`}
                  whileHover={{
                    backgroundColor: isDark ? "#FF0000" : "#FF0000",
                    scale: 1.02,
                  }}
                >
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-bold">EMAIL</p>
                    <p>brutal@designer.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className={`flex items-center space-x-4 p-4 border-2 ${
                    isDark
                      ? "bg-dark-bg text-brutal-white border-brutal-white"
                      : "bg-brutal-black text-brutal-white border-brutal-black"
                  }`}
                  whileHover={{
                    backgroundColor: "#00FF00",
                    color: "#000000",
                    scale: 1.02,
                  }}
                >
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-bold">ТЕЛЕФОН</p>
                    <p>+7 (999) 123-45-67</p>
                  </div>
                </motion.div>

                <motion.div
                  className={`flex items-center space-x-4 p-4 border-2 ${
                    isDark
                      ? "bg-dark-bg text-brutal-white border-brutal-white"
                      : "bg-brutal-black text-brutal-white border-brutal-black"
                  }`}
                  whileHover={{
                    backgroundColor: "#0000FF",
                    scale: 1.02,
                  }}
                >
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-bold">СОЦИАЛЬНЫЕ СЕТИ</p>
                    <p>@brutal_designer</p>
                  </div>
                </motion.div>

                <motion.div
                  className={`flex items-center space-x-4 p-4 border-2 ${
                    isDark
                      ? "bg-dark-bg text-brutal-white border-brutal-white"
                      : "bg-brutal-black text-brutal-white border-brutal-black"
                  }`}
                  whileHover={{
                    backgroundColor: "#FF00FF",
                    scale: 1.02,
                  }}
                >
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-bold">ЛОКАЦИЯ</p>
                    <p>Москва, Россия</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className={`${
                isDark ? "brutal-card-dark bg-brutal-yellow text-brutal-black" : "brutal-card bg-brutal-yellow"
              }`}
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="font-anton text-xl mb-4">ВРЕМЯ РАБОТЫ</h3>
              <div className="font-mono space-y-2">
                <p>ПН-ПТ: 09:00 - 18:00</p>
                <p>СБ-ВС: ПО ДОГОВОРЕННОСТИ</p>
                <p className={`font-bold ${isDark ? "text-brutal-red" : "text-brutal-red"}`}>СРОЧНЫЕ ПРОЕКТЫ: 24/7</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
