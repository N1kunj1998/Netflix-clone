import React from 'react'
import { Link } from 'react-router-dom'
import LogoTunflix from "../../assets/images/logo.png";

const Logo = (props) => {
  return (
    <Link to='/browse'>
        <img alt='Logo' src={LogoTunflix} {...props}/>
    </Link>
  )
}

export default Logo