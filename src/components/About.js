import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>We have assisted over four hundred applicants in their search for employment. Our work has mainly involved helping  vulnerable populations reach financial freedom. This includes all aspects of the employment process, resume writing, mock interviews, employer contacts, and, completing applications. For us this isn't just an income, this is service we love to provide and see people around us thrive and succeed. Now reaching out to assist employers.</p>
                    <p> Now let us help you spend more time increasing productivity and less finding and sceening job candidates lasting recruitment is not a name it is a promise once we find the perfect job for you that you will last in it till retirement let us help you find the perfect candidate.</p>
                </div>
            </div>
        </div>
    )
}

export default About
