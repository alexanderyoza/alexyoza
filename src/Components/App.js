import { useEffect, useRef, useState } from 'react';

import '../Styles/App.css';
import Menu from './Menu';
import Landing from './Landing';
import About from './About';
import Work from './Work';
import Projects from './Projects';

function App() {

  const [isScrolledTo, setIsScrolledTo] = useState(false);
  const targetDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = targetDivRef.current;

      if (targetDiv) {
        const rect = targetDiv.getBoundingClientRect();
        const isElementInView = rect.top <= window.innerHeight * 0.08;
        setIsScrolledTo(isElementInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <Menu scroll={ isScrolledTo } />
      <Landing />
      <div ref={ targetDivRef } >
        <About />
        <Work />
        <Projects />
      </div>
      
    </div>
  );
}

export default App;
