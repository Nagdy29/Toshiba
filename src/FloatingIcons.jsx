import { useEffect, useState } from "react";

export default function FloatingIcons() {
  const [position, setPosition] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setPosition(scrollY + 200); // يتحرك معاك وانت نازل وطالع
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 z-50 flex flex-col gap-4 transition-all duration-300"
      style={{ top: position }}
    >
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/201117794282"
        target="_blank"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="whatsapp"
          className="w-8 h-8"
        />
      </a>

      {/* Phone Icon */}
      <div className="group relative">
        <a
          href="tel:01117794282"
          className="w-14 h-14 bg-[#c40000] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 text-white text-2xl"
        >
          📞
        </a>

        {/* Hover Number */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#c40000] text-white px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          01117794282
        </span>
      </div>
    </div>
  );
}
