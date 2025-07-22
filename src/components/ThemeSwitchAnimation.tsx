"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"

export default function ThemeSwitchAnimation() {
  const { isAnimating, theme } = useTheme()

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="theme-switch-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Background transition */}
          <motion.div
            className="absolute inset-0"
            initial={{
              background:
                theme === "light"
                  ? "radial-gradient(circle, #0a0a0a 0%, #0a0a0a 100%)"
                  : "radial-gradient(circle, #f5f5f5 0%, #f5f5f5 100%)",
            }}
            animate={{
              background:
                theme === "light"
                  ? "radial-gradient(circle, #f5f5f5 0%, #f5f5f5 100%)"
                  : "radial-gradient(circle, #0a0a0a 0%, #0a0a0a 100%)",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Sun Animation (switching to light) */}
          {theme === "light" && (
            <motion.div
              className="sun-animation"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 1.5, 1], rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Sun rays */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 bg-brutal-yellow"
                  style={{
                    height: "30px",
                    top: "-35px",
                    left: "50%",
                    transformOrigin: "50% 85px",
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                />
              ))}
            </motion.div>
          )}

          {/* Moon Animation (switching to dark) */}
          {theme === "dark" && (
            <>
              <motion.div
                className="moon-animation"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: [0, 1.2, 1], rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Moon craters */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-gray-400 rounded-full opacity-60" />
                <div className="absolute top-4 right-3 w-1 h-1 bg-gray-400 rounded-full opacity-40" />
                <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-50" />
              </motion.div>

              {/* Stars */}
              <div className="stars">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="star"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0.3], scale: [0, 1.5, 1] }}
                    transition={{
                      delay: 0.4 + Math.random() * 0.5,
                      duration: 0.6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      repeatDelay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {/* Ripple effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 border-2 border-brutal-red rounded-full"
            style={{ transform: "translate(-50%, -50%)" }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{
              width: ["0px", "200px", "400px"],
              height: ["0px", "200px", "400px"],
              opacity: [1, 0.5, 0],
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
