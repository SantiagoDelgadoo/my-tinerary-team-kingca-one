import React from 'react'

export default function Arrow(props) {

   let {icon}=props
   let {onClick}=props

   return (
    <button 
    className='btn-carousel'  onClick={onClick}> {icon} 
    </button>
  )
}