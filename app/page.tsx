"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TopBar from "@/components/top-bar";
import PromotionsBanner from "@/components/promotions-banner";
import FeaturedProducts from "@/components/featured-products";
import CategoryGrid from "@/components/category-grid";
import CategoryProducts from "@/components/category-products";
import BottomNav from "@/components/bottom-nav";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <TopBar />
      <div className="space-y-10 pb-32 pt-2">
        <PromotionsBanner />
        <FeaturedProducts />
        <AnimatePresence mode="wait">
          {selectedCategory ? (
            <CategoryProducts
              key="products"
              categoryId={selectedCategory}
              onBack={() => setSelectedCategory(null)}
            />
          ) : (
            <CategoryGrid
              key="categories"
              onCategorySelect={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          )}
        </AnimatePresence>
      </div>
      <BottomNav />
    </main>
  );
}
