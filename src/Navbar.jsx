import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e60012] text-white py-3 px-6 flex justify-between items-center shadow-md fixed w-full top-0 z-50">
      <h1 className="text-lg font-bold">Agent</h1>

      {/* لينكات الديسكتوب */}
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/kiriazi" className="hover:underline">
          Kiriazi
        </Link>
        <Link to="/zonasi" className="hover:underline">
          Zonasi
        </Link>

        <span className="bg-white text-[#e60012] px-3 py-1 rounded-md shadow">
          📞 01036378900
        </span>
      </div>

      {/* زرار الموبايل (الهامبورجر) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* منيو الموبايل الجانبية */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-[#e60012] text-white shadow-lg p-6 z-[999]">
          
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl mb-6"
          >
            ✖
          </button>

          <div className="flex flex-col gap-4 text-lg">
            <Link to="/kiriazi" onClick={() => setMenuOpen(false)}>
              Kiriazi
            </Link>
            <Link to="/zonasi" onClick={() => setMenuOpen(false)}>
              Zonasi
            </Link>

            <span className="bg-white text-[#e60012] px-3 py-1 rounded-md shadow mt-4 text-center">
              📞 01036378900
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
