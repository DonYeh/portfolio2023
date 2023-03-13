import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolioprojects.json';
import './index.scss';
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material'
  
// import Grid2 from '@mui/material/Unstable_Grid2';
const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  console.log(portfolioData);

  let theme = createTheme()

    const sxPropCSS = {
      // backgroundColor: 'lightgreen',
        [theme.breakpoints.down('sm')]: {
          // backgroundColor: 'orange',
          padding: '0 25px',
        },
    }


  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 2000);

    return ()=> clearTimeout(timer)
  });

  const renderPortfolio = (portfolio) => {

    return (
      <ThemeProvider theme={theme}>
      <Stack direction = {{ sm: 'row', md: 'row', lg: 'row'}} sx={sxPropCSS} className = 'images-container'>
            {
              portfolio.map((port, idx) => {
                return (
                  <div className='portfolio-card' key={idx}>
                    <img 
                    src={port.cover}
                    className='portfolio-image'
                    alt='portfolio cover' 
                    loop='infinite'/>
                    <div className='content'>
                      <p className='title'>{port.title}</p>
                      <h4 className='description'>{port.description}</h4>
                      <button className='btn' onClick={() => window.open(port.url)}>view</button>
                    </div>
                  </div>
                )
              })
            }
      </Stack>
      </ThemeProvider>
    )
  } 

  return (
    <>
      <div className='container portfolio-page'>
        <h1 className='page-title'>
          <AnimatedLetters 
            idx={15} //delay
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
    </>
  )
}

export default Portfolio