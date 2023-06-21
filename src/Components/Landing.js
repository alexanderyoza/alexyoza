import '../Styles/Landing.css';
import back from '../assets/back.png';
import video from '../assets/backgroundVideo.mov';

function Landing() {
  return (
    <div id='landing'>
      <video autoPlay muted playsInline loop src={video}></video>
      <div className='landing-down'>
        <div>
          welcome to my page!
        </div>
        <img src={back} alt='down-arrow' className='bounce' />
      </div>
    </div>
  )
}

export default Landing