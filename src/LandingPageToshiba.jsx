import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LandingPageToshiba() {
    const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    {
      src: "https://static.wixstatic.com/media/631229_d28a841050e048ca9bd2c78bb27e7d86~mv2.png/v1/fill/w_768,h_576,fp_0.50_0.50,q_95,enc_avif,quality_auto/631229_d28a841050e048ca9bd2c78bb27e7d86~mv2.png",
      title: "غسالة توشيبا",
      desc: "غسالة ذات كفاءة عالية وسعة مناسبة لكل الاستخدامات.",
    },
    {
      src: "https://static.wixstatic.com/media/631229_1215449cc94a4a39a1ddcea421cdd6d0~mv2.jpg",
      title: "ثلاجة توشيبا",
      desc: "تبريد سريع وحفظ مثالي للطعام لفترات طويلة.",
    },
    {
      src: "https://static.wixstatic.com/media/631229_4bc3c2e157b94b88adc654d4b758cb33~mv2.png/v1/fill/w_768,h_576,fp_0.50_0.50,q_95,enc_avif,quality_auto/631229_4bc3c2e157b94b88adc654d4b758cb33~mv2.png",
      title: "مكيف توشيبا",
      desc: "تبريد قوي وهدوء في التشغيل مع توفير للطاقة.",
    },
  ];

  const servicesContent = `
  تعد أجهزة توشيبا واحدة من أكثر الأجهزة المنزلية استخدامًا واعتمادًا في البيوت المصرية، بفضل جودتها العالية وعمرها الطويل. ومع ذلك، قد تتعرض الأجهزة مع كثرة الاستخدام لبعض الأعطال التي تحتاج لصيانة محترفة تضمن استمرار كفاءتها. وهنا يأتي دور خدمات صيانة توشيبا المعتمدة التي توفر لك الدعم الكامل لجميع أجهزة توشيبا المنزلية.

  لماذا تختار صيانة توشيبا؟

  1. فنيون متخصصون وذو خبرة طويلة
  يتمتع فريق الصيانة بخبرة قوية في التعامل مع جميع موديلات توشيبا، سواء القديمة أو الحديثة، مع القدرة على تشخيص العطل من أول زيارة.

  2. استخدام قطع غيار أصلية 100%
  الاعتماد على قطع غيار غير اصلية قد يقلل عمر الجهاز. لذلك توفر توشيبا قطع غيار معتمدة تضمن الأداء الأفضل وتطيل عمر الجهاز.

  3. سرعة في الاستجابة وخدمة منزلية
  لا تحتاج لنقل الجهاز أو تحمل مشقة المراكز، الخدمة متوفرة داخل المنزل مع إمكانية الحجز الفوري.

  4. ضمان فعلي على الصيانة
  بعد الانتهاء من عملية الإصلاح، يحصل العميل على ضمان معتمد يشمل الأعطال الناتجة عن نفس السبب.

  خدمات صيانة توشيبا المتاحة

  ● صيانة ثلاجات توشيبا
  إصلاح مشاكل التبريد، تسرب المياه، صوت الموتور العالي، وأي عطل كهربائي.

  ● صيانة غسالات توشيبا
  علاج اهتزاز الغسالة، ضعف العصر، توقف التشغيل، أو مشاكل التصريف.

  ● صيانة تكييفات توشيبا
  تنظيف وصيانة الدوائر الداخلية، شحن فريون، إصلاح ضعف التبريد أو الأعطال المفاجئة.

  ● صيانة ديب فريزر توشيبا
  تشخيص وعلاج مشاكل التجميد، توقف الموتور، أو إضاءة التحذير.

  نصائح مهمة للحفاظ على أجهزة توشيبا

  نظف الجهاز بشكل دوري لمنع تراكم الأتربة.

  تجنب التحميل الزائد في الثلاجات والغسالات.

  افصل الجهاز قليلًا عند حدوث ارتفاع في الكهرباء.

  قم بعمل صيانة وقائية كل 6 أشهر لضمان أفضل أداء.

  خدمة عملاء توشيبا – دعمك في أي وقت

  توفر مراكز صيانة توشيبا فريق دعم متاح طوال الأسبوع لاستقبال الشكاوى والحجوزات، مع متابعة حالة الجهاز حتى بعد الصيانة لضمان رضا العميل التام.
  `;

  const keywords = [
    "صيانة توشيبا",
    "مركز صيانة توشيبا",
    "خدمة عملاء توشيبا",
    "صيانة أجهزة توشيبا",
    "صيانة ثلاجات توشيبا",
    "صيانة غسالات توشيبا",
    "صيانة تكييفات توشيبا",
    "صيانة ديب فريزر توشيبا",
    "رقم صيانة توشيبا",
    "صيانة توشيبا المعتمدة",
    "قطع غيار توشيبا",
    "توكيل توشيبا",
    "إصلاح أجهزة توشيبا",
    "فني صيانة توشيبا",
    "مركز توشيبا الرسمي",
    "صيانة توشيبا في القاهرة",
    "صيانة توشيبا في الجيزة",
    "صيانة توشيبا في الإسكندرية",
    "فني غسالات توشيبا",
    "فني ثلاجات توشيبا",
    "أفضل مركز صيانة توشيبا",
    "تصليح أجهزة توشيبا",
    "رقم خدمة عملاء توشيبا",
    "صيانه توشيبا فورية",
    "صيانة توشيبا بالمنزل",
    "صيانة توشيبا الخط الساخن",
    "توكيل صيانة توشيبا العربي",
    "إصلاح أعطال غسالات توشيبا",
    "إصلاح أعطال ثلاجات توشيبا",
    "إصلاح أعطال تكييفات توشيبا",
    "مركز صيانة توشيبا العربي",
    "مواعيد صيانة توشيبا",
    "شركة صيانة توشيبا",
    "فحص أجهزة توشيبا",
  ];

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
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
        <div className="fixed top-0 right-0 w-64 h-64 bg-[#e60012] text-white shadow-lg p-6 z-[999]">
          
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

      <div className="pt-16">
        {/* Header */}
        <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white text-gray-900 py-10 rounded-lg shadow-xl px-4 md:px-10 gap-6">
          <div className="md:w-1/2 text-center md:text-right">
            <h1 className="text-4xl font-bold mb-3 tracking-wide">
              الوكيل المعتمد توشيبا
            </h1>
            <p className="text-lg italic">Toshiba Authorized Agent</p>
            <div className="mt-2 flex justify-center md:justify-start gap-6">
              <span className="bg-white text-[#e60012] px-4 py-2 rounded-lg shadow-md">
                📞 01036378900
              </span>
              <span className="bg-white text-[#e60012] px-4 py-2 rounded-lg shadow-md">
                📞 01036372500
              </span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://static.wixstatic.com/media/631229_4bc3c2e157b94b88adc654d4b758cb33~mv2.png/v1/fill/w_768,h_576,fp_0.50_0.50,q_95,enc_avif,quality_auto/631229_4bc3c2e157b94b88adc654d4b758cb33~mv2.png"
              alt="Toshiba Header"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </header>

        {/* Products Section */}
        <section className="max-w-6xl mx-auto py-10 px-4 bg-white rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-6 text-[#e60012]">
            أبرز منتجات توشيبا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover md:h-80"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-[#e60012]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-6 bg-white rounded-2xl p-6 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center text-[#e60012]">
            أفضل خدمات صيانة أجهزة توشيبا – خبرة، سرعة، وضمان حقيقي
          </h2>
          <pre className="whitespace-pre-wrap text-gray-900 text-sm font-bold leading-relaxed">
            {servicesContent}
          </pre>
        </section>

        {/* Keywords Section */}
        <div className="mt-10 max-w-6xl mx-auto p-6 bg-white rounded-2xl">
          <h2 className="text-xl font-bold mb-4 text-center text-[#e60012]">
            الخدمات المتاحة
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {keywords.map((word, index) => (
              <span
                key={index}
                className="bg-[#e60012] text-white px-3 py-2 rounded-lg text-sm text-center"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white text-gray-900 border-t border-gray-300 py-6 text-center mt-10 relative">
          <h3 className="text-lg font-semibold mb-4 text-[#e60012]">
            تواصل معنا
          </h3>
          <div className="flex justify-center gap-6">
            <span className="bg-[#e60012] text-white px-4 py-2 rounded-lg shadow-md">
              📞 01036378900
            </span>
            <span className="bg-[#e60012] text-white px-4 py-2 rounded-lg shadow-md">
              📞 01036372500
            </span>
          </div>

          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 bg-[#e60012] text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition animate-bounce"
            >
              ⬆️
            </button>
          )}

          <p className="text-gray-900 text-xs mt-4">
            © جميع الحقوق محفوظة — توشيبا
          </p>
        </footer>

        {/* Floating WhatsApp & Phone Icons */}
        {/* Floating WhatsApp & Phone Icons */}
        {/* Floating WhatsApp & Phone Icons */}
        {/* Floating Contact Icons - Elegant Version */}
        <div className="fixed left-2 bottom-0 transform -translate-y-1/2 flex flex-col gap-4 z-[1000]">
          {/* Phone Icon */}
          <a
            href="tel:01036372500"
            className="group flex items-center justify-start w-12 h-12 rounded-full bg-red-600 shadow-lg overflow-hidden transition-all duration-300 hover:w-48 hover:rounded-xl"
          >
            <span className="text-xl text-white flex-shrink-0 w-12 h-12 flex items-center justify-center">
              📞
            </span>
            <span className="ml-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              01036372500
            </span>
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/01036372500"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-start w-12 h-12 rounded-full bg-green-500 shadow-lg overflow-hidden transition-all duration-300 hover:w-48 hover:rounded-xl"
          >
            <span className="text-xl text-white flex-shrink-0 w-12 h-12 flex items-center justify-center">
              💬
            </span>
            <span className="ml-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
