import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3 w-full fixed bottom-0 left-0">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-[#69e49a] transition">
            Home
          </Link>
          <Link href="/prices" className="hover:text-[#69e49a] transition">
            Prices
          </Link>
          <Link href="/profile" className="hover:text-[#69e49a] transition">
            Profile
          </Link>
          <Link href="/about" className="hover:text-[#69e49a] transition">
            About Us
          </Link>
        </nav>

        {/* Login & Register Buttons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/login">
            <button className="px-3 py-1 text-sm bg-[#69e49a] text-white rounded-md hover:bg-[#55c580] transition">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="px-3 py-1 text-sm bg-[#69e49a] text-white rounded-md hover:bg-[#55c580] transition">
              Register
            </button>
          </Link>
        </div>
      </div>
      <p className="text-center text-xs mt-2 opacity-70">© 2025 TechView UF. All rights reserved.</p>
    </footer>
  );
}
