import React from 'react'
import { Link as NavLink } from 'react-router-dom'
export default function CallToAction(props) {
    let contenido = props.contenido
    let rute = props.rute
    console.log(rute);
    return (
        <NavLink className='botones' to={rute}>
    {contenido}
    </NavLink>
  )
}
