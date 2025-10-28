"use client";

import { motion } from "framer-motion";

const productsByCategory: Record<number, any[]> = {
  1: [
    {
      id: 101,
      name: "Local Product 1",
      price: "$9.99",
      emoji: "🛍️",
      color:
        "bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900 dark:to-rose-800",
    },
    {
      id: 102,
      name: "Local Product 2",
      price: "$12.99",
      emoji: "🏪",
      color:
        "bg-gradient-to-br from-rose-200 to-rose-100 dark:from-rose-800 dark:to-rose-700",
    },
    {
      id: 103,
      name: "Local Product 3",
      price: "$15.99",
      emoji: "🏬",
      color:
        "bg-gradient-to-br from-rose-300 to-rose-200 dark:from-rose-700 dark:to-rose-600",
    },
    {
      id: 104,
      name: "Local Product 4",
      price: "$8.99",
      emoji: "🛒",
      color:
        "bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800",
    },
  ],
  2: [
    {
      id: 201,
      name: "Deal 1",
      price: "$7.99",
      emoji: "🏷️",
      color:
        "bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800",
    },
    {
      id: 202,
      name: "Deal 2",
      price: "$5.99",
      emoji: "💰",
      color:
        "bg-gradient-to-br from-pink-200 to-pink-100 dark:from-pink-800 dark:to-pink-700",
    },
    {
      id: 203,
      name: "Deal 3",
      price: "$11.99",
      emoji: "💸",
      color:
        "bg-gradient-to-br from-pink-300 to-pink-200 dark:from-pink-700 dark:to-pink-600",
    },
    {
      id: 204,
      name: "Deal 4",
      price: "$9.99",
      emoji: "🎁",
      color:
        "bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900 dark:to-rose-800",
    },
  ],
  3: [
    {
      id: 301,
      name: "Breakfast Item 1",
      price: "$6.99",
      emoji: "🥐",
      color:
        "bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900 dark:to-yellow-800",
    },
    {
      id: 302,
      name: "Breakfast Item 2",
      price: "$8.99",
      emoji: "🥞",
      color:
        "bg-gradient-to-br from-yellow-200 to-yellow-100 dark:from-yellow-800 dark:to-yellow-700",
    },
    {
      id: 303,
      name: "Breakfast Item 3",
      price: "$12.99",
      emoji: "🍳",
      color:
        "bg-gradient-to-br from-yellow-300 to-yellow-200 dark:from-yellow-700 dark:to-yellow-600",
    },
    {
      id: 304,
      name: "Breakfast Item 4",
      price: "$10.99",
      emoji: "🥓",
      color:
        "bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800",
    },
  ],
  4: [
    {
      id: 401,
      name: "Bakery Item 1",
      price: "$4.99",
      emoji: "🥖",
      color:
        "bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800",
    },
    {
      id: 402,
      name: "Bakery Item 2",
      price: "$7.99",
      emoji: "🥨",
      color:
        "bg-gradient-to-br from-amber-200 to-amber-100 dark:from-amber-800 dark:to-amber-700",
    },
    {
      id: 403,
      name: "Bakery Item 3",
      price: "$5.99",
      emoji: "🍞",
      color:
        "bg-gradient-to-br from-amber-300 to-amber-200 dark:from-amber-700 dark:to-amber-600",
    },
    {
      id: 404,
      name: "Bakery Item 4",
      price: "$8.99",
      emoji: "🥯",
      color:
        "bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900 dark:to-yellow-800",
    },
  ],
  5: [
    {
      id: 501,
      name: "Coffee Item 1",
      price: "$11.99",
      emoji: "☕",
      color:
        "bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800",
    },
    {
      id: 502,
      name: "Coffee Item 2",
      price: "$13.99",
      emoji: "🥤",
      color:
        "bg-gradient-to-br from-purple-200 to-purple-100 dark:from-purple-800 dark:to-purple-700",
    },
    {
      id: 503,
      name: "Coffee Item 3",
      price: "$15.99",
      emoji: "🧃",
      color:
        "bg-gradient-to-br from-purple-300 to-purple-200 dark:from-purple-700 dark:to-purple-600",
    },
    {
      id: 504,
      name: "Coffee Item 4",
      price: "$12.99",
      emoji: "🍵",
      color:
        "bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800",
    },
  ],
  6: [
    {
      id: 601,
      name: "Dessert Item 1",
      price: "$6.99",
      emoji: "🍰",
      color:
        "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900 dark:to-green-800",
    },
    {
      id: 602,
      name: "Dessert Item 2",
      price: "$8.99",
      emoji: "🍦",
      color:
        "bg-gradient-to-br from-green-200 to-green-100 dark:from-green-800 dark:to-green-700",
    },
    {
      id: 603,
      name: "Dessert Item 3",
      price: "$7.99",
      emoji: "🍨",
      color:
        "bg-gradient-to-br from-green-300 to-green-200 dark:from-green-700 dark:to-green-600",
    },
    {
      id: 604,
      name: "Dessert Item 4",
      price: "$9.99",
      emoji: "🧁",
      color:
        "bg-gradient-to-br from-lime-100 to-lime-50 dark:from-lime-900 dark:to-lime-800",
    },
  ],
  7: [
    {
      id: 701,
      name: "Egg Product 1",
      price: "$5.99",
      emoji: "🥚",
      color:
        "bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900 dark:to-red-800",
    },
    {
      id: 702,
      name: "Cheese Product 1",
      price: "$8.99",
      emoji: "🧀",
      color:
        "bg-gradient-to-br from-red-200 to-red-100 dark:from-red-800 dark:to-red-700",
    },
    {
      id: 703,
      name: "Cold Cut 1",
      price: "$10.99",
      emoji: "🥩",
      color:
        "bg-gradient-to-br from-red-300 to-red-200 dark:from-red-700 dark:to-red-600",
    },
    {
      id: 704,
      name: "Dairy Product 1",
      price: "$7.99",
      emoji: "🥛",
      color:
        "bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800",
    },
  ],
  8: [
    {
      id: 801,
      name: "Ready Meal 1",
      price: "$12.99",
      emoji: "🥪",
      color:
        "bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800",
    },
    {
      id: 802,
      name: "Ready Meal 2",
      price: "$14.99",
      emoji: "🍱",
      color:
        "bg-gradient-to-br from-orange-200 to-orange-100 dark:from-orange-800 dark:to-orange-700",
    },
    {
      id: 803,
      name: "Ready Meal 3",
      price: "$16.99",
      emoji: "🍲",
      color:
        "bg-gradient-to-br from-orange-300 to-orange-200 dark:from-orange-700 dark:to-orange-600",
    },
    {
      id: 804,
      name: "Ready Meal 4",
      price: "$13.99",
      emoji: "🍜",
      color:
        "bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800",
    },
  ],
  9: [
    {
      id: 901,
      name: "Veggie 1",
      price: "$4.99",
      emoji: "🥕",
      color:
        "bg-gradient-to-br from-lime-100 to-lime-50 dark:from-lime-900 dark:to-lime-800",
    },
    {
      id: 902,
      name: "Fruit 1",
      price: "$6.99",
      emoji: "🍎",
      color:
        "bg-gradient-to-br from-lime-200 to-lime-100 dark:from-lime-800 dark:to-lime-700",
    },
    {
      id: 903,
      name: "Veggie 2",
      price: "$5.99",
      emoji: "🥬",
      color:
        "bg-gradient-to-br from-lime-300 to-lime-200 dark:from-lime-700 dark:to-lime-600",
    },
    {
      id: 904,
      name: "Fruit 2",
      price: "$7.99",
      emoji: "🍊",
      color:
        "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900 dark:to-green-800",
    },
  ],
  10: [
    {
      id: 1001,
      name: "Stationery Item 1",
      price: "$3.99",
      emoji: "📚",
      color:
        "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800",
    },
    {
      id: 1002,
      name: "Game 1",
      price: "$9.99",
      emoji: "🎲",
      color:
        "bg-gradient-to-br from-blue-200 to-blue-100 dark:from-blue-800 dark:to-blue-700",
    },
    {
      id: 1003,
      name: "Stationery Item 2",
      price: "$4.99",
      emoji: "✏️",
      color:
        "bg-gradient-to-br from-blue-300 to-blue-200 dark:from-blue-700 dark:to-blue-600",
    },
    {
      id: 1004,
      name: "Game 2",
      price: "$12.99",
      emoji: "🎮",
      color:
        "bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900 dark:to-indigo-800",
    },
  ],
  11: [
    {
      id: 1101,
      name: "Dairy Product 1",
      price: "$6.99",
      emoji: "🧀",
      color:
        "bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900 dark:to-indigo-800",
    },
    {
      id: 1102,
      name: "Dairy Product 2",
      price: "$8.99",
      emoji: "🥛",
      color:
        "bg-gradient-to-br from-indigo-200 to-indigo-100 dark:from-indigo-800 dark:to-indigo-700",
    },
    {
      id: 1103,
      name: "Dairy Product 3",
      price: "$7.99",
      emoji: "🍯",
      color:
        "bg-gradient-to-br from-indigo-300 to-indigo-200 dark:from-indigo-700 dark:to-indigo-600",
    },
    {
      id: 1104,
      name: "Dairy Product 4",
      price: "$9.99",
      emoji: "🧈",
      color:
        "bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800",
    },
  ],
  12: [
    {
      id: 1201,
      name: "Frozen Item 1",
      price: "$11.99",
      emoji: "🧊",
      color:
        "bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900 dark:to-cyan-800",
    },
    {
      id: 1202,
      name: "Frozen Item 2",
      price: "$13.99",
      emoji: "❄️",
      color:
        "bg-gradient-to-br from-cyan-200 to-cyan-100 dark:from-cyan-800 dark:to-cyan-700",
    },
    {
      id: 1203,
      name: "Frozen Item 3",
      price: "$15.99",
      emoji: "🧊",
      color:
        "bg-gradient-to-br from-cyan-300 to-cyan-200 dark:from-cyan-700 dark:to-cyan-600",
    },
    {
      id: 1204,
      name: "Frozen Item 4",
      price: "$12.99",
      emoji: "🥶",
      color:
        "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800",
    },
  ],
};

