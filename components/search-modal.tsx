"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      document.body.style.overflow = "hidden"
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search for:", searchValue)
    // Handle search logic here
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/10 z-50 transition-all duration-300 ease-in-out"
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={modalRef}
          className="w-full max-w-md bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-2xl p-6 sm:p-7 transform transition-all duration-300 ease-in-out border-2 border-[#D4AF37] scale-95 sm:scale-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#8B1538] to-[#A01E48] bg-clip-text text-transparent">
              Search
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[#D4AF37] hover:bg-opacity-30 transition-all duration-200 text-[#8B1538] dark:text-[#D4AF37] hover:text-[#8B1538] dark:hover:text-white active:scale-90"
              aria-label="Close search"
            >
              <X size={22} strokeWidth={2.5} />
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search items, categories..."
              className="w-full px-5 py-3 rounded-xl border-2 border-[#D4AF37] bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-[#8B1538] transition-all duration-200 font-medium"
            />
            <button
              type="submit"
              className="w-full px-5 py-3 bg-gradient-to-r from-[#8B1538] to-[#A01E48] hover:from-[#A01E48] hover:to-[#C01E58] text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Search
            </button>
          </form>

          {/* Recent Searches */}
          {searchValue === "" && (
            <div className="mt-6 pt-6 border-t-2 border-[#D4AF37]">
              <p className="text-sm font-bold text-[#8B1538] dark:text-[#D4AF37] mb-4 uppercase tracking-wide">
                Recent Searches
              </p>
              <div className="space-y-2">
                {["Coffee", "Bakery", "Breakfast"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setSearchValue(item)}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#D4AF37] hover:bg-opacity-20 text-gray-700 dark:text-gray-300 hover:text-[#8B1538] dark:hover:text-[#D4AF37] transition-all duration-200 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
