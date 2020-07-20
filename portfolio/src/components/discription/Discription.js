import React from 'react'
import './Discription.css';
import Bio from '../bio/Bio';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';

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
                        Projects: <Projects  />
                    }[section]
                } 
            </div>
        </div>
    )
}

export default Discription
