import '../Styles/Landing.css';
import back from '../assets/back.png';
import { useState, useEffect } from 'react';
import alamoana from '../assets/background/ala-moana.jpg';
import korea from '../assets/background/korea.jpg';
import mammothhike from '../assets/background/mammoth-hike.jpg';
import mammothspring from '../assets/background/mammoth-spring.jpg';
import rochestersunset from '../assets/background/rochester-sunset.jpg';
import sedona from '../assets/background/sedona.jpg';
import spaingirona from '../assets/background/spain-girona.jpg';
import spaingracia from '../assets/background/spain-gracia.jpg';
import sunflowers from '../assets/background/sunflowers.jpg';

function Landing() {
    const images = [
        mammothhike,
        sunflowers,
        alamoana,
        korea,
        mammothspring,
        rochestersunset,
        sedona,
        spaingirona,
        spaingracia,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images.length]);

    return (
        <div id='landing'>
            <div className='landing-content'>
                <div className='landing-hook'>
                    designing websites for every step of your journey
                </div>
                <div className='landing-down'>
                    <div>
                        check out some of my projects
                    </div>
                    <img src={back} alt='down-arrow' className='bounce' />
                </div>
            </div>
            <div className='landing-background'>
                <img src={images[currentIndex]} alt='background' />
            </div>
            
        </div>
    )
}

export default Landing