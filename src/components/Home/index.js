import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.scss';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray= ['a','d', 'i','q']
    const jobArray = ['w', 'e','l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'm', 'y', ' ', 'w', 'e', 'b', 'p', 'a', 'g', 'e', '.']

    const[ visitorCount, setVisitorCount] = useState(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, []); // Empty dependency array ensures this runs once
    
    useEffect(() => {
    fetch('/.netlify/functions/readCsv')
    .then(response => response.json)
    .then(data =>{
        setVisitorCount(data.count)
    })
    .catch(error => console.error("error fetching visitor count !", error));
    },[]);

    return(
        <>
        <div className="container home-page">
            <div className="visitor-count"> {visitorCount === null ? 'Loading visitor count ...' : visitorCount} </div> 
            <div className="text-zone">
                <h1>
                
                <span className={letterClass}>H</span>  
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>l</span>
                <span className={`${letterClass} _15`}>o,</span>   
                <span> </span>
                <span className={`${letterClass} _16`}>I</span>    
                <span className={`${letterClass} _17`}>'m</span>  
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={18} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={18} />

                </h1>
                <h2> Undergraduate developer</h2>
                <Link to="/" className='flat-button'>HOME</Link>
                <Link to="/about" className='flat-button'>ABOUT</Link>
                <Link to="/projects" className='flat-button'>PROJECTS</Link>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>

            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home