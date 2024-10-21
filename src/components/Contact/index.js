import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import GoogleMap from '../../assets'
const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, []); // Empty dependency array ensures this runs once
    
    const sendEmail =(e) =>{
        e.preventDefault()

        emailjs
        .sendForm(
            'service_0t0noi4',
            'template_i2fs6ck',
            refForm.current,
            'Cgyns4kfYgQrgxvWi'
        )
        .then(
            ()=> {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t', ' ', 'm', 'e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am currently and undergraduate computer science student in his third year and open to freelance or intern opportunities.
                        Please do not hesitate to contact me using the form below
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="email" required/>
                                </li>
                                <li>
                                    <input placeholder="Suject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required>

                                    </textarea>
                                    
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Sadiq Azmi,
                    <br/>
                    Canada,
                    <br/>
                    North York
                    <br/>
                    Toronto
                    <br/>
                    <span> sadiqazmi0@gmail.com</span>
                </div>
        <div className="map-wrap">
        <GoogleMap center={[43.78, - 79.43]} zoom={13}/>
            
        </div>
      </div>
      <Loader type="pacman" />
            
        </>
    )
}

export default Contact

