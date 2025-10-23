"use client"

import { useState } from "react"
import TopBar from "@/components/top-bar"
import SearchBar from "@/components/search-bar"
import PromotionsBanner from "@/components/promotions-banner"
import FeaturedProducts from "@/components/featured-products"
import CategoryGrid from "@/components/category-grid"
import BottomNav from "@/components/bottom-nav"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
      <TopBar />
      <SearchBar onSearch={setSearchQuery} />
      <div className="space-y-10 pb-32 pt-2">
        <PromotionsBanner />
        <FeaturedProducts searchQuery={searchQuery} />
        <CategoryGrid onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
      </div>
      <BottomNav />
    </main>
  )
}
