import React from 'react'
import "./Home.css"
import skills from '../dataFiles/skills'
import { FiSmile, FiPhone } from "react-icons/fi";
import { GrPerformance } from "react-icons/gr";
import { GoMail } from "react-icons/go";

const Home = (props) => {

    const renderSkills = () => {
        return skills.map(item => {
            return (
                <span className='skill-span' key={item.skill + 'key'}>
                    {item.skill}
                </span>
            )
        })
    }

    return (
        <section id='home'>
            <h2>Full-Stack Web developer</h2>
            <div className="container">
                <div className="wrapper img-map">
                    <div >
                        <div className="img-container">
                            <img src='./photos/profile.jpg' alt=""></img>
                        </div>
                        <div id="canvasfor-googlemap" >
                            <p title='Phone Number'>
                                <FiPhone size='1.5rem' />  0507907142
                            </p>
                            <p>
                                <a href="https://drive.google.com/drive/folders/1IJscUWwkVGLwK448FvkjwIKdv-4ryPQ-?usp=sharing">Resume</a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com/in/nir-elenhoren">Linkedin profile</a>
                            </p>
                            <p>
                                <a href="https://github.com/nirossss">GitHub</a>
                            </p>
                            <p title='E-mail' className="home-email">
                                <GoMail size='1.5rem' /> nirelen4@gmail.com
                            </p>
                            <iframe title="google-maps my adresss" src="https://www.google.com/maps/embed/v1/place?q=תל+אביב+צפון+ישן&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <p>
                        Hi, Im Nir <FiSmile size='1.5rem' />
                    </p>
                    <p>
                        Enthusiastic Full Stack Developer eager to contribute to team success through hard work, attention to details and excellent organizational skills.<br />
                        A clear understanding of front-end, back-end, Database management, and High-quality UI/UX construction.<br />
                        Motivated to learn, grow, and excel in the software development industry.
                    </p>
                    <p>
                        <GrPerformance size='1.5rem' /> Skills:<br />
                        {renderSkills()}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home