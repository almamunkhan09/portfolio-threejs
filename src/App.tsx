// Import the router-dom
import { BrowserRouter } from 'react-router-dom';
// Import the components
import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';

// Create the App component
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
        </div>
        {/* <About />
        <Experience />
        <Tech /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
