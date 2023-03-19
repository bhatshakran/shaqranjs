import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Credits from './components/Credits';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Scroll from './components/Scroll';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App font-poppins bg-background min-h-screen '>
      <div className='flex justify-center w-full'>
        <div className='max-w-5xl w-full'>
          <Navbar />
          <Banner />
          <Scroll />
          <Skills />
          <Projects />
          <Experience />
          <About />
          <Credits />
        </div>
      </div>
    </div>
  );
}

export default App;
