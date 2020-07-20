import React from 'react'
import './Discription.css';
import Bio from '../bio/Bio';

function Discription({
    Heading,
    section,
    }){
    return (
        <div className = "Discription">
            <div className = "main-heading">{Heading}</div>
            <div>
                {
                    {
                        Bio: <Bio/>,
                    }[section]
                }
            </div>
        </div>
    )
}

export default Discription
