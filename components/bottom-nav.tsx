"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";
import SideDrawer from "./side-drawer";
import SearchModal from "./search-modal";

const CATEGORIES = [
  { id: 1, name: "Bakery", emoji: "🥐" },
  { id: 2, name: "Coffee", emoji: "☕" },
  { id: 3, name: "Breakfast", emoji: "🥞" },
  { id: 4, name: "Dairy", emoji: "🧀" },
  { id: 5, name: "Fruits & Vegetables", emoji: "🥕" },
  { id: 6, name: "Desserts", emoji: "🍰" },
  { id: 7, name: "Frozen", emoji: "🧊" },
  { id: 8, name: "Ready to Eat", emoji: "🍱" },
];

export default function BottomNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-4 px-4 bg-gradient-to-r from-[#8B1538] to-[#A01E48] shadow-2xl border-t-4 border-[#D4AF37] rounded-t-3xl transition-all duration-200 z-40">
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
      </nav>

      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        categories={CATEGORIES}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
