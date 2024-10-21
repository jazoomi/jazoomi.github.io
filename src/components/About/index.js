import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Sadiq from '../../assets/images/Sadiq.jpg'
const About =() => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, []); // Empty dependency array ensures this runs once

    return(
        <>
        <div className='container about-page'>
            <img className='sadiq' src={Sadiq} alt="sadiq" />
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ','m', 'e']}
                        idx={15}
                    />
                </h1>
                <p> Hello I am sadiq an undergraduate student aspiring to become a well rounded developer</p>
                <p> I am a curious, passionate individual looking to imporve my skills one design problem at a time</p>
                <p> I hope you can enjoy my page and would love to hearing from you in the future. </p>
            </div>
        <div className="stage-cube-cont">
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
            
        </div>
        </div>
        <Loader type="pacman" />
        
        </>
    )
}

export default About;