"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface Category {
  id: number
  name: string
  emoji: string
}

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
  categories: Category[]
}

export default function SideDrawer({ isOpen, onClose, categories }: SideDrawerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#0f0f0f] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b-2 border-[#D4AF37] bg-gradient-to-r from-[#8B1538] to-[#A01E48]">
          <h2 className="text-lg font-bold text-white">Categories</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white hover:bg-opacity-30 transition-all duration-200 text-white hover:text-white active:scale-90"
            aria-label="Close drawer"
          >
            <X size={22} className="text-white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Categories List */}
        <div className="p-4 space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={onClose}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#D4AF37] hover:bg-opacity-15 transition-all duration-200 text-left group border-l-4 border-transparent hover:border-[#D4AF37]"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-200">{category.emoji}</span>
              <span className="text-gray-800 dark:text-gray-100 font-semibold group-hover:text-[#8B1538] dark:group-hover:text-[#D4AF37] transition-colors duration-200">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
