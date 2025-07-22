"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

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
  return (
    <motion.div
      className="brutal-card cursor-hover group"
      whileHover={{
        rotate: Math.random() * 4 - 2,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden mb-4">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover border-2 border-brutal-black"
        />
        <motion.div
          className="absolute inset-0 bg-brutal-red mix-blend-multiply opacity-0 group-hover:opacity-50 transition-opacity"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
        />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-anton text-xl">{item.title}</h3>
          <span className="font-mono text-sm bg-brutal-black text-brutal-white px-2 py-1">{item.year}</span>
        </div>

        <p className="font-helvetica text-sm">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="font-mono text-xs bg-brutal-yellow text-brutal-black px-2 py-1 border border-brutal-black"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                backgroundColor: "#FF0000",
                color: "#FFFFFF",
                scale: 1.1,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.button
          className="w-full font-mono bg-brutal-black text-brutal-white py-2 border-2 border-brutal-black hover:bg-brutal-red transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ПОСМОТРЕТЬ ПРОЕКТ
        </motion.button>
      </div>
    </motion.div>
  )
}
