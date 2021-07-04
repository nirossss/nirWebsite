import React, { useState } from 'react'
import "./Navigation.css"
import { CgMenu } from "react-icons/cg";
import { TiHome } from "react-icons/ti";
import { GrProductHunt } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";

const Navigation = (props) => {
    const [isNav, setIsNav] = useState(false)

    return (
        <div className="nav-component">
            {isNav || <div className="nav-item">
                <div className="nav-item-manu" onClick={() => setIsNav(!isNav)}><CgMenu size='2rem' /></div>
            </div>}
            {isNav && <>
                <div title="About Me" className="nav-item">
                    <a href='#home' onClick={() => setIsNav(!isNav)}><TiHome size="1.5rem" /></a>
                </div>
                <div title="My Projects" className="nav-item">
                    <a href='#projects' onClick={() => setIsNav(!isNav)}><GrProductHunt size="1.5rem" /></a>
                </div>
                <div title="Contact Me" className="nav-item">
                    <a href='#contact' onClick={() => setIsNav(!isNav)}><MdContactMail size="1.5rem" /></a>
                </div>
            </>}
        </div>
    )
}

export default Navigation