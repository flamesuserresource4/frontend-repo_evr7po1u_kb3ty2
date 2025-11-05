import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="text-white font-semibold tracking-tight">ИНТЕЛЛУМ</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Услуги</a>
            <a href="#cases" className="hover:text-white">Кейсы</a>
            <a href="#contact" className="hover:text-white">Контакты</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex rounded-md bg-yellow-300 text-black px-4 py-2 text-sm font-medium hover:bg-yellow-200 transition">Связаться</a>
        </div>
      </header>

      <main id="top" className="pt-16">
        <Hero />
        <Services />
        <CaseStudies />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;
