import React from 'react'
import './skills.css'

function Skills() {
    return (
        <div className = "skill-container">
            <p><a> I wirte Code in</a></p>
            <img className ="skills-icon" src="https://img.icons8.com/color/144/000000/c-plus-plus-logo.png" alt="C++"/>
            <img className ="skills-icon" src="https://img.icons8.com/color/144/000000/python.png" alt="PYTHON 3"/>
            <br/>
            <p> <a>Do backend on </a></p>
            <img className ="skills-icon" src="https://img.icons8.com/color/144/000000/django.png" alt="django"/>

            <br/>
            <p> <a>For frontend ---</a></p>
            <img className ="skills-icon" src="https://img.icons8.com/color/144/000000/javascript.png" alt="javascript"/>
            <img className ="skills-icon" src="https://img.icons8.com/color/144/000000/react-native.png" alt="react"/>
        </div>
    )
}

export default Skills
