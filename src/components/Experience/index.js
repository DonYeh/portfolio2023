import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import './index.scss'
import {
    AWS, Android, Angular, Bitbucket, Bootstrap, CSS3, Express, Git, Github, Gitlab, Graphql, HTML, IntelliJ, Jasmine, Java, Javascript, Jenkins, Jira, MaterialUI, Mocha, MongoDB, MySQL, NGINX, NodeJS, NPM, Oracle, Postgresql, Postman, Python, ReactJS, ReactNative, Redux, SASS, Sonar, Swagger, Tailwind, TeamCity, Typescript, VScode
    } from '../../assets/images/index';
// import HTML from '../../assets/images/languageIcons/html5.png';
// import aws from '../../assets/images/languageIcons/amazonwebservices.png';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material'


const Experience = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        width: '78px',
        height: '78px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }));

    let theme = createTheme()

    const sxPropCSS = {
        // backgroundColor: 'lightgreen',
          [theme.breakpoints.up('xs')]: {
            // backgroundColor: 'green',
            padding: 0,
            fontSize: '.92rem',
            // width: 'fit-content',
            // width: 'auto',
            "box": {
                // background: 'yellow',
                flexDirection: 'column'
                // padding: 
            },
            ".selected-title-date": {
                // backgroundColor: 'purple',
                padding: 0,
                // fontSize: '.92rem',
                h3: {
                    padding: '4px 0',
                }
            },
            ".experience-box": {
                // padding: '0 1% 1%',
            },

            ".panel-content box": {
                // backgroundColor: 'orange',
                padding: 0,
            },
            ".panel-content ul": {
                // backgroundColor: 'yellow',
                // padding: 0,
                // fontSize: '.92rem',
            },
          },
        //   [theme.breakpoints.up('sm')]: {
        //     backgroundColor: 'orange',
        //     // padding: '0 25px',
        //   },
        //   [theme.breakpoints.up('md')]: {
        //     backgroundColor: 'purple',
        //     // padding: '0 25px',
        //   },
        //   [theme.breakpoints.up('lg')]: {
        //     backgroundColor: 'red',
        //     // padding: '0 25px',
        //   },
        //   [theme.breakpoints.up('xl')]: {
        //     backgroundColor: 'blue',
        //     // padding: '0 25px',
        //   },

      }


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])



    return (
        <ThemeProvider theme={theme}>
        <Box sx={sxPropCSS} className='container experience-page'>
            <Box className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={"Experience".split("")}
                        idx={12}
                    /> 
                </h1>
            </Box>          
            <Box className='experience-box'>
                <h3>PLACES I'VE WORKED </h3>
                {/* <h3>Places I've worked </h3> */}
                <Paper className='work-paper'>
                    <Tabs>
                        <TabList>
                            <Tab>
                                <p>Daugherty Business Solutions</p>
                            </Tab>
                            <Tab>
                                <p>Timbergrove</p>
                            </Tab>
                        </TabList>
                        <TabPanel>
                        <div className="panel-content">
                            <Box className="selected-title-date">
                                <h3>Associate Consultant - Software Engineer</h3>
                                <h4>January 2021 - November 2022</h4>
                            </Box>
                            <box>
                                <p>Home Depot: Atlanta, GA</p>
                                <p>Jul 2022 - Nov 2022 </p>
                            </box>
                            {/* <div>
                                <p>Home Depot: Atlanta, GA</p>
                                <p>Jun 2022 - Oct 2022 </p>
                            </div> */}
                            <ul>
                                <li>Worked on building APIs and consuming RESTful microservices for supply chain distribution and allocation</li>
                                <li>Involved in the design, analysis, development, testing, and deployment of applications</li>
                                <li>Back-end development with Java, Spring Framework, Junit, Sonar, Fortify, Mongo, MySQL Oracle</li>
                            </ul>
                            <box>
                                <p>Cargill: Minneapolis, MN</p>
                                <p>Sep 2021 - Feb 2022 </p>
                            </box>
                            <ul>
                                <li>Developed a mobile app to help farmers sell their yields to Cargill, improving their rates of contracts and user satisfaction</li>
                                <li>Worked on screens and workflows that allowed users to create and edit contracts in Android and iOS</li>
                                <li>Front-end development with React Native, Redux, StyleSheet, and Tailwind</li>
                            </ul>
                            <box>
                                <p>Bayer: St Louis, MO</p>
                                <p>Feb 2021 - Jul 2022 </p>
                            </box>
                            <ul>
                                <li>Transitioned a legacy app into a new app built from the ground up which improved usability and performance</li>
                                <li>Created forms and inputs with API integration to pre-populate data into form drop-down lists</li>
                                <li>Fullstack development wotj DynamoDB, ExpressJS, React, Redux, Node, Mocha, Chai, Jenkins</li>
                            </ul>
                        </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <Box className="selected-title-date">
                                    <h3>Software Developer</h3>
                                    <h4>September 2020 - December 2020</h4>
                                </Box>
                                <ul>
                                    <li>Worked on building APIs and consuming RESTful microservices for supply chain distribution and allocation</li>
                                    <li>Involved in the design, analysis, development, testing, and deployment of applications</li>
                                    <li>Back-end development with Java, Spring Framework, Junit, Sonar, Fortify, Mongo, MySQL Oracle</li>
                                </ul>
                            </div>
                        </TabPanel>
                    </Tabs>
                </Paper>
            </Box>
            <Box className='technologies-tools-container'>
                <h3>TECHNOLOGIES AND TOOLS</h3>
                {/* <h3>Technologies and Tools</h3> */}
                <Paper className = 'tandtpaper'>
                <Grid2 container xs={12} sm={10} md={6} lg={4} className='front-end-box' spacing={2}  >
                    <h4>Front End</h4>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={HTML} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>HTML</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={CSS3} className='icon-image' alt='CSS'/>
                                    <Typography variant='caption'>CSS</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Javascript} className='icon-image' alt='Javascript'/>
                                    <Typography variant='caption'>Javascript</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={ReactJS} className='icon-image' alt='React'/>
                                    <Typography variant='caption'>React</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Redux} className='icon-image' alt='Redux'/>
                                    <Typography variant='caption'>Redux</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={ReactNative} className='icon-image' alt='React Native'/>
                                    <Typography variant='caption'>React Native</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Angular} className='icon-image' alt='Angular'/>
                                    <Typography variant='caption'>Angular</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={MaterialUI} className='icon-image' alt='Material UI'/>
                                    <Typography variant='caption'>Material UI</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Bootstrap} className='icon-image' alt='Bootstrap'/>
                                    <Typography variant='caption'>Bootstrap</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Tailwind} className='icon-image' alt='Tailwind'/>
                                    <Typography variant='caption'>Tailwind</Typography>
                        </Item>
                    </Grid2>
                </Grid2>
                
                <Grid2 container xs={12} sm={10} md={6} lg={4} className='back-end-box' spacing={2}>
                    {/* <Typography variant='h6'>Back End</Typography> */}
                    <h4>Back End</h4>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={NodeJS} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Node.js</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Express} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Express</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Java} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Java</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={NGINX} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>NGINX</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Python} className='icon-image' alt='Python'/>
                                    <Typography variant='caption'>Python</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Postgresql} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>PostgreSQL</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={MySQL} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>MySQL</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={MongoDB} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>MongoDB</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Oracle} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Oracle</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Swagger} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Swagger</Typography>
                        </Item>
                    </Grid2>
                </Grid2>
                            
                <Grid2 container xs={12} sm={10} md={6} lg={4} className='tools-box' spacing={2}>
                    <h4>Tools</h4>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={VScode} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>VScode</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={IntelliJ} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>IntelliJ</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Git} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Git</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Github} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Github</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={AWS} className='icon-image' alt='AWS'/>
                                    <Typography variant='caption'>AWS</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Jira} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Jira</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={TeamCity} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>TeamCity</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Jenkins} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>Jenkins</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Bitbucket} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>BitBucket</Typography>
                        </Item>
                    </Grid2>
                    <Grid2 container spacing={1}>
                        <Item>
                                    <img src={Gitlab} className='icon-image' alt='HTML'/>
                                    <Typography variant='caption'>GitLab</Typography>
                        </Item>
                    </Grid2>
                </Grid2>
                </Paper>
            </Box>
        </Box>
        </ThemeProvider>
    )  

}

export default Experience