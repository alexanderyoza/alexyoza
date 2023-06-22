import { useState } from 'react';
import { useEffect } from 'react';
import '../Styles/Work.css';
import Job from './Job';
import boh from '../assets/boh.png';
import projdest from '../assets/projdest.png';
import alexlogo from '../assets/alexlogo.png';
import Menu from './Menu';
import Footer from './Footer';

function Work() {
  const freelance = {
    'image': alexlogo,
    'title': 'Website Developer',
    'date': 'July 2022 - Present',
    'location': 'based in Phoenix, Arizona'
  }
  const projDestined = {
    'image': projdest,
    'title': 'Project Destined',
    'position': 'Commercial Real Estate Intern',
    'date': 'September 2022 - December 2022',
    'location': 'Virtual'

  }
  const bankoh = {
    'image': boh,
    'title': 'Bank of Hawaii',
    'position': 'eSolutions Development Intern',
    'date': 'June 2022 - August 2022',
    'location': 'Honolulu, Hawaii'
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className='work'>
      <Menu scroll={true} active='work'/>
      <div className='work-jobs'>
        <Job info={freelance}/>
        <Job info={projDestined}/>
        <Job info={bankoh} />
      </div>
      <Footer active='work'/>
    </div>
  )
}

export default Work