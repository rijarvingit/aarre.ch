import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONSENT_KEY = 'aarre_cookie_consent';
const CONSENT_ACCEPTED = 'accepted';
const CONSENT_DECLINED = 'declined';
const GA_ID = 'G-HZL971HVXD'; // Google Analytics 4 for aarre.ch

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);

    if (consent === CONSENT_ACCEPTED) {
      loadGoogleAnalytics();
    } else if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Create script element for gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize Google Analytics
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_ID);
      console.log('✓ Google Analytics loaded after consent');
    };
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, CONSENT_ACCEPTED);
    setShowBanner(false);
    loadGoogleAnalytics();
    console.log('✓ Cookie consent accepted - Analytics enabled');
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, CONSENT_DECLINED);
    setShowBanner(false);
    console.log('✗ Cookie consent declined - Analytics disabled');
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[10000]"
          style={{
            background: 'rgba(26, 32, 44, 0.98)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px'
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm md:text-base flex-1 text-center md:text-left">
              We use cookies to analyze website traffic and improve your experience. Your data is anonymized and we respect your privacy.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="px-6 py-2.5 bg-green-600 text-white rounded font-medium hover:bg-green-700 transition-colors"
              >
                Accept
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDecline}
                className="px-6 py-2.5 bg-transparent text-gray-400 rounded font-medium border border-gray-600 hover:bg-gray-800 hover:text-gray-200 transition-colors"
              >
                Decline
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
