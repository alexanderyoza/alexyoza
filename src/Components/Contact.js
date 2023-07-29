import { useEffect } from 'react';
import '../Styles/Contact.css';
import Menu from './Menu';
import Footer from './Footer';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



    return (
        <div className='contact-container'>
            <Menu scroll={true} active='contact' />
            <div className='contact'>
                <div className='contact-card'>
                    <div className='contact-title'>
                        Contact Me
                    </div>
                    <div className='contact-links'>
                        <a href='mailto:alex.yoza@gmail.com'　target='_blank' rel='noopener noreferrer'>alex.yoza@gmail.com</a>
                        <a href='tel:6233992062'　target='_blank' rel='noopener noreferrer'>(623)399-2062</a>
                        <a href='https://www.linkedin.com/in/alex-yoza/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <Footer active='contact'/>
        </div>
    )
}

export default Contact