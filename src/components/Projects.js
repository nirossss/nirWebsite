import React, { useState } from 'react'
import "./Projects.css"
import projectsData from '../dataFiles/projectsData'
import { FaGithub } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";
import { FiMinimize2 } from "react-icons/fi";

const Projects = (props) => {
    const [isInfo, setIsInfo] = useState([false, false, false])

    const renderProjects = () => {
        return projectsData.map((item, i) => {
            return (
                <div className="wrapper project-wrapper" key={item.image}>
                    <h5>{item.title}</h5>
                    <img src={item.image} alt=""></img><br />
                    <a href={item.url} title={item.url} className="github-link"><FaGithub size="2rem" /></a>
                    <div onClick={() => infoController(i)} className="info-container">
                        {isInfo[i] || <GiInfo size="2rem" />}
                        {isInfo[i] &&
                            <p><FiMinimize2 /> <br /> {item.description}</p>
                        }
                    </div>
                </div>
            )
        })
    }

    const infoController = (i) => {
        const isInfoCopy = [...isInfo]
        let infoStatus = isInfoCopy[i]
        isInfoCopy[i] = !infoStatus
        setIsInfo(isInfoCopy)
    }

    return (
        <section id="projects">
            <h4>My Projects</h4>
            <div className="container">
                {renderProjects()}
            </div>
        </section>
    )
}

export default Projects