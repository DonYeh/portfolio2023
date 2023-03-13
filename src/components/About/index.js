import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Paper from '@mui/material/Paper' 
import Container from '@mui/material/Container'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <Container className='container about-page'>
            <Paper className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={"About me".split("")}
                        idx={15}
                    /> 
                </h1>
                <p>Hello. I’m a software engineer who is passionate about writing clean, efficient code and solving real world problems - making the world a better place, one line of code at a time. I have experience in creating software for clients ranging from individuals and small businesses all the way up to enterprise companies. </p>
                <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. I'm an engineer at heart and love to not only build things but make things better. With a thirst for knowledge, coding really quenches my curiosity and desire to learn. I love working on a variety of technologies including web and mobile app development, specializing in front end development. I'm currently learning Solidity as I am excited about Web3 and the opportunites it brings.  </p>
                <p>When I'm not at the computer, you can find me cooking something fierce in the kitchen, out in the garden, or outside walking my dogs.</p>
                <p>Thank you for taking the time to visit my portfolio page. If you have any questions or would like to discuss potential projects or opportunities, please feel free to reach out to me. I look forward to hearing from you!</p>

            </Paper>
        </Container>
    )
}

export default About