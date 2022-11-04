import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Home1 from '../pages/Home1'

export default function Main(props) {
  return (
    <>
    <NavBar></NavBar>
    <div>
    {props.children}
    </div>
    <Footer></Footer>
    </>
  )
}
