"use client"

import { useState, useEffect } from "react"
import { Menu, Search, Moon, Sun } from "lucide-react"
import SideDrawer from "./side-drawer"
import SearchModal from "./search-modal"
import { useTheme } from "next-themes"

const CATEGORIES = [
  { id: 1, name: "Bakery", emoji: "🥐" },
  { id: 2, name: "Coffee", emoji: "☕" },
  { id: 3, name: "Breakfast", emoji: "🥞" },
  { id: 4, name: "Dairy", emoji: "🧀" },
  { id: 5, name: "Fruits & Vegetables", emoji: "🥕" },
  { id: 6, name: "Desserts", emoji: "🍰" },
  { id: 7, name: "Frozen", emoji: "🧊" },
  { id: 8, name: "Ready to Eat", emoji: "🍱" },
]

export default function BottomNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleDarkModeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!isMounted) return null

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-4 px-4 bg-gradient-to-r from-[#8B1538] to-[#A01E48] dark:from-[#6B1428] dark:to-[#8B1538] shadow-2xl border-t-4 border-[#D4AF37] rounded-t-3xl transition-all duration-200 z-40">
        {/* Menu Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-3 rounded-xl transition-all duration-200 text-white hover:text-white hover:bg-[#D4AF37] hover:bg-opacity-40 transform hover:scale-110 active:scale-95"
          aria-label="Open menu"
        >
          <Menu size={26} strokeWidth={2.5} />
        </button>

        {/* Search Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="p-3 rounded-xl transition-all duration-200 text-white hover:text-white hover:bg-[#D4AF37] hover:bg-opacity-40 transform hover:scale-110 active:scale-95"
          aria-label="Open search"
        >
          <Search size={26} strokeWidth={2.5} />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={handleDarkModeToggle}
          className="p-3 rounded-xl transition-all duration-200 text-white hover:text-white hover:bg-[#D4AF37] hover:bg-opacity-40 transform hover:scale-110 active:scale-95"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <Sun size={26} strokeWidth={2.5} /> : <Moon size={26} strokeWidth={2.5} />}
        </button>
      </nav>

      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} categories={CATEGORIES} />

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
