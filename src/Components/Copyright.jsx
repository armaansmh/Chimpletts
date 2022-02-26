import React from 'react'
import Logo from "../Assets/main-logo.png"

export default function Copyright() {
  return (
    <div style={{
        backgroundColor: '#001A44',
    }} className='h-[40vh] border-t border-white w-full text-white text-xl flex items-center justify-center gap-3'>
        <h1>
            &copy; Copyright: 
        </h1>
        <img src={Logo} className="w-[200px]" alt="" />
    </div>
  )
}
