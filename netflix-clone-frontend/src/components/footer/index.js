import React from 'react'
import notflix from "../../resources/images/notflix.png"


import './index.scss'
const Footer = () => {
  return (
    <div className='container footerContainer'>
      <div className='row'>
        <div className='col-12 col-md-4 footerlogoContainer'>
          <img src={notflix} alt='notFlixLogo'/>
        </div>
        <div className='col-12 col-md-8 contentFooterBox'>
          <ul>
            <li>
            👨‍💻 Developed using the M.E.R.N satck by me, Syed Moin Ahmed.
            </li>
            <li>
            🎥 Explore more of my projects or get in touch through my portfolio: <a target='_blank' rel="noreferrer" href='https://syedmoinahmed.dev/'>Here</a>. Have questions or just want to chat about your favorite movies? Feel free to reach out – I'm all ears (not literally)!
            </li>
            <li>
            📝 The source code for this entire project is available at Repository : <a target='_blank' rel="noreferrer" href='https://github.com/iamsyed21/Netflix-Clone-Frontend'>Frontend</a> | <a target='_blank' rel="noreferrer" href='https://github.com/iamsyed21/Netflix-Clone-Backend'>Backend</a> 
            </li>
            <li>
            🎛️ All the content of this website is uploaded, managed and track from the <b>Notflix Management Portal with analytics</b>: <a target='_blank' rel="noreferrer" href='https://FlexiDashPortal.syedmoinahmed.dev' >Here</a> | Source code: <a target='_blank' rel="noreferrer" href='https://github.com/iamsyed21/FlexiDash-VersatileAdminDashboard'>Here</a> 
            </li>
          </ul>

          <div className='footerDisclaimer'>
          🚀 Disclaimer: This website is as commercial as a cardboard spaceship – just a fun portfolio project, not for intergalactic streaming purposes! 🌌 🎬 All content is for demonstration and entertainment purposes only.
          <br/>
          © [2023] [syedmoinahmed.dev]. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer