import React from 'react'
import './connect.css'
function Connect() {
    return (
        <div className = "connect-container">
            <ul>
            <li className="facebook"><a href="#"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
            <li className="instagram"><a href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
            <li className="whatsapp"><a href="#"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a></li>
            <li className="github"><a href="#"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
            <li className="twitter"><a href="#"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    )
}

export default Connect
