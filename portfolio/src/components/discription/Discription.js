import React from 'react'
import './Discription.css';
import Bio from '../bio/Bio';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Connect from '../connect/Connect';

function Discription(
    {
    section,
    }){
    return (
        <div className = "Discription">
            <div>
            {
                    {
                        Bio: <Bio />,
                        Skills: <Skills  />,
                        Projects: <Projects  />,
                        Connect : <Connect/>
                    }[section]
                } 
            </div>
        </div>
    )
}

export default Discription
