import React from 'react'
import jdmLogo from '../images/JdmLogoWhite.png';
import Slideshow from './Slideshow';
import transparentcars from "../images/transparentcars.png";
import japaneseretailers from "../images/jcologos.png";

function Home() {
  return (
    <div >
    <div class="home-header"><h3 class="transparent-text">Your Home for Genuine Japanese Cars</h3>
    <div><img src ={japaneseretailers} alt="Japanese Auto Retailers"/></div>
    <div></div>
   <img src={transparentcars} alt="JDM Import House Garage" style={{ width: '100%', height: '90%', position: 'absolute', top: 0, left: 0, zIndex: -1  }} />
      </div>
        {/* <div style={{ position: 'relative', zIndex: 4 }}>   
        <Slideshow />
        </div> */}
    </div>

    
  )
}

export default Home