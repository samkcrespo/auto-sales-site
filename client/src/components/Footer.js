import React from 'react'
import { BiEnvelope } from "react-icons/bi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
   <div>
        <h3>JDM Import House</h3>
     <h4>Copyright © {year}</h3>
  
  </div>
  )
}

export default Footer