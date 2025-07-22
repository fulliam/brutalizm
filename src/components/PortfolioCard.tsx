"use client"

import { motion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  year: string
}

interface PortfolioCardProps {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.div
      className={`cursor-hover group ${isDark ? "brutal-card-dark" : "brutal-card"}`}
      whileHover={{
        rotate: Math.random() * 4 - 2,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden mb-4">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={600}
          height={400}
          className={`w-full h-48 object-cover border-2 ${isDark ? "border-brutal-white" : "border-brutal-black"}`}
        />
        <motion.div
          className={`absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-50 transition-opacity ${
            isDark ? "bg-brutal-green" : "bg-brutal-red"
          }`}
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
        />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-anton text-xl">{item.title}</h3>
          <span
            className={`font-mono text-sm px-2 py-1 ${
              isDark ? "bg-brutal-white text-brutal-black" : "bg-brutal-black text-brutal-white"
            }`}
          >
            {item.year}
          </span>
        </div>

        <p className="font-helvetica text-sm">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <motion.span
              key={tag}
              className={`font-mono text-xs px-2 py-1 border ${
                isDark
                  ? "bg-brutal-blue text-brutal-white border-brutal-blue"
                  : "bg-brutal-yellow text-brutal-black border-brutal-black"
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                backgroundColor: isDark ? "#FF00FF" : "#FF0000",
                color: "#FFFFFF",
                scale: 1.1,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.button
          className={`w-full font-mono py-2 border-2 transition-colors ${
            isDark
              ? "bg-dark-bg text-brutal-white border-brutal-white hover:bg-brutal-green hover:text-brutal-black"
              : "bg-brutal-black text-brutal-white border-brutal-black hover:bg-brutal-red"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ПОСМОТРЕТЬ ПРОЕКТ
        </motion.button>
      </div>
    </motion.div>
  )
}
