import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/gustavo-contreras-martinez-a8202b1ba/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/GustavoCM777" target="_blank"><BsGithub/></a>
            <a href="https://facebook.com" target="_blank"></a>
        </div>
    )
}

export default HeaderSocial