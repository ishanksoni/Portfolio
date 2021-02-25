import React from 'react'
import './Projects.css'

function Projects() {
    return (
        <div className="Project-container">
            <div className = "Project-card">
                <a>Chatter</a>
                <p>Create a room and start chatting with friends.This is Web Based chatting application using websocket Asynchronous connection.
                    Simple UI in <b>React.js</b>    and backend in <b>Django</b> using channels <br/> 
                    <a href= "http://chatter-now.netlify.app/" target="_blank"> Live here</a>
                </p>
            </div>
            <div className = "Project-card">
                <a>Clinic management system</a>
                <p>If you are manager at Clinic, This Website gonna make you work very easy by Creating and maintaing records 
                 of Staffs, Patients, Reports, Bills etc.Build with Django, mysql and efficient database system.<br/> 
                    <a href= "https://github.com/ishanksoni/Hospital_management_DBMS" target="_blank"> Details here</a> 
                    <a href= "https://vaishshnavclinics.herokuapp.com" target="_blank"> Live here</a>
                </p>
            </div>
            <div className = "Project-card">
                <a>iAttend</a>
                <p>A tool for maintaing attendace in schools.<br/> 
                </p>
            </div>
            <div className = "Project-card">
                <a>Competitive Programming</a>
                <p> Solved 800+ problems on data-structure, algorithms and maths on various platform<br/> 
                    <a href= "https://codeforces.com/profile/sherlock8696" target="_blank"> Codeforces Profile</a> 
                    <a href= "https://www.codechef.com/users/sherlock8696" target="_blank"> Codechef Profile</a>
                </p>
            </div>
    
        </div>
    )
}

export default Projects
