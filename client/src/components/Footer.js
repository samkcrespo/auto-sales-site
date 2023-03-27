import React from 'react'
import { BiEnvelope } from "react-icons/bi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
   <div>
        <h3>JDM Import House</h3>

        <h3>Copyright © {year}</h3>
 

          <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="mailto:samkcrespo@gmail.com"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiEnvelope />
            </a>
          </li>
        </ul>
  
  </div>
  )
}

export default Footer