import './App.css';
import Header from './components/Header';


import HeroAbout from './components/Hero&About';
import ProjectsContact from './components/Projects&Contact';
import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';

function App() {
  useEffect(() => {
    (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
    })();
}, []);

  return (
    <div className={`App relative`}>
      <Header />
      <HeroAbout/>
      <ProjectsContact/>
    </div>
  );
}

export default App;