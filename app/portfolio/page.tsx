"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import PortfolioCard from "@/components/PortfolioCard"

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  year: string
}

const generatePortfolioItems = (start: number, count: number): PortfolioItem[] => {
  const items: PortfolioItem[] = []
  const titles = [
    "BRUTAL WEBSITE",
    "GLITCH POSTER",
    "NEON IDENTITY",
    "CHAOS DESIGN",
    "PIXEL ART",
    "RETRO INTERFACE",
    "CYBER LOGO",
    "DIGITAL NOISE",
  ]
  const descriptions = [
    "Экспериментальный веб-сайт с брутальной эстетикой",
    "Постер с глитч-эффектами и типографикой",
    "Неоновая айдентика для технологического стартапа",
    "Хаотичный дизайн с элементами деконструкции",
  ]
  const tags = [
    ["WEB", "BRUTAL", "CSS"],
    ["PRINT", "GLITCH", "POSTER"],
    ["IDENTITY", "NEON", "TECH"],
    ["EXPERIMENTAL", "CHAOS", "ART"],
  ]

  for (let i = 0; i < count; i++) {
    const index = (start + i) % titles.length
    items.push({
      id: start + i,
      title: titles[index],
      description: descriptions[index % descriptions.length],
      image: `/placeholder.svg?height=400&width=600&text=PROJECT+${start + i + 1}`,
      tags: tags[index % tags.length],
      year: `202${Math.floor(Math.random() * 4)}`,
    })
  }
  return items
}

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()

  useEffect(() => {
    setItems(generatePortfolioItems(0, 8))
  }, [])

  useEffect(() => {
    if (inView && hasMore && !loading) {
      setLoading(true)
      setTimeout(() => {
        const newItems = generatePortfolioItems(items.length, 4)
        setItems((prev) => [...prev, ...newItems])
        setLoading(false)
        if (items.length > 50) {
          setHasMore(false)
        }
      }, 1000)
    }
  }, [inView, hasMore, loading, items.length])

  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="font-anton text-4xl md:text-6xl mb-12 text-center glitch-text"
          data-text="PORTFOLIO"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIO
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div ref={ref} className="flex justify-center mt-12">
            {loading ? (
              <motion.div
                className="font-mono text-xl text-brutal-yellow"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
              >
                ЗАГРУЗКА...
              </motion.div>
            ) : (
              <div className="font-mono text-brutal-red">СКРОЛЛЬ ДЛЯ ЗАГРУЗКИ</div>
            )}
          </div>
        )}

        {!hasMore && (
          <motion.div
            className="text-center mt-12 font-anton text-2xl text-brutal-pink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ВСЕ РАБОТЫ ЗАГРУЖЕНЫ
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
