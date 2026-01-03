import Navigation from './components/Navigation';
import Hero from './components/sections/hero/Hero';
import Projects from './components/sections/projects/Projects';
import Education from './components/sections/education/Education';
import Music from './components/sections/music/Music';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <Projects />
      <Education />
      <Music />
      <Footer />
    </div>
  );
}

export default App;
