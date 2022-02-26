import React from 'react'
import Logo from "../Assets/main-logo.png"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <div className='flex navbar flex-col z-10 lg:flex-row  pt-8 gap-4 items-center justify-center  h-[80vh] w-full px-9 py-3'>
        <img src={Logo} className="w-[40%] max-w-[250px]" alt="" />
    </div>
  )
}


// background: hsla(217, 100%, 7%, 1);

// background: linear-gradient(180deg, hsla(217, 100%, 7%, 1) 0%, hsla(217, 100%, 13%, 1) 100%);

// background: -moz-linear-gradient(180deg, hsla(217, 100%, 7%, 1) 0%, hsla(217, 100%, 13%, 1) 100%);

// background: -webkit-linear-gradient(180deg, hsla(217, 100%, 7%, 1) 0%, hsla(217, 100%, 13%, 1) 100%);

// filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#000E25", endColorstr="#001A44", GradientType=1 );