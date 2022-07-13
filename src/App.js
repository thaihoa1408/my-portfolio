import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import Navbar from './components/Navbar';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
      <Navbar />
      <LeftSide />
      <RightSide />
      <div className='main'>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
