import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
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
        <div className="max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon */}
            <motion.div
              className="w-16 h-16 mx-auto mb-6 relative"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Mail className="w-full h-full text-orange-500" strokeWidth={1.5} />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>

            <p className="text-xl text-orange-600 font-semibold mb-8 text-center">
              Let's discuss how Aarre Intelligence can transform your business
            </p>

            {/* Contact Form */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/90 border border-orange-200 rounded-xl p-8 shadow-lg"
            >
              <form action="https://formsubmit.co/richard.jarvinen@aarre.ch" method="POST" className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New contact from Aarre Intelligence website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900"
                    placeholder="your.email@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900"
                    placeholder="Your company name"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none text-gray-900"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-700/50 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
