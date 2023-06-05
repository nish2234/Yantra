import React from 'react'
import logo from './logo.png'
import ADGlogo from './ADG_Logo.png'
import ieee from './IEEE.png'
function LandingPage() {
  return (
    <>
    <div className="land">
     
        <div className="logo">
         
         <div className="x1">
         <img src={ADGlogo} alt=""/>
         </div>
         <div className="x2">
                 <p>X</p>
         </div>
         <div className="x3">
         <img src={ieee} alt="" />
         </div>
        </div>
        <div className="dev">
            <img src={logo} alt="" />
        </div>
     </div>
    
    </>
  )
}

export default LandingPage
