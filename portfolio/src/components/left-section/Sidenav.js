import React from 'react'
import './Sidenav.css'
import github from "super-tiny-icons/images/svg/github.svg";
import twitter from "super-tiny-icons/images/svg/twitter.svg";
import gmail from "super-tiny-icons/images/svg/gmail.svg";



function Sidenav() {
    return (
        <div className = "SideNav">
            <img src ="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" className ="Profile-pic" />
            <a className="Username">@sherlock8696</a>
            <div className="brief"> <br/> Compititive-Programmer <br/>Full-stack Engineer <br/> Tech-Enthusiast </div> 
        </div>
    )
}

export default Sidenav
