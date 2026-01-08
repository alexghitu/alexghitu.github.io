import Navigation from './components/Navigation';
import Hero from './components/sections/hero/Hero';
import About from './components/sections/about/About';
import Projects from './components/sections/projects/Projects';
import Music from './components/sections/music/Music';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Music />
      <Footer />
    </div>
  );
}

export default App;
