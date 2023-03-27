import React from 'react'
import jdmLogo from '../images/jdmLogo.png';
import Slideshow from './Slideshow';


function Home() {
  return (
    <div><img src={jdmLogo} alt="JDM Import House Logo"/>
    <Slideshow />
    </div>
  )
}

export default Home