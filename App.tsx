
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-light font-sans text-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <TargetAudience />
        <AboutUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
