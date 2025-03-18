import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 w-full fixed bottom-0 left-0">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-4">
        <div className="flex justify-center gap-8">
          <Link href="./" className="hover:text-[#69e49a] transition-colors">
            Home
          </Link>
          <Link href="./prices" className="hover:text-[#69e49a] transition-colors">
            Prices
          </Link>
          <Link href="./profile" className="hover:text-[#69e49a] transition-colors">
            Profile
          </Link>
          <Link href="./about" className="hover:text-[#69e49a] transition-colors">
            About Us
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="./login">
            <button className="px-4 py-2 bg-[#69e49a] text-white rounded-md hover:bg-[#55c580] transition">
              Login
            </button>
          </Link>
          <Link href="./register">
            <button className="px-4 py-2 bg-[#69e49a] text-white rounded-md hover:bg-[#55c580] transition">
              Register
            </button>
          </Link>
        </div>
      </div>
      <p className="text-center text-sm mt-4">© 2025 TechView UF. All rights reserved.</p>
    </footer>
  );
}
