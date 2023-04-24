import React, { useEffect, useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

import './index.scss' 

import memojiLogo from '../../assets/images/memojilogo2.png'
import { NavLink, useNavigate, Link } from 'react-router-dom';
// import Portfolio from '../Portfolio';

const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(()=> {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(()=>{
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen])

    
    const menuToggleHandler = () => {
        setMenuOpen(!menuOpen)
    }

    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate('../ctapage');
    }


  return (
    <header className='header'>
        <div className='header__content'>
            
            <img src={memojiLogo} alt="logo" className='header__content__logo' />
            <nav className={`header__content__nav ${menuOpen && size.width < 768 ? "isMenu" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/" activeclassname='active' onClick={menuToggleHandler} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="../about" onClick={menuToggleHandler} activeclassname='active' className='about-link' >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="../experience" onClick={menuToggleHandler} activeclassname='active' className='experience-link' >Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="../portfolio" onClick={menuToggleHandler} activeclassname='active' className='portfolio-link' >Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="../contact" onClick={menuToggleHandler} activeclassname='active' className='contact-link' >Contact</NavLink>
                    </li>
                </ul>
                <NavLink className="button" to="../projects/DonaldYehResumeApril2023.pdf" target="_blank" download="Donald Yeh - Resume">My Resume</NavLink>                
            </nav>
        <div className='header__content__toggle'>
            {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler}/> }
        </div>
        </div>

    </header>
  )
}

export default Header
