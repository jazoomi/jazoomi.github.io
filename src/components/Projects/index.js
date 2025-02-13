import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import Menu4k from '../../assets/images/Menu4k.png'
import { Link } from 'react-router-dom'
import Shapes from '../../assets/images/Shapes.png'
import STMP from '../../assets/images/STMP.png'
import Inventory from '../../assets/images/Inventory.jpg'
import ThreeMusketeers from '../../assets/images/ThreeMusketeers.png'

const Projects = () => {

    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, []); // Empty dependency array ensures this runs once
    
    return (
        <>
    <div className="container projects-page"> 
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['p', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
                />
            </h1>
        </div>
        <div className="projects-zone">
            <div className="project">
            <Link to="/"><img className="project-list-image" src={LogoTitle} alt="Project 1" />  </Link>
                <h3>Sadiq's Website</h3>
            </div>
            <div className="project">
                <a href='https://menu4k.com/about/' target="_blank" rel="Noreferrer"> <img className="project-list-image" src={Menu4k} alt="Project 2" /> </a>
                <h3>Menu4k</h3>
            </div>
            <div className="project">
            <a href='https://github.com/jazoomi/Under_Cover' target="_blank" rel="Noreferrer"><img className="project-list-image" src={Shapes} alt="Project 3" /> </a>
                <h3>Developed a shape matching game via node.js for added security</h3>
            </div>
            <div className="project">
            <a href='https://github.com/jazoomi/SMTP-POP-server' target="_blank" rel="Noreferrer"> <img className="project-list-image" src={STMP} alt="Project 4" /> </a>
                <h3>Developed a MailServer via SMTP and POP3</h3>
            </div>
            <div className="project">
            <a href='https://github.com/jazoomi/Stock-Inventory-Management-System' target="_blank" rel="Noreferrer"> <img className="project-list-image" src={Inventory} alt="Project 5" /> </a>
                <h3>Developed a Stock Inventory Managment System</h3>
            </div>
            <div className="project">
            <a href='https://github.com/jazoomi/Three-Musketeers' target="_blank" rel="Noreferrer"> <img className="project-list-image" src={ThreeMusketeers} alt="Project 6" /> </a>
                <h3>"Three Musketeers", an abstract stategy board game inspired by Haar Hoolim</h3>
            </div>
        </div>

    </div>
    <Loader type="pacman"/>
    </>
    )
}

export default Projects