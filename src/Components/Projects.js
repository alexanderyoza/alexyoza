import '../Styles/Projects.css';
import sunset from '../assets/sunset.jpeg';

function Projects() {
  return (
    <div className='projects'>
      <div className='projects-list'>
        <div className='projects-item'>
          <div className='item-name'>Union Hills Family Dentistry</div>
          <div className='item-image'><img src={sunset} alt='project' /></div>
        </div>
        <div className='projects-item'>
          <div className='item-name'>GSF LLC</div>
          <div className='item-image'><img src={sunset} alt='project' /></div>
        </div>
      </div>
    </div>
  )
}

export default Projects