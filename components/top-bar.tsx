export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-[#E0DED7] shadow-sm">
      <div className="flex justify-between items-center py-4 px-4 max-w-6xl mx-auto">
        {/* Left: Hotline */}
        <div className="flex items-center gap-2.5 group cursor-pointer hover:opacity-80 transition-opacity duration-200">
          <span className="text-lg">📞</span>
          <span className="text-sm font-semibold text-[#800000]">17XX</span>
        </div>

        {/* Right: Logo */}
        <div className="text-lg font-bold bg-gradient-to-r from-[#800000] to-[#D4AF37] bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200 cursor-pointer">
          ELFakharany
        </div>
      </div>
    </div>
  );
}
