import React from 'react'
import './Content.css'
import  Sidenav  from '../left-section/Sidenav';
import Discription from '../discription/Discription';
import Particles from '../particles/Particles';
function Content({
    section
}) 
    {
    return (
        <div className = "Content">
            <Particles/>
            <Sidenav/>
            <Discription
            Heading = "About"
            section = {section}
            />
        </div>
    )
}

export default Content;
