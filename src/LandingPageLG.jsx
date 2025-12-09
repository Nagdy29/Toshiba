import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./Untitled.jpg" 
export default function LandingPageLG() {

  const mainColor = "#A50034"; // LG Brand Color

  const items = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG61qkj0tWmGno2v5NsXzxRxbAk7sUEvtZCw&s",
      title: "غسالة LG",
      desc: "غسالات LG المعروفة بتقنية Direct Drive وهدوء التشغيل وكفاءة استثنائية.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkGODqwo5bGlgXUPoHox7PVTRzoscyxU39A&s",
      title: "ثلاجة LG",
      desc: "ثلاجات LG بتكنولوجيا Smart Inverter وحفظ مثالي للأطعمة.",
    },
    {
      src: "https://static.wixstatic.com/media/631229_4bc3c2e157b94b88adc654d4b758cb33~mv2.png/v1/fill/w_768,h_576,fp_0.50_0.50,q_95,enc_avif,quality_auto/631229_4bc3c2e157b94b88adc654d4b758cb33~mv2.png",
      title: "مكيف LG",
      desc: "تكييفات LG بقدرة تبريد عالية وموفر للطاقة مع تشغيل هادئ.",
    },
  ];

  const servicesContent = `
  تتميز أجهزة LG بتقنيات عالمية تعتمد على الذكاء الاصطناعي، مما يجعلها من أكثر الأجهزة المنزلية تطورًا واعتمادية.
  ومع ذلك، مثل أي جهاز منزلي، قد تحتاج إلى صيانة دورية لضمان أفضل أداء وحماية استثمارك.

  لماذا تختار صيانة LG؟

  1. خبراء متخصصون في أجهزة LG
  فنيون محترفون مدربون على أحدث أنظمة LG وتشخيص الأعطال بدقة عالية.

  2. استخدام قطع غيار أصلية
  نضمن لك توفير قطع غيار أصلية معتمدة لضمان أعلى أداء وعمر أطول للجهاز.

  3. خدمة منزلية سريعة
  نصل إليك أينما كنت دون الحاجة لنقل الجهاز إلى المراكز.

  4. ضمان شامل
  ضمان فعلي بعد عملية الصيانة يشمل الأعطال الناتجة عن نفس السبب.

  خدمات صيانة LG المتاحة

  ● صيانة ثلاجات LG  
  ● صيانة غسالات LG  
  ● صيانة تكييفات LG  
  ● صيانة شاشة LG  
  ● صيانة ديب فريزر LG  

  نصائح للحفاظ على أجهزة LG

  ● تنظيف دوري للأجهزة.  
  ● تجنب التحميل الزائد.  
  ● فصل الجهاز عند ارتفاع الكهرباء.  
  ● صيانة وقائية كل 6 شهور.

  خدمة عملاء LG – متواجدين دائمًا لدعمك.
  `;

  const keywords = [
    "صيانة LG",
    "مركز صيانة LG",
    "خدمة عملاء LG",
    "صيانة أجهزة LG",
    "صيانة تكييفات LG",
    "صيانة ثلاجات LG",
    "صيانة غسالات LG",
    "توكيل LG",
    "فني LG",
    "إصلاح أجهزة LG",
    "LG Service",
    "LG Repair",
    "صيانة LG القاهرة",
    "صيانة LG الجيزة",
    "صيانة LG الإسكندرية",
    "إصلاح أجهزة LG",
    "LG Service",
    "LG Repair",
    "صيانة LG القاهرة",
    "صيانة LG الجيزة",
    "صيانة LG الإسكندرية",
    
  ];

  const [showScroll, setShowScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav
        className="text-white py-3 px-6 flex justify-between items-center shadow-md fixed w-full top-0 z-50"
        style={{ backgroundColor: mainColor }}
      >
        <h1 className="text-lg font-bold">Agent</h1>

        <div className="hidden md:flex gap-4 items-center">
          <Link to="/" className="hover:underline">Toshiba</Link>
          <Link to="/kiriazi" className="hover:underline">Kiriazi</Link>

          <span
            className="bg-white px-3 py-1 rounded-md shadow"
            style={{ color: mainColor }}
          >
            📞 01036378900
          </span>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>

        {menuOpen && (
          <div
            className="fixed top-0 right-0 w-64 h-64 text-white shadow-lg p-6 z-[999]"
            style={{ backgroundColor: mainColor }}
          >
            <button onClick={() => setMenuOpen(false)} className="text-2xl mb-6">
              ✖
            </button>

            <div className="flex flex-col gap-4 text-lg">
              <Link to="/" onClick={() => setMenuOpen(false)}>Toshiba</Link>
              <Link to="/kiriazi" onClick={() => setMenuOpen(false)}>Kiriazi</Link>

              <span
                className="bg-white px-3 py-2 rounded-md shadow mt-4 text-center"
                style={{ color: mainColor }}
              >
                📞 01036378900
              </span>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16">

        {/* Header */}
        <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white text-gray-900 py-10 rounded-lg shadow-xl px-4 md:px-10 gap-6">
          <div className="md:w-1/2 text-center md:text-right">
            <h1 className="text-4xl font-bold mb-3 tracking-wide" style={{ color: mainColor }}>
              الوكيل المعتمد LG
            </h1>

            <p className="text-lg italic">LG Authorized Service</p>

            <div className="mt-2 flex justify-center md:justify-start gap-6">
              <span className="bg-white px-4 py-2 rounded-lg shadow-md" style={{ color: mainColor }}>
                📞 01036378900
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-md" style={{ color: mainColor }}>
                📞 01036372500
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src={logo}
              alt="LG Header"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </header>

        {/* Products */}
        <section className="max-w-6xl mx-auto py-10 px-4 bg-white rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-6" style={{ color: mainColor }}>
            أبرز منتجات LG
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={item.src} alt={item.title} className="w-full h-auto object-cover md:h-80" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: mainColor }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-6 bg-white rounded-2xl p-6 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center" style={{ color: mainColor }}>
            أفضل خدمات صيانة أجهزة LG – جودة، سرعة، وضمان
          </h2>

          <pre className="whitespace-pre-wrap text-gray-900 text-sm font-bold leading-relaxed">
            {servicesContent}
          </pre>
        </section>

        {/* Keywords */}
        <div className="mt-10 max-w-6xl mx-auto p-6 bg-white rounded-2xl">
          <h2 className="text-xl font-bold mb-4 text-center" style={{ color: mainColor }}>
            الخدمات المتاحة
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {keywords.map((word, index) => (
              <span
                key={index}
                className="text-white px-3 py-2 rounded-lg text-sm text-center"
                style={{ backgroundColor: mainColor }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white text-gray-900 border-top border-gray-300 py-6 text-center mt-10 relative">
          <h3 className="text-lg font-semibold mb-4" style={{ color: mainColor }}>
            تواصل معنا
          </h3>

          <div className="flex justify-center gap-6">
            <span className="text-white px-4 py-2 rounded-lg shadow-md" style={{ backgroundColor: mainColor }}>
              📞 01036378900
            </span>
            <span className="text-white px-4 py-2 rounded-lg shadow-md" style={{ backgroundColor: mainColor }}>
              📞 01036372500
            </span>
          </div>

          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 text-white p-3 rounded-full shadow-lg transition animate-bounce"
              style={{ backgroundColor: mainColor }}
            >
              ⬆️
            </button>
          )}

          <p className="text-gray-900 text-xs mt-4">© جميع الحقوق محفوظة — LG</p>
        </footer>

        {/* Floating Buttons */}
        <div className="fixed left-2 bottom-0 transform -translate-y-1/2 flex flex-col gap-4 z-[1000]">
          <a
            href="tel:01036372500"
            className="group flex items-center justify-start w-12 h-12 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:w-48 hover:rounded-xl"
            style={{ backgroundColor: mainColor }}
          >
            <span className="text-xl text-white flex-shrink-0 w-12 h-12 flex items-center justify-center">📞</span>
            <span className="ml-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              01036372500
            </span>
          </a>

          <a
            href="https://wa.me/01036372500"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-start w-12 h-12 rounded-full bg-green-500 shadow-lg overflow-hidden transition-all duration-300 hover:w-48 hover:rounded-xl"
          >
            <span className="text-xl text-white flex-shrink-0 w-12 h-12 flex items-center justify-center">💬</span>
            <span className="ml-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              WhatsApp
            </span>
          </a>
        </div>

      </div>
    </div>
  );
}
