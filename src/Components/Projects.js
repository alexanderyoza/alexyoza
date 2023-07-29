import '../Styles/Projects.css';
import uhfd from '../assets/uhfd.png';
import gsfllc from '../assets/gsfllc.png';

function Projects() {
  return (
    <div className='projects'>
      <div className='projects-list'>
        <div className='projects-item'>
          <div className='item-name'>Union Hills Family Dentistry</div>
          <div className='item-image'><img src={uhfd} alt='project' /></div>
        </div>
        <div className='projects-item'>
          <div className='item-name'>GSF LLC</div>
          <div className='item-image'><img src={gsfllc} alt='project' /></div>
        </div>
      </div>
    </div>
  )
}

export default Projects