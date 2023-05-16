import React from 'react'
import jdmLogo from '../images/JdmLogoWhite.png';
import Slideshow from './Slideshow';
import transparentcars from "../images/transparentcars.png";


function Home() {
  return (
    <div>
    <img src={transparentcars} alt="JDM Import House Garage"/>
    <Slideshow />
    </div>
  )
}

export default Home