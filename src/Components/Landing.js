import '../Styles/Landing.css';
import back from '../assets/back.png';
import video from '../assets/backgroundVideo.mov';

function Landing() {
  return (
    <div id='landing'>
      <video autoPlay muted playsInline loop src={video}></video>
      <div className='landing-down'>
        <div>
          check out my projects
        </div>
        <img src={back} alt='down-arrow' className='bounce' />
      </div>
    </div>
  )
}

export default Landing