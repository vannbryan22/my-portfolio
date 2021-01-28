import React from 'react'

function Home() {
    return (
        <div className='home'>
            <div className='home__sectOne'>
                <div className='home__sectOneInfo'>
                    <div className='home__sectOneInfoImage'>
                        <img src='/Vann.jpg' alt='Vann' />
                    </div>

                    <div className='home__sectOneTexts'>
                        <div className='home__sectOneTextsName'>
                            <h1>Vann Bryan B.</h1>
                            <h1>Galleta</h1>
                        </div>
                        <div className='divider'></div>
                        <div className='home__sectOneTextsPhone'>
                            <h4>Phone:</h4>
                            <p>
                                +63 949 488 3735
                            </p>
                        </div>
                        <div className='home__sectOneTextsEmail'>
                            <h4>Email:</h4>
                            <p>
                                vannbryan22@gmail.com
                            </p>
                        </div>
                        <div className='home__sectOneTextsGithub'>
                            <h4>Github:</h4>
                            <a 
                            target='_'
                            href='https://github.com/vannbryan22'>
                                vannbryan22
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home__sectTwo container'>
                <div className='home__sectTwoDetails'>
                    <div className='home__sectTwoSkills'>
                        <h2>
                        Full Stack ReactJS Developer
                        </h2>
                    </div>
                    <div className='divider'></div>
                    <div className='home__sectTwoAbout'>
                        <h4>About Me</h4>
                        <p>
                        Filled with passion, talent and dedication being a developer.
                        Learning deeper and widely enough to make progress on 
                        coding day to day.
                        </p>
                    </div>

                    <div className='home__sectTwoTechnologies'>
                        <h4
                        style={{color:'#212121', fontWeight:'700', marginTop:'1rem'}}>
                            Technologies
                        </h4>
                        <h5>Frontend:</h5>
                        <div className='home__sectTwoTechnologiesFrontend'>
                            <p>ReactJS</p>
                            <p>React-Redux</p>
                            <p>React Context</p>
                            <p>React-Router-DOM</p>
                            <p>SASS</p>
                            <p>ES6+</p>
                            <p>REST APIs</p>
                            <p>JavaScript</p>
                            <p>Html</p>
                            <p>CSS</p>
                            <p>Material-UI Design</p>
                        </div>
                        <h5>Backend:</h5>
                        <div className='home__sectTwoTechnologiesBackend'>
                            <p>NodeJs</p>
                            <p>ExpressJs</p>
                            <p>PostgresSQL</p>
                            <p>JSON</p>
                            <p>JWT Token</p>
                            <p>Sequelize</p>
                        </div>
                        <h5 className='home__sectTwoTechnologiesToolsh5'>Tools:</h5>
                        <div className='home__sectTwoTechnologiesTools'>
                            <p>ADOBE XD</p>
                            <p>Git</p>
                            <p>npm</p>
                            <p>ADOBE Photoshop</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
