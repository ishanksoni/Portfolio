import React from 'react'
import './Projects.css'

function Projects() {
    return (
        <div className="Project-container">
            <div className = "Project-card">
                <a>Clinic management system</a>
                <p>DBMS web-app project for clinics and small scale hospitals<br/> 
                    <a href= "https://github.com/ishanksoni/Hospital_management_DBMS" target="_blank"> Details here</a> 
                    <a href= "https://vaishshnavclinics.hreokuapp.com" target="_blank"> Live here</a>
                </p>
            </div>
            <div className = "Project-card">
                <a>iAttend</a>
                <p>Based on object oriented programming, iAttend is a attendece manager for teachers and students. <br/> 
                </p>
            </div>
            <div className = "Project-card">
                <a>Competitive Programming</a>
                <p> Solved 600+ problems on data-structure and algorithms on various platform<br/> 
                    <a href= "https://codeforces.com/sherlock8696" target="_blank"> Codeforces Profile</a> 
                    <a href= "https://codechef.com/sherlock8696" target="_blank"> Codechef Profile</a>
                </p>
            </div>
    
        </div>
    )
}

export default Projects
