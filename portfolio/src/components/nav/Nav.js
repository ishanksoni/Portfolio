import React from 'react'
import './Nav.css'

function Nav({
    handelOnClick
}) {
    return (
        <nav>
            <a className = "Nav-items" onClick = {() =>handelOnClick("Bio")}>About-me </a>
            <a className = "Nav-items" onClick = {() =>handelOnClick("Skills")}> Skills </a>
            <a className = "Nav-items" onClick = {() =>handelOnClick("Projects")}> Projects </a>
            <a className = "Nav-items" onClick = {() =>handelOnClick("Connect")}> Connect </a>
        </nav>
    )
}

export default Nav
