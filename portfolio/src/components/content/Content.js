import React from 'react'
import './Content.css'
import  Sidenav  from '../left-section/Sidenav';
import Discription from '../discription/Discription';
function Content() {
    return (
        <div className = "Content">
            <Sidenav/>
            <Discription
            Heading = "About"
            section = "Bio"
            />
        </div>
    )
}

export default Content;
