import '../Styles/Projects.css';
import uhfd from '../assets/uhfd.png';
import gsfllc from '../assets/gsfllc.png';

function Projects() {
  return (
    <div className='projects'>
      <div className='projects-list'>
        <div className='projects-item'>
          <div className='item-name'>Union Hills Family Dentistry</div>
          <a href='https://alexanderyoza.github.io/union-hills-family-dentistry/' target='_blank' rel='noreferrer' className='item-image'><img src={uhfd} alt='project' /></a>
        </div>
        <div className='projects-item'>
          <div className='item-name'>GSF LLC</div>
          <a href='http://gsfhi.com/' target='_blank' rel='noreferrer' className='item-image'><img src={gsfllc} alt='project' /></a>
        </div>
      </div>
    </div>
  )
}

export default Projects