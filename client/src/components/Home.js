import React from 'react'
import jdmLogo from '../images/JdmLogoWhite.png';
import Slideshow from './Slideshow';
import transparentcars from "../images/transparentcars.png";

function Home() {
  return (
    <div>
    <div><h3>Your Home for Genuine Japanese Cars</h3>
   <img src={transparentcars} alt="JDM Import House Garage" style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1  }} />
      </div>
        {/* <div style={{ position: 'relative', zIndex: 4 }}>   
        <Slideshow />
        </div> */}
    </div>

    
  )
}

export default Home