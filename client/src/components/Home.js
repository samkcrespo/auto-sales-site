import React from 'react'
import { useNavigate } from 'react-router-dom';
import jdmLogo from '../images/JdmLogoWhite.png';
import Slideshow from './Slideshow';
import transparentcars from "../images/transparentcars.png";
import japaneseretailers from "../images/jcologos.png";

function Home() {

  const navigate = useNavigate(); // Use useNavigate

  const goToProductsPage = () => {
    navigate('/products'); // Navigate to /products page
  };
  return (
    <div>
      <div className="home-header">
        <h2 className="transparent-text" id="archivo" >Your Home for Genuine Japanese Cars</h2>
        <img src={japaneseretailers} alt="Japanese Auto Retailers"/>
        <img src={transparentcars} alt="JDM Import House Garage" style={{ width: '100%', height: '90%', position: 'absolute', top: 0, left: 0, zIndex: -1  }} />
      </div>

      
      
      {/* Brief Introduction */}
      <div className="transparent-text" id="archivo" style={{ marginTop: '50px' }}>
        <p>From the heart of Japan to your driveway, we bring you the finest selection of top-quality, meticulously curated Japanese vehicles.</p>
          <p>At JDM Import House, we share your passion for precision, performance, and the unique appeal that Japanese cars offer.</p> 
          <p>Continue your journey into the world of Japanese automobiles with us.</p>
      </div>
      
      
      <div className="cta" id="archivo"  style={{ marginTop: '20px' }}>
        {/* <button 
          onClick={goToProductsPage} 
          style={{ 
            background: 'linear-gradient(to right, #c92222, #333030)', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            padding: '10px 20px', 
            fontSize: '16px', 
            cursor: 'pointer'
          }}>
          Explore our Inventory
        </button> */}
      </div>
      
    </div>
  )
}

export default Home
