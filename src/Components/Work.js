import { useState } from 'react';
import '../Styles/Work.css';
import Job from './Job';
import sunset from '../assets/sunset.jpeg';

function Work() {
  const freelance = {
    'image': sunset,
    'title': 'Website Developer',
    'date': 'July 2022 - Present',
    'location': 'based in Phoenix, Arizona'
  }
  const projDestined = {
    'image': sunset,
    'title': 'Project Destined',
    'position': 'Commercial Real Estate Intern',
    'date': 'September 2022 - December 2022',
    'location': 'Virtual'

  }
  const boh = {
    'image': sunset,
    'title': 'Bank of Hawaii',
    'position': 'eSolutions Development Intern',
    'date': 'June 2022 - August 2022',
    'location': 'Honolulu, Hawaii'
  }



  return (
    <div className='work'>
      <div className='work-title'>
        work experience
      </div>
      <div className='work-jobs'>
        <Job info={freelance}/>
        <Job info={projDestined}/>
        <Job info={boh} />
      </div>
      
    </div>
  )
}

export default Work