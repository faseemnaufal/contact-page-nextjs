import TopHeader from './components/Header/TopHeader';
import MainHeader from './components/Header/MainHeader';
import MainBanner from './components/Banner/MainBanner';
import ContactForm from './components/ContactForm/ContactForm';
import './ContactPage.css'; 
import ContactSection from './components/ContactSection/ContactSection';
import MapSection from './components/MapSection/MapSection';
import Footer from './components/Footer/Footer';

export default function ContactPage() {
  return (
    <>
    <TopHeader />
    <MainHeader />
    <MainBanner />
    <ContactSection />
    <MapSection />
    <ContactForm />
    <Footer />
  </>
  );
}
