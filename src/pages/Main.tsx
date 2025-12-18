import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, BarChart3, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollArrow from '../components/ScrollArrow';

const Main = () => {
  const [showDealDetails, setShowDealDetails] = useState(false);
  const [activeInsight, setActiveInsight] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white pb-24">
      <Header />
      <ProgressBar />
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
        zIndex: 0
      }} />

      {/* Section 1: Company Brain */}
      <section id="brain" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* AI Logo - same as landing page */}
            <div className="relative w-16 h-16 mx-auto mb-6">
              {/* Center core */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-3 h-3 bg-orange-600 rounded-full" />
              </motion.div>

              {/* Orbiting particles representing AI nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  style={{ transformOrigin: 'center' }}
                  animate={{ rotate: angle + 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Not Just Another LLM
            </h2>
            <p className="text-xl md:text-2xl text-orange-600 font-semibold mb-4">
              A Company Brain That Remembers Everything
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Every conversation, every document, every insight becomes permanent knowledge.
              Aarre Intelligence gets smarter with every interaction.
            </p>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="personalities" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Different Personalities */}
      <section id="personalities" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Different Roles, Different Personalities
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-3">
              State-of-the-Art Answers
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto mb-8">
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">💼</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Sales Director</h3>
                <p className="text-xs text-gray-600">Drives revenue growth</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Executive Team Member</h3>
                <p className="text-xs text-gray-600">Manages operations</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl mb-2">📊</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Diligent Assistant</h3>
                <p className="text-xs text-gray-600">Serves as you want</p>
              </motion.div>
            </div>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="empathetic" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Supportive & Empathetic */}
      <section id="empathetic" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Supportive & Empathetic
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              Solves Problems, Never Brings Them
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Aarre Intelligence understands context, anticipates needs, and provides solutions—not just answers.
              It's like having a caring team member who actually helps.
            </p>

            {/* Scroll Arrow */}
            <div className="mt-8">
              <ScrollArrow targetId="results" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Shows Results */}
      <section id="results" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BarChart3 className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Tells You What Happens in The Company
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-8">
              Live Data, Real Wins
            </p>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 gap-5 mt-8 max-w-4xl mx-auto mb-12">
              {/* Live Cash Flow Dashboard */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 backdrop-blur-sm border border-orange-200 rounded-xl p-6 text-left"
              >
                <BarChart3 className="w-8 h-8 text-orange-600 mb-3" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Cash Flow Dashboard</h3>

                {/* Cash Flow Bars */}
                <div className="space-y-4">
                  {/* Cash In */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700">Cash In</span>
                      <span className="text-orange-600 font-semibold">$45,200</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Cash Out */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700">Cash Out</span>
                      <span className="text-orange-700 font-semibold">$38,900</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange-600 to-orange-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Runway */}
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Runway</span>
                      <span className="text-orange-600 font-semibold">4.2 months</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span className="text-xs text-orange-600">+0.3 months this week</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Proactive Alerts - Celebration! */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative bg-gradient-to-br from-orange-50 to-orange-100 backdrop-blur-sm border border-orange-200 rounded-xl p-6 text-left overflow-hidden"
              >
                {/* Celebration particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-orange-400 rounded-full"
                      initial={{ x: '50%', y: '50%', scale: 0 }}
                      animate={{
                        x: `${50 + Math.cos(i * 60 * Math.PI / 180) * 80}%`,
                        y: `${50 + Math.sin(i * 60 * Math.PI / 180) * 80}%`,
                        scale: [0, 1, 0],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, repeatDelay: 1 }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Sparkles className="w-8 h-8 text-orange-600 mb-3" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Wins</h3>

                <AnimatePresence mode="wait">
                  {!showDealDetails ? (
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      <motion.div
                        className="bg-orange-100/50 rounded-lg p-3 border border-orange-200"
                        animate={{
                          borderColor: ['rgba(251, 146, 60, 0.3)', 'rgba(251, 146, 60, 0.5)', 'rgba(251, 146, 60, 0.3)'],
                          boxShadow: ['0 0 0px rgba(251, 146, 60, 0)', '0 0 20px rgba(251, 146, 60, 0.2)', '0 0 0px rgba(251, 146, 60, 0)']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900 font-medium">3M€ Deal Just Closed!</p>
                            <p className="text-xs text-gray-600 mt-1">1 minute ago</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowDealDetails(true)}
                          className="mt-3 text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                        >
                          Click for Details →
                        </button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      <motion.div
                        className="bg-orange-100/50 rounded-lg p-4 border border-orange-200"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-base text-gray-900 font-semibold mb-1">Sandra Closed the Deal! 🎉</p>
                            <p className="text-sm text-gray-700">German Manufacturing Corp</p>
                            <p className="text-xs text-gray-600 mt-2">Deal value: <span className="text-orange-600 font-semibold">€3,000,000</span></p>
                            <p className="text-xs text-gray-600">Sales cycle: 45 days</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowDealDetails(false)}
                          className="text-xs text-orange-600 hover:text-orange-700 font-medium transition-colors"
                        >
                          ← Back
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Scroll Arrow */}
            <div className="mt-12">
              <ScrollArrow targetId="around" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Tells You What Happens Around */}
      <section id="around" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Tells You What Happens Around
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              Market Intelligence
            </p>
            <p className="text-sm text-gray-600 mb-8 italic">Click to explore real-world examples</p>

            <div className="max-w-3xl mx-auto mb-12">
              <AnimatePresence mode="wait">
                {!activeInsight ? (
                  <motion.div
                    key="buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveInsight('competitor')}
                      className="group w-full bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all text-left relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="relative flex items-center justify-between">
                        <p className="text-base font-semibold text-gray-900">🎯 Competitor Intelligence</p>
                        <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveInsight('market')}
                      className="group w-full bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all text-left relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                      />
                      <div className="relative flex items-center justify-between">
                        <p className="text-base font-semibold text-gray-900">📊 Market Intelligence</p>
                        <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveInsight('technology')}
                      className="group w-full bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-4 hover:border-orange-400 transition-all text-left relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
                      />
                      <div className="relative flex items-center justify-between">
                        <p className="text-base font-semibold text-gray-900">🔬 Technology Intelligence</p>
                        <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="insight"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    {activeInsight === 'competitor' && (
                      <div className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-6 text-left">
                        <p className="text-lg font-semibold text-gray-900 mb-3">🎯 Competitor Alert</p>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">
                          "Your competitor TechCorp just raised $50M Series B. They're hiring 20 sales reps in DACH region.
                          <span className="text-orange-600 font-semibold"> Recommended action:</span> Accelerate outreach to shared prospects within 14 days."
                        </p>
                        <p className="text-sm text-gray-600">Updated 2 hours ago</p>
                      </div>
                    )}

                    {activeInsight === 'market' && (
                      <div className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-6 text-left">
                        <p className="text-lg font-semibold text-gray-900 mb-3">📊 Market Opportunity</p>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">
                          "Manufacturing sector AI adoption up 127% in Q4. Your ideal customer profile companies increased R&D budgets by avg €2.3M.
                          <span className="text-orange-600 font-semibold"> 47 warm leads</span> match this profile in your CRM."
                        </p>
                        <p className="text-sm text-gray-600">Updated 30 minutes ago</p>
                      </div>
                    )}

                    {activeInsight === 'technology' && (
                      <div className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-lg p-6 text-left">
                        <p className="text-lg font-semibold text-gray-900 mb-3">🔬 Technology Trend</p>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">
                          "New EU AI regulation passed yesterday affects 83% of your prospects. Your solution is compliant, competitors' aren't.
                          <span className="text-orange-600 font-semibold"> Perfect timing</span> to position as the safe choice."
                        </p>
                        <p className="text-sm text-gray-600">Updated 5 hours ago</p>
                      </div>
                    )}

                    <button
                      onClick={() => setActiveInsight(null)}
                      className="text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                    >
                      ← Back
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/technology">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 bg-orange-600 border border-orange-200 rounded-full text-gray-900 font-semibold text-lg shadow-xl hover:bg-orange-700/30 hover:border-orange-200 hover:shadow-orange-700/50 transition-all"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    See Technology
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

export default Main;
