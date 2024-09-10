import './App.css';
import { Helmet } from 'react-helmet';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Vince Churchill's Portfolio</title>
        <meta name="description" content="Welcome to Vince Churchill's portfolio! 🌟 I'm a passionate software developer from Ghana with expertise in building full-stack web apps. Explore my journey as I blend my love for databases, backend APIs, and frontend design to craft innovative solutions. Dive into my CV, discover my projects, and see how I tackle everyday problems with technology. Let's connect!" />
        <link rel="icon" href="/images/VINTECH..jpg" type="image/x-icon" />
      </Helmet>
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
