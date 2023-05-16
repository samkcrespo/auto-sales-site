import React from 'react'
import jdmLogo from '../images/JdmLogoWhite.png';
import Slideshow from './Slideshow';
import transparentcars from "../images/transparentcars.png";

function Home() {
  return (
    <div>
    <div>
      <img src={transparentcars} alt="JDM Import House Garage" style={{ width: '100%' }}  />
      </div>
    <Slideshow />
    </div>

    
  )
}

export default Home