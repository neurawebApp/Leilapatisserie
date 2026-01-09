import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <About />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
