import React from 'react'
import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import hero from "../assets/hero.jpeg"

const Hero = () => {
  return (
    <section className="relative h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <video src={video} className="h-full w-full object-cover" muted autoPlay loop playsInline poster={hero}></video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from tranparent from 70% to-black"></div>
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <img src={logo} alt="restura" className="w-full p-4"/>
        </div>

    </section>
  )
}

export default Hero