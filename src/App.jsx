import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar    from './components/Navbar/Navbar';
import Hero      from './components/Hero/Hero';
import About     from './components/About/About';
import Stats     from './components/Stats/Stats';
import Skills    from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects  from './components/Projects/Projects';
import Contact   from './components/Contact/Contact';
import Footer    from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
