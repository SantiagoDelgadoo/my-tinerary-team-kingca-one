import React from 'react'

export default function Arrow(props) {
   let {action}=props
   let {onClick}=props
  return (
    <div className='arrowNex' onClick={onClick}> {action}</div>
  )
}
