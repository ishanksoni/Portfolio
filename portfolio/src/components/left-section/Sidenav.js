import React from 'react'
import './Sidenav.css'

function Sidenav() {
    return (
        <div className = "SideNav">
            <img src ="https://scontent.fjai3-1.fna.fbcdn.net/v/t1.0-9/62596835_328776804682961_6508901630031691776_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=bSHm5d-K-qUAX-S6g_J&_nc_ht=scontent.fjai3-1.fna&oh=73eb8746e61626fd556cbedc6566b8fe&oe=5F412257" className ="Profile-pic" />
            <a className="Username">@sherlock8696</a>
            <div className="brief"> <br/> Compititive-Programmer <br/>Full-stack Engineer <br/> Tech-Enthusiast </div> 
        </div>
    )
}

export default Sidenav
