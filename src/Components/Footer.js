import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

function Footer(props) {
    return (
        <div className='footer-cont'>
            <div className='footer'>
                <div className='foot-nav'>
                    <Link className={ props.active === 'projects' ? 'active' : 'link'} to='/'><div>projects</div></Link>
                    <Link className={ props.active === 'about' ? 'active' : 'link'} to='/about'><div>about</div></Link>
                    <Link className={ props.active === 'work' ? 'active' : 'link'} to='/work'><div>work</div></Link>
                </div>
                <div className='foot-contact'>
                    <a href='mailto:alex.yoza@outlook.com'>alex.yoza@outlook.com</a>
                    <a href='sms:+16233992062'>(623)399-2062</a>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer