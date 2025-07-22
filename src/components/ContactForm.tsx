"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

  if (submitted) {
    return (
      <motion.div
        className={`text-center ${
          isDark ? "brutal-card-dark bg-brutal-green text-brutal-black" : "brutal-card bg-brutal-green"
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <h2 className="font-anton text-3xl mb-4">СООБЩЕНИЕ ОТПРАВЛЕНО!</h2>
        <p className="font-mono mb-6">Я свяжусь с вами в ближайшее время</p>
        <motion.button
          className={`brutal-button ${
            isDark ? "bg-brutal-black text-brutal-white border-brutal-white" : "bg-brutal-black text-brutal-white"
          }`}
          onClick={() => setSubmitted(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ОТПРАВИТЬ ЕЩЕ
        </motion.button>
      </motion.div>
    )
  }

  return (
    <div className={isDark ? "brutal-card-dark" : "brutal-card"}>
      <h2 className={`font-anton text-2xl mb-6 ${isDark ? "text-brutal-green" : "text-brutal-red"}`}>
        НАПИСАТЬ СООБЩЕНИЕ
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <label className="block font-mono text-sm mb-2">ИМЯ *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-3 border-4 font-mono focus:outline-none transition-colors ${
              isDark
                ? "border-brutal-white bg-dark-surface text-dark-text focus:border-brutal-green"
                : "border-brutal-black bg-white text-black focus:border-brutal-red"
            }`}
            placeholder="ВАШЕ ИМЯ"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <label className="block font-mono text-sm mb-2">EMAIL *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-3 border-4 font-mono focus:outline-none transition-colors ${
              isDark
                ? "border-brutal-white bg-dark-surface text-dark-text focus:border-brutal-green"
                : "border-brutal-black bg-white text-black focus:border-brutal-red"
            }`}
            placeholder="your@email.com"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <label className="block font-mono text-sm mb-2">ТЕМА</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-3 border-4 font-mono focus:outline-none transition-colors ${
              isDark
                ? "border-brutal-white bg-dark-surface text-dark-text focus:border-brutal-green"
                : "border-brutal-black bg-white text-black focus:border-brutal-red"
            }`}
          >
            <option value="">ВЫБЕРИТЕ ТЕМУ</option>
            <option value="design">ДИЗАЙН ПРОЕКТ</option>
            <option value="development">РАЗРАБОТКА</option>
            <option value="collaboration">СОТРУДНИЧЕСТВО</option>
            <option value="other">ДРУГОЕ</option>
          </select>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <label className="block font-mono text-sm mb-2">СООБЩЕНИЕ *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`w-full p-3 border-4 font-mono focus:outline-none transition-colors resize-none ${
              isDark
                ? "border-brutal-white bg-dark-surface text-dark-text focus:border-brutal-green"
                : "border-brutal-black bg-white text-black focus:border-brutal-red"
            }`}
            placeholder="РАССКАЖИТЕ О ВАШЕМ ПРОЕКТЕ..."
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-anton text-xl py-4 border-4 transition-all ${
            isSubmitting
              ? isDark
                ? "bg-brutal-red text-brutal-white border-brutal-red animate-pulse"
                : "bg-brutal-red text-brutal-white border-brutal-red animate-pulse"
              : isDark
                ? "bg-brutal-yellow text-brutal-black border-brutal-yellow hover:bg-brutal-pink"
                : "bg-brutal-yellow text-brutal-black border-brutal-black hover:bg-brutal-pink"
          }`}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {isSubmitting ? "ОТПРАВКА..." : "ОТПРАВИТЬ СООБЩЕНИЕ"}
        </motion.button>
      </form>
    </div>
  )
}
