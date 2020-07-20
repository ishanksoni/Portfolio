import React from 'react'
import './Nav.css'

function Nav({
    handelOnClick
}) {
    return (
        <div className = "Nav">
            <a className = "Nav-items" onClick = {() =>handelOnClick("Bio")}>About-me </a>
            <a className = "Nav-items" onClick = {() =>handelOnClick("Skills")}> Skills </a>
            <a className = "Nav-items" onClick = {() =>handelOnClick("Projects")}> Projects </a>
        </div>
    )
}

export default Nav
