import React from 'react'
import './Hero.css'
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className='hero'>
            <div className='content'>
                <p>Call us</p>
                <p>X-XXX-XXX-XXX</p>
                <p>Exceptional opportunities</p>
                <p>We Provide Service For All Your Staffing Needs</p>
                <button  className='button'onClick={() => navigate("/Apply") } >FIND WORK</button>
            </div>
        </div>
    )
}

export default Hero
