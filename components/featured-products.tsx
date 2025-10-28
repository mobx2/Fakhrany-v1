"use client";

import { useState, useEffect, useRef } from "react";

const featuredProducts = [
  {
    id: 1,
    name: "Turkish Coffee",
    brand: "SLVR SKN",
    image: "☕",
    color:
      "bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800",
    price: "$12.99",
    category: "coffee",
  },
  {
    id: 2,
    name: "Premium Blend",
    brand: "SLVR SKN",
    image: "🔴",
    color:
      "bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900 dark:to-rose-800",
    price: "$14.99",
    category: "coffee",
  },
  {
    id: 3,
    name: "Blue Edition",
    brand: "SLVR SKN",
    image: "🔵",
    color:
      "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800",
    price: "$13.99",
    category: "coffee",
  },
  {
    id: 4,
    name: "Brazil Select",
    brand: "SLVR SKN",
    image: "🟠",
    color:
      "bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800",
    price: "$15.99",
    category: "coffee",
  },
];

interface FeaturedProductsProps {}

export default function FeaturedProducts({}: FeaturedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const filteredProducts = featuredProducts;

  useEffect(() => {
    if (filteredProducts.length === 0) return;

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
    }, 5000);

    return () => {
      if (autoScrollIntervalRef.current)
        clearInterval(autoScrollIntervalRef.current);
    };
  }, [filteredProducts.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = currentIndex * (132 + 16);
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  if (filteredProducts.length === 0) {
    return null;
  }

  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-[#111827]">
            Biggest Range of Specialty Coffee
          </h2>
          <a
            href="#"
            className="text-sm font-semibold text-[#800000] hover:text-[#6B0000] transition-colors duration-200"
          >
            View all →
          </a>
        </div>

        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`flex-shrink-0 w-[132px] ${product.color} rounded-3xl p-[15px] flex flex-col items-center justify-center gap-2 snap-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95 border border-white/50 hover:border-[#800000] transform`}
              >
                <div className="text-4xl">{product.image}</div>
                <p className="text-[10.5px] font-semibold text-center text-[#111827]">
                  {product.name}
                </p>
                <p className="text-[9px] font-medium text-[#6b7280]">
                  {product.brand}
                </p>
                <p className="text-[10.5px] font-bold text-[#111827] mt-1">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:bg-[#f3f4f6] transition-all duration-200 opacity-0 group-hover:opacity-100 z-10 text-[#111827] font-bold hover:text-[#111827] active:scale-90"
            aria-label="Previous product"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:bg-[#f3f4f6] transition-all duration-200 opacity-0 group-hover:opacity-100 z-10 text-[#111827] font-bold hover:text-[#111827] active:scale-90"
            aria-label="Next product"
          >
            →
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {filteredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#800000] w-6"
                    : "bg-[#E0DED7] w-2 hover:bg-[#D4AF37]"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
