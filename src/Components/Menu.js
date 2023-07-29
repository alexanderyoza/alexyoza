import { useState } from 'react';
import '../Styles/Menu.css';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';

function Menu(props) {


  return (
    <div className={ props.scroll ? 'menu-container-bg' : 'menu-container'}>
      <div className='menu'>
        <div className='menu-name'>alex yoza</div>

        <div className='menu-nav'>
          <Link className={ props.active === 'projects' ? 'active' : 'link'} to='/'><div className='link-name'>projects</div></Link>
          <Link className={ props.active === 'about' ? 'active' : 'link'} to='/about'><div className='link-name'>about</div></Link>
          <Link className={ props.active === 'work' ? 'active' : 'link'} to='/contact'><div className='link-name'>contact</div></Link>
        </div>

        <div className='menu-links'>
          <a href='https://github.com/alexanderyoza' target='_blank' rel='noopener noreferrer'><img src={github} alt='github' /></a>
          <a href='https://www.linkedin.com/in/alex-yoza/' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='linkedin' /></a>
        </div>

      </div>
    </div>
  )
}

export default Menu