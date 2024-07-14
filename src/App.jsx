// App.jsx
import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// Import custom CSS in App.jsx or index.jsx
import './styles.css';


function App() {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
