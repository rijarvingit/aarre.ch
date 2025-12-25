import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { validateFormData } from '../utils/formSecurity';

// reCAPTCHA v3 site key for aarre.ch
const RECAPTCHA_SITE_KEY = '6Ld5sTYsAAAAAKladb35__VxRFMYoY7iF3OU-B4M';

const Contact = () => {
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorField, setErrorField] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Record when the form becomes visible
    setFormStartTime(Date.now());

    // Load reCAPTCHA v3 script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const executeRecaptcha = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (typeof (window as any).grecaptcha !== 'undefined') {
        (window as any).grecaptcha.ready(() => {
          (window as any).grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
            .then((token: string) => {
              console.log('✓ reCAPTCHA executed successfully');
              resolve(token);
            })
            .catch((error: Error) => {
              console.error('✗ reCAPTCHA execution failed:', error);
              reject(new Error('reCAPTCHA verification failed'));
            });
        });
      } else {
        console.error('✗ reCAPTCHA not loaded');
        reject(new Error('reCAPTCHA not available'));
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Reset error states
    setErrorMessage('');
    setErrorField('');

    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const message = (formData.get('message') as string)?.trim() || '';
    const honeypot = (formData.get('website') as string)?.trim() || '';

    // Validate form data
    const validation = validateFormData(name, email, message, honeypot, formStartTime);

    if (!validation.valid) {
      setErrorMessage(validation.message || 'Please check your input');
      setErrorField(validation.field || '');
      return;
    }

    // Show loading state
    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha();

      // Add reCAPTCHA token and additional security fields to form
      const form = formRef.current;
      if (form) {
        // Add reCAPTCHA token
        const recaptchaInput = document.createElement('input');
        recaptchaInput.type = 'hidden';
        recaptchaInput.name = 'g-recaptcha-response';
        recaptchaInput.value = recaptchaToken;
        form.appendChild(recaptchaInput);

        // Add form metadata
        const timestampInput = document.createElement('input');
        timestampInput.type = 'hidden';
        timestampInput.name = 'form_timestamp';
        timestampInput.value = new Date().toISOString();
        form.appendChild(timestampInput);

        const userAgentInput = document.createElement('input');
        userAgentInput.type = 'hidden';
        userAgentInput.name = 'user_agent';
        userAgentInput.value = navigator.userAgent;
        form.appendChild(userAgentInput);

        const formIdInput = document.createElement('input');
        formIdInput.type = 'hidden';
        formIdInput.name = '_formsubmit_id';
        formIdInput.value = Math.random().toString(36).substring(2, 15);
        form.appendChild(formIdInput);

        // Submit the form
        form.submit();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Verification failed. Please try again.');
      setIsSubmitting(false);
    }
  };

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
              <form
                ref={formRef}
                action="https://formsubmit.co/richard.jarvinen@aarre.ch"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New contact from Aarre Intelligence website" />
                <input type="hidden" name="_next" value="https://aarre.ch/thank-you" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for your message! We'll get back to you soon." />

                {/* Honeypot field - hidden from users, visible to bots */}
                <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}

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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 ${
                      errorField === 'name' ? 'border-red-400' : 'border-orange-200'
                    }`}
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 ${
                      errorField === 'email' ? 'border-red-400' : 'border-orange-200'
                    }`}
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none text-gray-900 ${
                      errorField === 'message' ? 'border-red-400' : 'border-orange-200'
                    }`}
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full px-8 py-4 text-white font-semibold rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-orange-400 cursor-not-allowed'
                      : 'bg-orange-600 hover:bg-orange-700 hover:shadow-orange-700/50'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* reCAPTCHA Badge Notice */}
                <p className="text-xs text-gray-500 text-center">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
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
