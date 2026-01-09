import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-offwhite overflow-x-hidden w-full">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <About />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
