import React from 'react'
import './FooterDisabled.css'

const FooterDisabled = () => {
    return (
        <div className='FooterDisabled'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/#about'>About</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 Lasting recruitment, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default FooterDisabled
