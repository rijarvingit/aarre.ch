import { motion } from 'framer-motion';
import { Code, Database, Shield, ArrowRight, Home, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollArrow from '../components/ScrollArrow';

const Technology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white pb-24">
      <Header />
      <ProgressBar />
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
        zIndex: 0
      }} />

      {/* Section 1: Intro - Not Just Another Tech Stack */}
      <section id="intro" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Code className="w-16 h-16 text-orange-500 mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Not Just Another Tech Stack
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              Technology Built for SME Reality
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              No vendor lock-in. Adapts to YOUR systems in weeks, not years.
            </p>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="home" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Your Data Stays Home */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Home className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Your Data Stays Home
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              On-Premise. Your Servers. Your Control.
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Deploy in YOUR premises and run it completely offline if needed.
              GDPR compliance built-in.
            </p>

            {/* Architecture Grid - Inside vs External */}
            <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto mb-8">
              {/* Inside Your Premises - Left Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-600 mb-4 text-center">Inside Your Premises</h3>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
                >
                  <div className="text-2xl mb-2">🧠</div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Company Brain</h4>
                  <p className="text-xs text-gray-600">All your data + conversations stay local</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
                >
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Mistral 7B</h4>
                  <p className="text-xs text-gray-600">AI runs locally on your servers</p>
                </motion.div>
              </div>

              {/* Optional External - Right Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-600 mb-4 text-center">Optional External</h3>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
                >
                  <div className="text-2xl mb-2">🌐</div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Internet</h4>
                  <p className="text-xs text-gray-600">Market intelligence (your choice)</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
                >
                  <div className="text-2xl mb-2">☁️</div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Cloud LLM</h4>
                  <p className="text-xs text-gray-600">GPT-4/Claude (optional upgrade)</p>
                </motion.div>
              </div>
            </div>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="freedom" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: No Vendor Prison */}
      <section id="freedom" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              No Vendor Prison
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              Hand-Picked, Best Open Source Building Blocks
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Best, hand-picked, enterprise-level, accepted open source components to guarantee
              the best price/performance/quality ratio.
            </p>

            {/* Technology Stack Grid */}
            <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto mb-8">
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">🐘</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">PostgreSQL</h3>
                <p className="text-xs text-gray-600">World's most advanced open source database</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Redis</h3>
                <p className="text-xs text-gray-600">Lightning-fast in-memory data store</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">🔐</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Keycloak</h3>
                <p className="text-xs text-gray-600">Enterprise SSO & identity management</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">FastAPI</h3>
                <p className="text-xs text-gray-600">High-performance Python framework</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Qdrant</h3>
                <p className="text-xs text-gray-600">Lightning-fast vector search engine</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">⚛️</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">React 19</h3>
                <p className="text-xs text-gray-600">Modern component-based UI</p>
              </motion.div>
            </div>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="memory" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: It Actually Remembers Everything */}
      <section id="memory" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Database className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              It Actually Remembers Everything
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              PostgreSQL-Powered Company Brain
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Aarre Intelligence remembers every conversation, document, insight stored in battle-tested PostgreSQL
              in large deployments. Employee or executive leaves? Customer visits your site? Their written knowledge
              stays as long as you want—respecting of course all regulations and laws.
            </p>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="hexagonal" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Hexagonal Architecture */}
      <section id="hexagonal" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Hexagonal Architecture
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              Plug-and-Play. Adapts in Days, Not Months.
            </p>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-4">
              We utilize your existing infrastructure without changing data structures or locations.
            </p>

            {/* Hexagonal Architecture - 3 Column Layout */}
            <div className="grid md:grid-cols-3 gap-4 mt-6 max-w-5xl mx-auto mb-4">
              {/* Left Column - Your Existing Systems */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-orange-500 mb-3 text-center">Your Existing Systems</h3>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">📁</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Document Storage</h4>
                  <p className="text-xs text-gray-600">Cloud drives, file servers</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">💼</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">CRM Systems</h4>
                  <p className="text-xs text-gray-600">Customer data, contacts</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">🏭</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">ERP Systems</h4>
                  <p className="text-xs text-gray-600">Business processes, data</p>
                </motion.div>
              </div>

              {/* Middle Column - Adapters (The Magic) */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-orange-600 mb-3 text-center">Adapters (The Magic)</h3>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">🔌</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Storage Adapters</h4>
                  <p className="text-xs text-gray-600">Read-only access, no changes</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">🔗</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">CRM Adapters</h4>
                  <p className="text-xs text-gray-600">Connect without disruption</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">ERP Adapters</h4>
                  <p className="text-xs text-gray-600">Integrate seamlessly</p>
                </motion.div>
              </div>

              {/* Right Column - Core Application */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-orange-600 mb-3 text-center">Core Application</h3>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">🧠</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">AI Brain</h4>
                  <p className="text-xs text-gray-600">Intelligence layer</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">⚙️</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Business Logic</h4>
                  <p className="text-xs text-gray-600">Core functionality</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-3 hover:border-orange-200 transition-all text-center"
                >
                  <div className="text-2xl mb-2">💾</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Knowledge Base</h4>
                  <p className="text-xs text-gray-600">PostgreSQL + Qdrant</p>
                </motion.div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/security" onClick={() => window.scrollTo(0, 0)}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 bg-orange-600 border border-orange-200 rounded-full text-gray-900 font-semibold text-lg shadow-xl hover:bg-orange-700/30 hover:border-orange-200 hover:shadow-orange-700/50 transition-all"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Security
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
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Technology;
