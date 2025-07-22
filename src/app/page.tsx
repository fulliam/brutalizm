"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <motion.h1
          className="font-anton text-6xl md:text-9xl mb-8 glitch-text"
          data-text="BRUTAL"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          BRUTAL
        </motion.h1>

        <motion.h2
          className="font-mono text-2xl md:text-4xl mb-12 text-brutal-yellow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          PORTFOLIO.EXE
        </motion.h2>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/portfolio" className="brutal-button block w-fit mx-auto">
              СМОТРЕТЬ РАБОТЫ
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/resume" className="brutal-button block w-fit mx-auto bg-brutal-pink">
              РЕЗЮМЕ
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="brutal-button block w-fit mx-auto bg-brutal-green">
              КОНТАКТЫ
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="animate-pulse">{"> НАЖМИ ЛЮБУЮ КНОПКУ"}</p>
          <p className="mt-2 text-brutal-red">{"> СИСТЕМА ЗАГРУЖЕНА"}</p>
        </motion.div>
      </div>
    </div>
  )
}
