import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

function Footer(props) {
    return (
        <div className='footer-cont'>
            <div className='footer'>
                <div className='foot-nav'>
                    <Link className={ props.active === 'projects' ? 'active' : 'link'} to='/'><div>projects</div></Link>
                    <Link className={ props.active === 'about' ? 'active' : 'link'} to='/about'><div>about</div></Link>
                    <Link className={ props.active === 'contact' ? 'active' : 'link'} to='/contact'><div>contact</div></Link>
                </div>
                <div className='copyright'>
                    © 2023 AGYLLC. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
