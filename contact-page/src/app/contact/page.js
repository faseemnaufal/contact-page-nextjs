import TopHeader from './components/Header/TopHeader';
import MainHeader from './components/Header/MainHeader';
import MainBanner from './components/Banner/MainBanner';
import ContactForm from './components/ContactForm/ContactForm';
import './ContactPage.css'; 
import ContactSection from './components/ContactSection/ContactSection';
import MapSection from './components/MapSection/MapSection';

export default function ContactPage() {
  return (
    // <main className="contact-page">
    //   <h1>Contact Us</h1>
    //   <ContactForm />
    // </main>
    <>
    <TopHeader />
    <MainHeader />
    <MainBanner />
    <ContactSection />
    <MapSection />
    <ContactForm />
  </>
  );
}
