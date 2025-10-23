export default function PromotionsBanner() {
  return (
    <section className="px-4 pt-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 dark:from-purple-700 dark:via-pink-600 dark:to-rose-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Special Offer Today!</h3>
              <p className="text-sm sm:text-base text-white/95 mb-4">
                Get 30% off on your first order. Use code: <span className="font-bold">WELCOME30</span>
              </p>
              <button className="bg-white text-purple-600 font-semibold px-6 py-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-200 transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg">
                Claim Now
              </button>
            </div>
            <div className="text-5xl sm:text-6xl">🎉</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-5 border border-blue-200 dark:border-blue-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Free Delivery</p>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">On orders over $25</p>
              </div>
              <span className="text-3xl">🚚</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900 dark:to-green-800 rounded-2xl p-5 border border-green-200 dark:border-green-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Loyalty Points</p>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">Earn on every purchase</p>
              </div>
              <span className="text-3xl">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
