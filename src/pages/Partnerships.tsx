import { motion } from 'framer-motion';
import { Handshake, ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white pb-24">
      <Header />
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
        zIndex: 0
      }} />

      {/* Main Content */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon */}
            <motion.div
              className="w-20 h-20 mx-auto mb-8 relative"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Handshake className="w-full h-full text-orange-500" strokeWidth={1.5} />
              <motion.div
                className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Partnerships & Investments
            </h1>

            {/* Content */}
            <div className="max-w-2xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                See who's behind Aarre Intelligence and our vision for the future of enterprise AI.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 border border-gray-200 rounded-xl p-8 mt-8"
              >
                <div className="space-y-4">
                  <a
                    href="https://aarrecapital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-100 border border-orange-200 rounded-lg hover:bg-orange-200 transition-all group"
                  >
                    <span className="text-gray-900 font-medium">Visit Aarre Capital</span>
                    <ExternalLink className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-8 mt-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Interested in Partnership or Investment?
                </h3>

                <p className="text-gray-700 mb-6">
                  Richard is open to any related suggestions and opportunities.
                  Don't hesitate to reach out.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-orange-100 border border-orange-200 rounded-full text-gray-900 font-semibold hover:bg-orange-200 transition-all shadow-lg hover:shadow-orange-700/30 group"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Partnerships;
