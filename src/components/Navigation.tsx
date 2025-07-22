"use client"

import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { Sun, Moon } from "lucide-react"

export default function Navigation() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme, isAnimating } = useTheme()

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/resume", label: "RESUME" },
    { href: "/contact", label: "CONTACT" },
  ]

  const isDark = theme === "dark"

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b-4 transition-colors duration-300 ${
        isDark ? "bg-dark-bg border-brutal-white" : "bg-light-bg border-brutal-black"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className={`font-anton text-2xl ${isDark ? "text-brutal-yellow" : "text-brutal-red"}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            BRUTAL.DEV
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.href}
                  className={`font-mono px-4 py-2 border-2 transition-all ${
                    location.pathname === item.href
                      ? isDark
                        ? "bg-brutal-green text-brutal-black border-brutal-green"
                        : "bg-brutal-red text-brutal-white border-brutal-red"
                      : isDark
                        ? "bg-dark-surface text-dark-text border-brutal-white hover:bg-brutal-blue hover:text-brutal-white"
                        : "bg-brutal-white text-brutal-black border-brutal-black hover:bg-brutal-yellow"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              disabled={isAnimating}
              className={`ml-4 p-2 border-2 transition-all ${
                isDark
                  ? "bg-brutal-yellow text-brutal-black border-brutal-yellow hover:bg-brutal-orange"
                  : "bg-brutal-black text-brutal-white border-brutal-black hover:bg-brutal-purple hover:border-brutal-purple"
              } ${isAnimating ? "animate-theme-switch" : ""}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              disabled={isAnimating}
              className={`p-2 border-2 transition-all ${
                isDark
                  ? "bg-brutal-yellow text-brutal-black border-brutal-yellow"
                  : "bg-brutal-black text-brutal-white border-brutal-black"
              } ${isAnimating ? "animate-theme-switch" : ""}`}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.button
              className={`font-anton text-2xl ${isDark ? "text-brutal-white" : "text-brutal-black"}`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? "X" : "☰"}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block font-mono px-4 py-2 border-2 transition-colors ${
                  location.pathname === item.href
                    ? isDark
                      ? "bg-brutal-green text-brutal-black border-brutal-green"
                      : "bg-brutal-red text-brutal-white border-brutal-red"
                    : isDark
                      ? "bg-dark-surface text-dark-text border-brutal-white"
                      : "bg-brutal-white text-brutal-black border-brutal-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
