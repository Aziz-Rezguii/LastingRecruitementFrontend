
import React from 'react'
import NavbarDisabled from './NavbarDisabled'
import FooterDisabled from './FooterDisabled'
import './Register.css'
import RegisterForm from './RegisterForm'

const Register = () => {
    return (
        <div className='Register' id='Register'>
            <div className='container'>
                <NavbarDisabled />
                <RegisterForm/>
                <FooterDisabled />
            </div>
        </div>
    )
}

export default Register

