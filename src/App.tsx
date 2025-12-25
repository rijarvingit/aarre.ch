import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Technology from './pages/Technology';
import Security from './pages/Security';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/security" element={<Security />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
