export default function PromotionsBanner() {
  return (
    <section className="px-4 pt-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Special Offer Today!
              </h3>
              <p className="text-sm sm:text-base text-white/95 mb-4">
                Get 30% off on your first order. Use code:{" "}
                <span className="font-bold">WELCOME30</span>
              </p>
              <button className="bg-white text-purple-600 font-semibold px-6 py-2.5 rounded-full hover:bg-[#f3f4f6] transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg">
                Claim Now
              </button>
            </div>
            <div className="text-5xl sm:text-6xl">🎉</div>
          </div>
        </div>
      </div>
    </section>
  );
}
