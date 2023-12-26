import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = ({ isActive }) => {
  return (
    <nav className={isActive ? "navbar active" : "navbar"}>
      <div className="container" >
        <div className="navbar__top">
     
          <img className="navbar__logo" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/dmrs1c2n.ctw.jpg" alt="" />
          <h1 className='navbar__title'>- IT Academy Teachers</h1>
        </div>

        <div className="navbar__menu">

          <Link className='navbar__item' to={'/abbos'}>
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg" alt="" />
            <p className="navbar__name">Abbos Valiev</p>

          </Link>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/vzkx31u4.bmh-150x150.jpg" alt="" />
            <p className="navbar__name">Dovud Khadjaev</p>
          </div>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/mfotl20w.jhg-150x150.jpg" alt="" />
            <p className="navbar__name">Bobur Khatamov</p>
          </div>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg" alt="" />
            <p className="navbar__name">Abbos Valiev</p>
          </div>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg" alt="" />
            <p className="navbar__name">Abbos Valiev</p>
          </div>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg" alt="" />
            <p className="navbar__name">Abbos Valiev</p>
          </div>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg" alt="" />
            <p className="navbar__name">Abbos Valiev</p>
          </div>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg" alt="" />
            <p className="navbar__name">Abbos Valiev</p>
          </div>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg" alt="" />
            <p className="navbar__name">Abbos Valiev</p>
          </div>

          <div className="navbar__item">
            <img className="navbar__icon" src="https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg" alt="" />
            <p className="navbar__name">Abbos Valiev</p>
          </div>
        </div>
      </div >
    </nav >
  )
}

export default Navbar