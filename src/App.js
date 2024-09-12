import './App.css';
import { Helmet } from 'react-helmet';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ScrollToTopArrow from './components/ScrollToTopArrow';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Vince Churchill | Portfolio</title>
        <meta name="description" content="Welcome to Vince Churchill's portfolio! 🌟 I'm a passionate software developer from Ghana with expertise in building full-stack web apps. Explore my journey as I blend my love for databases, backend APIs, and frontend design to craft innovative solutions. Dive into my CV, discover my projects, and see how I tackle everyday problems with technology. Let's connect!" />
        <link rel="icon" href="https://res.cloudinary.com/dpyvx3nd9/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726072985/apple-touch-icon_oqxach.png" type="image/x-icon" />
      </Helmet>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
      <ScrollToTopArrow />
    </div>
  );
}

export default App;
