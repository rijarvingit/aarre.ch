import { motion } from 'framer-motion';
import { Shield, Home, Lock, FileCheck, Eye, ArrowRight } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollArrow from '../components/ScrollArrow';

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white pb-24">
      <Header />
      <ProgressBar />
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
        zIndex: 0
      }} />

      {/* Section 1: Not Just Secure - Intro */}
      <section id="intro" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Shield Icon with Animation */}
            <motion.div
              className="w-16 h-16 mx-auto mb-6 relative"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Shield className="w-full h-full text-orange-500" strokeWidth={1.5} />
              <motion.div
                className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Not Just Secure
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              Swiss-Grade Security That Lets You Sleep Soundly
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Built in Switzerland, engineered for absolute data sovereignty.
              Your data never leaves your control.
            </p>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="sovereignty" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Swiss Data Sovereignty */}
      <section id="sovereignty" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Home className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Swiss Data Sovereignty
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-6">
              Your Data, Your Territory, Your Rules
            </p>

            <div className="max-w-3xl mx-auto space-y-4 text-left">
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  🇨🇭 Built in Switzerland
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Developed under Swiss data protection laws - the world's strictest privacy standards.
                  GDPR compliance isn't a feature, it's our foundation.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  🏢 On-Premise First
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Deploy on YOUR servers, in YOUR country, under YOUR legal jurisdiction.
                  No surprise foreign subpoenas, no unexpected data requests.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  ✈️ Air-Gap Capable
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Want zero internet connectivity? Run it completely offline.
                  Perfect for banks, healthcare, or anyone serious about data isolation.
                </p>
              </motion.div>
            </div>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="encryption" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Military-Grade Encryption */}
      <section id="encryption" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Lock className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Military-Grade Encryption
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-6">
              Every Byte Protected, Everywhere
            </p>

            <div className="max-w-3xl mx-auto space-y-4 text-left">
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  💾 Data at Rest
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  AES-256 encryption for everything stored on disk. Even if someone steals your server,
                  they get nothing but random noise.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  🔐 Data in Transit
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  TLS 1.3 for all network communication. Zero tolerance for unencrypted traffic.
                  Man-in-the-middle attacks? Not on our watch.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  🧠 Data in Use
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Memory encryption for sensitive operations. Even RAM dumps reveal nothing.
                  Defense-in-depth isn't optional.
                </p>
              </motion.div>
            </div>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="zerotrust" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Zero-Trust Architecture */}
      <section id="zerotrust" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Eye className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Zero-Trust Architecture
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-6">
              Never Trust, Always Verify
            </p>

            <div className="max-w-3xl mx-auto space-y-4 text-left">
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  🎫 Every Request Authenticated
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  No "trusted network" assumptions. Every API call, every database query, every action
                  requires explicit authentication. Compromised credentials? Instantly revoked.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  🚪 Role-Based Access Control
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Granular permissions down to individual documents. Sales can't see finance.
                  HR can't access engineering. Principle of least privilege, always.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  🔍 Real-Time Anomaly Detection
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Unusual access patterns? System flags it instantly. Midnight database dumps?
                  Blocked before the first row. Security isn't reactive, it's predictive.
                </p>
              </motion.div>
            </div>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="audit" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Complete Audit Trail */}
      <section id="audit" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FileCheck className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Complete Audit Trail
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-6">
              Total Transparency, Forever
            </p>

            <div className="max-w-3xl mx-auto space-y-4 text-left">
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  📝 Every Action Logged
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Who accessed what, when, from where. Immutable logs that can't be tampered with.
                  Forensic-grade record keeping for compliance and peace of mind.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  🔬 Compliance Ready
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  GDPR, HIPAA, ISO 27001 - built-in compliance from day one.
                  Auditor asks "show me who accessed patient records"? Done in 5 seconds.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-white/90 border border-orange-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  ⏱️ Time-Travel Debugging
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Something went wrong last Tuesday at 3:47 PM? Replay every action, every query,
                  every decision. No more "I don't know what happened."
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => { const url = window.location.origin + '/tenants/aarredigital/vanilla/gate.html'; window.location.href = url; }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 bg-orange-600 border border-orange-200 rounded-full text-gray-900 font-semibold text-lg shadow-xl hover:bg-orange-700/30 hover:border-orange-200 hover:shadow-orange-700/50 transition-all cursor-pointer"
              >
                  <span className="relative z-10 flex items-center gap-3">
                    Demo Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
                  </span>
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-orange-700 blur-lg opacity-40"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Security;
