import React from 'react'

export default function Roadmapelement({ phase, description }) {
  return (
    <div style={{  
        backgroundColor: 'rgb(41, 41, 41)'
    }} className='w-[100%] flex flex-col p-6 justify-center items-center min-h-[15vh] rounded-br-3xl max-w-[500px]'>
        <h1 className='text-white text-left w-full font-bold text-2xl underline'>&#9679; { phase }</h1>
        <p className='text-white leading-7 w-full text-left'>
            {description}
        </p>
    </div>
  )
}
