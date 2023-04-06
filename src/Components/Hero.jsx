import React from 'react'
import MarqueeText from './Marquee'
const Hero = () => {
  return (
    <div className='container-fluid bg-black text-white d-flex justify-content-center align-items-center flex-column' style={{height: '55vh'}}>
        <h2 style={{fontSize:"50px",color:"orange"}}>Welcome To The News Portal</h2>
        <h4>THE WEBSITE BUILD WITH THE NEWS API</h4>
        <MarqueeText/>
        </div>
  
        
  )
}


export default Hero