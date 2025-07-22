"use client"

import React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
        className="brutal-card bg-brutal-green text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <h2 className="font-anton text-3xl mb-4">СООБЩЕНИЕ ОТПРАВЛЕНО!</h2>
        <p className="font-mono mb-6">Я свяжусь с вами в ближайшее время</p>
        <motion.button
          className="brutal-button bg-brutal-black text-brutal-white"
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
    <div className="brutal-card">
      <h2 className="font-anton text-2xl mb-6 text-brutal-red">НАПИСАТЬ СООБЩЕНИЕ</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <label className="block font-mono text-sm mb-2">ИМЯ *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border-4 border-brutal-black font-mono focus:outline-none focus:border-brutal-red transition-colors"
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
            className="w-full p-3 border-4 border-brutal-black font-mono focus:outline-none focus:border-brutal-red transition-colors"
            placeholder="your@email.com"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <label className="block font-mono text-sm mb-2">ТЕМА</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border-4 border-brutal-black font-mono focus:outline-none focus:border-brutal-red transition-colors"
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
            className="w-full p-3 border-4 border-brutal-black font-mono focus:outline-none focus:border-brutal-red transition-colors resize-none"
            placeholder="РАССКАЖИТЕ О ВАШЕМ ПРОЕКТЕ..."
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-anton text-xl py-4 border-4 border-brutal-black transition-all ${
            isSubmitting
              ? "bg-brutal-red text-brutal-white animate-pulse"
              : "bg-brutal-yellow text-brutal-black hover:bg-brutal-pink"
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
