import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';


const Logo = () => {
    return(
        <div className="ma0 mt0 pa3">
           <Tilt className="Tilt br-2 shadow-2" options={{ max : 25 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner pa3"> 
                    <img src={brain} alt="Smart Brain imag"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;