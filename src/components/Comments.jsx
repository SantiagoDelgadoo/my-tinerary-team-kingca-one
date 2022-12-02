import React from 'react'

export default function Comments(props) {
    let {comment} = props
  return (
    <div className='comment2'>
        <div className='botonesEditar'><img src="https://cdn-icons-png.flaticon.com/128/860/860814.png" alt="editar" className='imgeditar'/>
        <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="eliminar" className='imgeditar'/></div>
    <p>Comment: {comment.comment} </p>   
   </div>
  )
}
