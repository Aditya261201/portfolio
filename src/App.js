import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Projectwork/Project';


// aos for scroll animation
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    Aos.init();
  }, [])
  

  return<div className='App'>
      <Navbar />
      <Hero/>
      <About />
      <Experience />
      <Project />
      <Contact />
  </div>;
}

export default App;
