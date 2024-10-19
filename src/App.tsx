import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import { NAVIGATION } from './lib/definition';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Partners from './pages/Partners';
// import Subscription from './pages/Subscription';
// import FAQS from './pages/FAQS';
// import ContactUs from './pages/ContactUs';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Partners = lazy(() => import('./pages/Partners'));
const Subscription = lazy(() => import('./pages/Subscription'));
const FAQS = lazy(() => import('./pages/FAQS'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

function App() {
  // useEffect(() => {
  //   document.title = 'Activ8 - Home';
  // }, []);


  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={NAVIGATION.HOME} element={<Home />} />
            <Route path={NAVIGATION.ABOUT_US} element={<AboutUs />} />
            <Route path={NAVIGATION.PARTNERS} element={<Partners />} />
            <Route path={NAVIGATION.SUBSCRIPTIONS} element={<Subscription />} />
            <Route path={NAVIGATION.FAQS} element={<FAQS />} />
            <Route path={NAVIGATION.CONTACT_US} element={<ContactUs />} />
            <Route path={NAVIGATION.PRIVACY_POLICY} element={<PrivacyPolicy />} />
            <Route path={NAVIGATION.TERMS_OF_SERVICE} element={<TermsOfService />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
