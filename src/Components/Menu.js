import '../Styles/Menu.css';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Menu(props) {
  return (
    <div className={ props.scroll ? 'menu-container-bg' : 'menu-container'}>
      <div className='menu'>

        <div className='menu-name'>alex yoza</div>

        <div className='menu-nav'>
          <div>about</div>
          <div>work</div>
          <div>projects</div>
        </div>

        <div className='menu-links'>
          <img src={github} alt='github' />
          <img src={linkedin} alt='linkedin' />
        </div>

      </div>
      
    </div>
  )
}

export default Menu