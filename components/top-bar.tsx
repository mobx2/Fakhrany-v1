export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center py-4 px-4 max-w-6xl mx-auto">
        {/* Left: Hotline */}
        <div className="flex items-center gap-2.5 group cursor-pointer hover:opacity-80 transition-opacity duration-200">
          <span className="text-lg">📞</span>
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">17XX</span>
        </div>

        {/* Right: Logo */}
        <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200 cursor-pointer">
          Logo
        </div>
      </div>
    </div>
  )
}
