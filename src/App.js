import './App.css';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
