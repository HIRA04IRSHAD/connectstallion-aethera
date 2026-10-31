import { useState } from 'react';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Services from './components/Services';

const initialService = () => new URLSearchParams(window.location.search).get('service') ?? '';

export default function App() {
  // "Enquire" and "Apply" buttons pre-fill the matching form fields
  const [service, setService] = useState(initialService);
  const [role, setRole] = useState('');

  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Services onEnquire={setService} />
      <Industries />
      <Careers role={role} onRoleChange={setRole} />
      <Contact service={service} onServiceChange={setService} />
      <Footer />
    </main>
  );
}
