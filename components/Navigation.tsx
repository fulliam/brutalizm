"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/resume", label: "RESUME" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-brutal-black border-b-4 border-brutal-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div className="font-anton text-2xl text-brutal-yellow" whileHover={{ scale: 1.1, rotate: 5 }}>
            BRUTAL.DEV
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className={`font-mono px-4 py-2 border-2 border-brutal-white transition-all ${
                    pathname === item.href
                      ? "bg-brutal-red text-brutal-white"
                      : "bg-brutal-white text-brutal-black hover:bg-brutal-yellow"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden font-anton text-2xl text-brutal-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? "X" : "☰"}
          </motion.button>
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
                href={item.href}
                className={`block font-mono px-4 py-2 border-2 border-brutal-white ${
                  pathname === item.href ? "bg-brutal-red text-brutal-white" : "bg-brutal-white text-brutal-black"
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
