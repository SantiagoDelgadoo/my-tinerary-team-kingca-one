import React from 'react'
import CardDetailsHotel from '../components/CardDetailsHotel'
import CardDetailsEvents from '../components/CardDetailsEvents'

import '../App.css'
export default function DetailsHotel() {

  return (<>
     <div className='containerCardDetails'>
        <CardDetailsHotel/>
    </div>
    <div className='containerCardDetailsEvents'>
        <CardDetailsEvents/>
    </div>
    </>
 
  )
}
