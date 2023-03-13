import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
// import '../../styles/index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['Donald', '.'] 
    // const nameArray = ['D', 'o', 'n', 'a', 'l', 'd', '.'] 
    // const jobArray = ['I build things with my keyboard'.split("")]
    // const jobArray = ['I',"'",'m', ' ', 'a', '', 'w', 'e', 'b ', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    const jobArray = ['I',"",'b', 'u', 'i', 'l', 'd ', '', 't', 'h', 'i', 'n', 'g', 's',' ', 'w', 'i', 't', 'h', ' ', 'm','y', ' ', 'keyboard', '.']
    // const jobArray = ['I',"",'b', 'u', 'i', 'l', 'd ', '', 't', 'h', 'i', 'n', 'g', 's',' ', 'w', 'i', 't', 'h', ' ', 'm','y', ' ', 'k', 'e', 'y', 'b', 'o', 'a', 'r', 'd', '.']
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={`${letterClass} _12`}>H</span> 
                    {/* <span className={letterClass}>H</span>  */}
                    <span className={`${letterClass} _13`}>i</span>
                    <span className={`${letterClass} _14`}>,</span>
                    <br/> 
                    <span className={`${letterClass} _15`}>I</span>
                    <span className={`${letterClass} _16`}>' </span>
                    <span className={`${letterClass} _17`}>m </span>
                    <span className={`${letterClass} _18`}> </span>

                    <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray}
                    idx={22} />
                </h1>
                <h2> Software Engineer  /  Full Stack Developer  / Plant Enthusiast</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home