import React from 'react'
export default function Carousel(props) {
    let {image}=props
  return (
<>
<img src={image} alt='sujeto' className='photoCarrusel'/>
</>
  )
}
