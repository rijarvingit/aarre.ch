import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-orange-200 py-4 px-6 bg-white/95 backdrop-blur-sm z-40">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-600 flex items-center gap-2 justify-center md:justify-start">
              <span className="text-orange-500">🇨🇭</span>
              <span className="text-gray-900 font-semibold">Aarre Intelligence</span> by Aarre GmbH, Switzerland
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="text-xs text-gray-600 hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/partnerships"
              className="text-xs text-gray-600 hover:text-orange-600 transition-colors"
            >
              Partnerships
            </Link>
            <a
              href="https://aarre.ch/tenants/aarredigital/vanilla/gate.html"
              className="text-xs text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer"
            >
              Demo Access
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
