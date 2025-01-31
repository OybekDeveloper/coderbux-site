export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo va qisqacha ma'lumot */}
          <div>
            <h2 className="text-2xl font-bold">Coderbux</h2>
            <p className="text-gray-400 mt-2">
              Sifatli xizmat va innovatsion yechimlar siz uchun!
            </p>
          </div>

          {/* Foydali havolalar */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Foydali havolalar</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Xizmatlar
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Coderbux. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
