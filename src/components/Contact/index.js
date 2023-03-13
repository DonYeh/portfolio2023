import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                refForm.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send, please try again.')
                }
            )
    }

    return (
        
        <Container className='container contact-page'>
            <Paper className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Contact me".split("")}
                        idx={15}
                    />
                </h1>
                <p>Have a project you're looking to get off the ground? I'd love to hear from you. Please don't hesitate to contact me so we can get the ball rolling!</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea  name="message" placeholder="Message" required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </Paper>
        </Container>
        
    )
}

export default Contact;