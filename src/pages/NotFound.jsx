import React from 'react'
import CallToAction from '../components/CallToAction'
import '../App.css'

export default function NotFound() {
  return (
    <div className='ErrorContainer'>
    <h2>Page Not Found</h2>
    <CallToAction contenido='Home' rute='/home1'/>
</div>
  )
}
