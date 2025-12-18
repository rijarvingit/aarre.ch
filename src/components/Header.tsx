import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/main', label: 'Overview' },
    { path: '/technology', label: 'Technology' },
    { path: '/security', label: 'Security' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" onClick={closeMobileMenu}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-gray-900 font-bold text-lg">Aarre Intelligence</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-orange-600 text-white font-semibold'
                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              );
            })}

            {/* Demo Access Button */}
            <a
              href="https://aarre.ch/tenants/aarredigital/vanilla/gate.html"
              target="_self"
              className="ml-4 px-5 py-2 bg-orange-50 text-orange-600 font-semibold rounded-lg border border-orange-400 hover:bg-orange-100 hover:border-orange-500 transition-colors cursor-pointer"
            >
              Demo Access
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link key={item.path} to={item.path} onClick={closeMobileMenu}>
                      <div
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? 'bg-orange-600 text-white font-semibold'
                            : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                        {item.label}
                      </div>
                    </Link>
                  );
                })}

                {/* Demo Access Button (Mobile) */}
                <a
                  href="https://aarre.ch/tenants/aarredigital/vanilla/gate.html"
                  target="_self"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 bg-orange-50 text-orange-600 font-semibold rounded-lg border border-orange-400 hover:bg-orange-100 hover:border-orange-500 transition-colors cursor-pointer text-center"
                >
                  Demo Access
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
