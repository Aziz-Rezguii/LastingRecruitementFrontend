
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroApply from './HeroApply'
import './MoreInfo.css'
import JobInformation from './JobInformation'
import JobsList from './joblist'
const MoreInfo = (props) => {
    return (
        <div className='MoreInfo' id='MoreInfo'>
            <div className='container'>
                <Navbar />
                <JobInformation/>
                <Footer />
            </div>

        </div>
    )
}

export default MoreInfo

