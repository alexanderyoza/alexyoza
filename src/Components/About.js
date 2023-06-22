import { useEffect, useState } from 'react';
import '../Styles/About.css';
import sunset from '../assets/sunset.jpeg';
import Menu from './Menu';
import Footer from './Footer';

function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const narrow = window.innerWidth <= 600;
      setIsMobile(narrow);
    };
    
    window.scrollTo(0, 0);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };

  }, []);

  return (
    <div id='about-cont'>
      <Menu scroll={true} active='about'/>
      <div className='about-inner-cont'>
        <div className={isMobile ? 'mobile-alex' : 'alex'}>
          <div>
            <h1>alex yoza</h1>
            <div>born in Honolulu, Hawaii</div>
            <div>raised in Phoenix, Arizona</div>
            <div>attending school in San Diego, California</div>
          </div>
          <img src={sunset} alt='alex' />
        </div>
      </div>

      <div className='about-inner-cont'>
        <div className={isMobile ? 'mobile-school' : 'school'}>
          <img src={sunset} alt='school' />
          <div>
            <h1>education</h1>
            <div>University of California San Diego</div>
            <div>BS Computer Science</div>
            <div>2021-2025 (expected)</div>
          </div>
        </div>
      </div>
      <Footer active='about'/>
    </div>
    
  )
}

export default About