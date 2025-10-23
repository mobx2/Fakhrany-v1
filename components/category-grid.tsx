"use client"

const categories = [
  {
    id: 1,
    name: "Shop Local",
    emoji: "🛍️",
    bgColor: "bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900 dark:to-rose-800",
  },
  {
    id: 2,
    name: "Deals",
    emoji: "🏷️",
    bgColor: "bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800",
  },
  {
    id: 3,
    name: "By Breakfast",
    emoji: "🥐",
    bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900 dark:to-yellow-800",
  },
  {
    id: 4,
    name: "Bakeries & Pastries",
    emoji: "🥖",
    bgColor: "bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800",
  },
  {
    id: 5,
    name: "Breakfast Coffee",
    emoji: "☕",
    bgColor: "bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800",
  },
  {
    id: 6,
    name: "Desserts & Ice Cream",
    emoji: "🍰",
    bgColor: "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900 dark:to-green-800",
  },
  {
    id: 7,
    name: "Eggs, Cheese & Cold Cuts",
    emoji: "🥚",
    bgColor: "bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900 dark:to-red-800",
  },
  {
    id: 8,
    name: "Ready to Eat",
    emoji: "🥪",
    bgColor: "bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800",
  },
  {
    id: 9,
    name: "Fruits & Vegetables",
    emoji: "🥕",
    bgColor: "bg-gradient-to-br from-lime-100 to-lime-50 dark:from-lime-900 dark:to-lime-800",
  },
  {
    id: 10,
    name: "Stationery & Games",
    emoji: "📚",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800",
  },
  {
    id: 11,
    name: "Dairy",
    emoji: "🧀",
    bgColor: "bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900 dark:to-indigo-800",
  },
  {
    id: 12,
    name: "Frozen",
    emoji: "🧊",
    bgColor: "bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900 dark:to-cyan-800",
  },
]

interface CategoryGridProps {
  onCategorySelect: (categoryId: number | null) => void
  selectedCategory: number | null
}

export default function CategoryGrid({ onCategorySelect, selectedCategory }: CategoryGridProps) {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">All Categories</h2>
          <a
            href="#"
            className="text-sm font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors duration-200"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(selectedCategory === category.id ? null : category.id)}
              className={`${category.bgColor} rounded-3xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 active:scale-95 min-h-36 border-2 ${
                selectedCategory === category.id
                  ? "border-purple-600 dark:border-purple-400 shadow-lg scale-105"
                  : "border-white/50 dark:border-slate-700/50 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400 dark:hover:border-purple-500"
              }`}
              aria-label={category.name}
              aria-pressed={selectedCategory === category.id}
            >
              <div className="text-4xl">{category.emoji}</div>
              <p className="text-xs font-semibold text-center text-slate-900 dark:text-slate-100 text-balance leading-tight">
                {category.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
