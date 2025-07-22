"use client"

import { Routes, Route } from "react-router-dom"
import { useTheme } from "./contexts/ThemeContext"
import CustomCursor from "./components/CustomCursor"
import Navigation from "./components/Navigation"
import ThemeSwitchAnimation from "./components/ThemeSwitchAnimation"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

function App() {
  const { theme } = useTheme()

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-dark-bg text-dark-text noise-bg-dark" : "bg-light-bg text-light-text noise-bg"
      }`}
    >
      <CustomCursor />
      <Navigation />
      <ThemeSwitchAnimation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
