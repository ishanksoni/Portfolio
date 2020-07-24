import React from 'react'
import './Particles.css'

function createPart(){
    var newp =  document.createElement("p")
    newp.style.left = 10 +"px";
    newp.style.top = 10 + "px"; 
}
function Particles() {

    return (
        <div>
            <div id= "particles"></div>
        </div>
    )
}

export default Particles