const categoryNames: Record<number, string> = {
  1: "Shop Local",
  2: "Deals",
  3: "By Breakfast",
  4: "Bakeries & Pastries",
  5: "Breakfast Coffee",
  6: "Desserts & Ice Cream",
  7: "Eggs, Cheese & Cold Cuts",
  8: "Ready to Eat",
  9: "Fruits & Vegetables",
  10: "Stationery & Games",
  11: "Dairy",
  12: "Frozen",
};

interface CategoryProductsProps {
  categoryId: number;
  onBack: () => void;
}

export default function CategoryProducts({
  categoryId,
  onBack,
}: CategoryProductsProps) {
  const products = productsByCategory[categoryId] || [];
  const categoryName = categoryNames[categoryId] || "Category";
  const categoryEmoji =
    categoryId === 1
      ? "🛍️"
      : categoryId === 2
      ? "🏷️"
      : categoryId === 3
      ? "🥐"
      : categoryId === 4
      ? "🥖"
      : categoryId === 5
      ? "☕"
      : categoryId === 6
      ? "🍰"
      : categoryId === 7
      ? "🥚"
      : categoryId === 8
      ? "🥪"
      : categoryId === 9
      ? "🥕"
      : categoryId === 10
      ? "📚"
      : categoryId === 11
      ? "🧀"
      : "🧊";

  return (
    <motion.section
      className="px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95"
            aria-label="Back to categories"
          >
            ←
          </button>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{categoryEmoji}</span>
            <h2 className="text-2xl font-bold text-[#111827]">
              {categoryName}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`${product.color} rounded-3xl p-5 flex flex-col items-center justify-center gap-3 border-2 border-white/50 dark:border-slate-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer min-h-48`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="text-4xl">{product.emoji}</div>
              <p className="text-sm font-semibold text-center text-[#111827]">
                {product.name}
              </p>
              <p className="text-lg font-bold text-[#111827]">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
