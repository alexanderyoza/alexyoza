import { useEffect, useRef, useState } from 'react';

import Menu from './Menu';
import Landing from './Landing';
import Projects from './Projects';
import Footer from './Footer';
import '../Styles/Home.css';

function Home() {
    const [isScrolledTo, setIsScrolledTo] = useState(false);
    const targetDivRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const targetDiv = targetDivRef.current;

            if (targetDiv) {
                const rect = targetDiv.getBoundingClientRect();
                const isElementInView = rect.top <= window.innerHeight * 0.1;
                setIsScrolledTo(isElementInView);
            }
        };

        window.scrollTo(0, 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='home-container'>
            <Menu scroll={ isScrolledTo } active='projects'/>
            <Landing />
            <div ref={targetDivRef}>
                <Projects />
            </div>
            <Footer active='projects' />
        </div>
    )
}

export default Home