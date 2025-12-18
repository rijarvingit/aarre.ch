import { motion } from 'framer-motion';
import { Lock, CheckCircle2, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white overflow-hidden relative pb-24">
      <ProgressBar />
      {/* Orange gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Minimal background particles - Orange */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-orange-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Hero Section - More Spacious */}
      <div className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated AI Logo - Smaller & Elegant */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-6 inline-block"
          >
            <div className="relative w-20 h-20 mx-auto">
              {/* Central AI Core - Smaller */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-lg opacity-40" />
              </motion.div>

              {/* Orbiting particles - Smaller */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{ transformOrigin: '0 0' }}
                  animate={{ rotate: angle + 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-sm" style={{ transform: `translate(-50%, -40px)` }}>
                    <motion.div
                      className="absolute inset-0 bg-orange-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Central Sparkle - Smaller */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-orange-600 opacity-90" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Headline - Clean & Simple */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="leading-tight mb-16"
          >
            <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-6">
              Your Company AI Brain
            </span>
            <span className="block text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
              That Gets Smarter Every Day
            </span>
            <span className="block text-xl md:text-2xl font-medium text-orange-500">
              Help Your Company Grow Faster
            </span>
          </motion.h1>

          {/* Swiss Branding - More Visible */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm text-gray-600 mb-16 flex items-center justify-center gap-2"
          >
            <span className="text-orange-500">🇨🇭</span>
            <span><span className="text-gray-900 font-semibold">Aarre Intelligence</span> by Aarre GmbH, Switzerland</span>
          </motion.p>

          {/* 3 Key Points - Spacious */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto"
          >
            {/* Point 1 - Open Source */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative group bg-white/90 backdrop-blur-sm border border-orange-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 cursor-pointer"
            >
              <CheckCircle2 className="w-10 h-10 text-orange-600 mb-3 mx-auto group-hover:scale-105 transition-transform" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-gray-900">Open Source</h3>
            </motion.div>

            {/* Point 2 - On-Premise */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative group bg-white/90 backdrop-blur-sm border border-orange-300 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 cursor-pointer"
            >
              <Lock className="w-10 h-10 text-orange-700 mb-3 mx-auto group-hover:scale-105 transition-transform" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-gray-900">On-Premise</h3>
            </motion.div>

            {/* Point 3 - Absolute Security */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative group bg-white/90 backdrop-blur-sm border border-orange-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 cursor-pointer"
            >
              <Shield className="w-10 h-10 text-orange-600 mb-3 mx-auto group-hover:scale-105 transition-transform" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-gray-900">Absolute Security</h3>
            </motion.div>
          </motion.div>

          {/* CTA Button - Bright Red */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Link to="/main">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 bg-orange-600 border border-orange-600 rounded-full text-white font-semibold text-lg shadow-xl hover:bg-orange-700 hover:shadow-2xl hover:shadow-orange-200 transition-all"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Study More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer - Fixed */}
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
                onClick={(e) => { e.preventDefault(); const url = window.location.origin + '/tenants/aarredigital/vanilla/'; window.location.href = url; }}
                href="#"
                className="text-xs text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer"
              >
                Demo Access
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
