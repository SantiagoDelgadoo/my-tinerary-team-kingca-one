import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../App.css'

export default function Footer() {
  let yearNow = new Date().getFullYear();
  return (
    <footer>
    <div className='Footer'>
      <div className='FooterGit'>
        <a  href='https://github.com/HernanC95' target='blank'><span>Cavalieri Hernan</span></a>
        <a  href='https://github.com/SantiagoDelgadoo' target='blank'><span>Santiago Delgado</span></a>
      </div>

        <nav className='Footer-nav'>
          <LinkRouter to='/home' className='Footer-link'> Home </LinkRouter>
          <LinkRouter to='/cities' className='Footer-link'> Cities </LinkRouter>
        </nav>
        <p>© Copyright MyTinerary</p>
        <p>{yearNow}</p>
    </div>
  </footer>
  )
}
