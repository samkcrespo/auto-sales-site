import React from 'react'
import { BiEnvelope } from "react-icons/bi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
  <div className="footer">
    <p> JDM Import House | Copyright © {year}</p>
  </div>
  )
}

export default Footer