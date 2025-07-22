"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  const [glitchText, setGlitchText] = useState("CONTACT")

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
          className="font-anton text-4xl md:text-6xl mb-12 text-center cursor-pointer"
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
            <div className="brutal-card mb-8">
              <h2 className="font-anton text-2xl mb-6 text-brutal-red">СВЯЗАТЬСЯ СО МНОЙ</h2>

              <div className="space-y-4 font-mono">
                <motion.div
                  className="flex items-center space-x-4 p-4 bg-brutal-black text-brutal-white border-2 border-brutal-black"
                  whileHover={{ backgroundColor: "#FF0000", scale: 1.02 }}
                >
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-bold">EMAIL</p>
                    <p>brutal@designer.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-brutal-black text-brutal-white border-2 border-brutal-black"
                  whileHover={{ backgroundColor: "#00FF00", scale: 1.02 }}
                >
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-bold">ТЕЛЕФОН</p>
                    <p>+7 (999) 123-45-67</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-brutal-black text-brutal-white border-2 border-brutal-black"
                  whileHover={{ backgroundColor: "#0000FF", scale: 1.02 }}
                >
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-bold">СОЦИАЛЬНЫЕ СЕТИ</p>
                    <p>@brutal_designer</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-brutal-black text-brutal-white border-2 border-brutal-black"
                  whileHover={{ backgroundColor: "#FF00FF", scale: 1.02 }}
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
              className="brutal-card bg-brutal-yellow"
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="font-anton text-xl mb-4">ВРЕМЯ РАБОТЫ</h3>
              <div className="font-mono space-y-2">
                <p>ПН-ПТ: 09:00 - 18:00</p>
                <p>СБ-ВС: ПО ДОГОВОРЕННОСТИ</p>
                <p className="text-brutal-red font-bold">СРОЧНЫЕ ПРОЕКТЫ: 24/7</p>
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
