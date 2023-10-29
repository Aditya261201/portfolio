
import './App.css';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Projectwork/Project';

function App() {
  return<div className='App'>
      <Navbar />
      <Hero/>
      <About />
      <Experience />
      <Project />
  </div>;
}

export default App;
