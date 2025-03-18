import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-3 mt-8 w-full fixed bottom-0 left-0">
      <div className="max-w-screen-xl mx-auto flex justify-center gap-6">
        <Link href="/" className="hover:text-[#69e49a] transition-colors">Home</Link>
        <Link href="/prices" className="hover:text-[#69e49a] transition-colors">Prices</Link>
        <Link href="/profile" className="hover:text-[#69e49a] transition-colors">Profile</Link>
        <Link href="/about" className="hover:text-[#69e49a] transition-colors">About Us</Link>
        <Link href="/login" className="hover:text-[#69e49a] transition-colors">Login</Link>
        <Link href="/register" className="hover:text-[#69e49a] transition-colors">Register</Link>
      </div>
      <p className="text-center text-sm mt-2">© 2025 TechView UF. All rights reserved.</p>
    </footer>
  );
}
