import React from 'react'
import AdrianCollage from '../images/adrian_collage.png';

function About() {
  return (
    <div style={{ padding: '2em', lineHeight: '1.6' }}>
      <div style={{ textAlign: 'center', marginBottom: '2em' }}>
        <h3 className="about-header" id="archivo"  style={{ color: '#ddd', marginBottom: '0.5em' }}>
          In memory of <strong className="red-font">Adrian Zambrana</strong>
        </h3>
        <h4 id="archivo" style={{ color: '#ddd' }}>03/31/1993 - 12/23/2022</h4>
      </div>
      <div className="about-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="about-paragraph" style={{ flex: '0.6', marginRight: '2em' }}>
          <p>
            JDM Import House was founded by Adrian Zambrana in 2020. Adrian had a passion for cars ever since he was a kid and was also a businessman at heart. Even as a kid, he was always figuring out creative ways to drum up some business.
          </p>
          <p>
            He started working on and selling cars when he was just a teenager, and throughout the years Adrian became immersed in the car scene and made connections all over the US and Japan. Once Adrian was later into his college years, he decided he wanted to take his passion for cars and business to the next level and open his own shop.
          </p>
          <p>
            He opened his shop in 2020, and in a short time, grew it to be a well-known and reputable company that has distributed hundreds of beautiful and rare JDM vehicles all over the United States. Adrian loved making it possible for people to have the car of their dreams.
          </p>
          <p>
            Adrian put 110% into everything that he did. When he passed he had just graduated with a bachelor's in business and was getting ready to go to France to get his master's in international business. He had grown JDM Import House rapidly and when he passed he had 13 cars in his inventory and more on the way from Japan.
          </p>
          <p>
            His family decided that they had to keep Adrian's dream business going in his memory and to keep serving the car community he loved. Adrian's parents, Claudia and Sergio, and his brother Renato (pictured to the right) have kept the business growing in his memory, along with the help of his cousin Andrew, who Adrian got into cars when they were kids (pictured on the right, working on one of Adrian's first cars ever), as well as friends that Adrian made in the car community that stepped up to help his family keep what Adrian built going.
          </p>
          <p>Today, JDM Import House is thriving and working with a number of reputable suppliers from Japan to keep putting people in their dream cars.</p>
        </div>
        <div className="about-images" style={{ flex: '0.4' }}>
          <img src={AdrianCollage} alt="Photo collage of Adrian Zambrana" style={{ width: '100%' }}/>
        </div>
      </div>
    </div>
  )
}

export default About
