
import React from 'react'
import FooterDisabled from './FooterDisabled'
import HeroApply from './HeroApply'
import './Apply.css'
import RowAndColumnSpacing from './ListFormGrid'
import JobsList from './joblist'
import NavbarDisabled from './NavbarDisabled'
const Apply = () => {
    return (
        <div className='Apply' id='Apply'>
            <div className='container'>
                <NavbarDisabled />
                <HeroApply/>
                <JobsList/>
                <FooterDisabled />
            </div>
        </div>
    )
}

export default Apply

