// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 w-full fixed bottom-0 left-0">
      <div className="max-w-screen-xl mx-auto flex justify-center gap-8">
        <a href="" className="hover:text-[#69e49a] transition-colors">Home</a>
        <a href="" className="hover:text-[#69e49a] transition-colors">Prices</a>
        <a href="" className="hover:text-[#69e49a] transition-colors">Profile</a>
      </div>
      <p className="text-center text-sm mt-4">© 2025 TechView UF. All rights reserved.</p>
    </footer>
  );
}
