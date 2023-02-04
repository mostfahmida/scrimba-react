import React from 'react'
import img from '../MYPICTURE.jpg'
export  default  function Info  () {
  return (
    <div>
        <img src={img}className="image"></img>
        <h1>Mostfa hmida</h1>
        <h3>beginner developer</h3>
        
        <button className='button1'>Email</button>
        
        
        <button className='button2'>Linkedin</button>
        
        
    </div>
  )
}
