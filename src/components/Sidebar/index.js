import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitles from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faFile,faHome, faUser, faFolder } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitles} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className ="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className ="projects-link" to="/projects">
                <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            
            <li>  
                <a target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1bMB1d88ty7tWeRjPwrXMNOVsdH8fqxI1/view?usp=sharing">
                    <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
                </a>

            </li>
            <li>
                <a target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sadiq-azmi/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>

            </li>
            <li>
                <a target="_blank"
                rel="noreferrer"
                href="https://github.com/jazoomi">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>

            </li>
            

            
        </ul>

    </div>
)

export default Sidebar