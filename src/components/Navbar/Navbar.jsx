import React, { useContext } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

const Navbar = ({ isActive }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <nav className={isActive ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='navbar__top'>
          <img
            className='navbar__logo'
            src='https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/dmrs1c2n.ctw.jpg'
            alt=''
          />
          <h1 className='navbar__title'>IT Academy Teachers</h1>
        </div>

        <div className='navbar__menu'>
          <Link
            style={{
              color: !darkMode ? '#222' : 'white',
            }}
            className='navbar__item'
            to={'/mentor/abbos-valiev'}
          >
            <img
              className='navbar__icon'
              src='https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/p33orllx.uyn-150x150.jpg'
              alt='Abbos Valiev'
            />
            <p className='navbar__name'>Abbos Valiev</p>
          </Link>
          <Link
            style={{
              color: !darkMode ? '#222' : 'white',
            }}
            className='navbar__item'
            to={'/mentor/dovud-khadjaev'}
          >
            <img
              className='navbar__icon'
              src='https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/vzkx31u4.bmh-150x150.jpg'
              alt='Dovud Khadjaev'
            />
            <p className='navbar__name'>Dovud Khadjaev</p>
          </Link>
          <Link
            style={{
              color: !darkMode ? '#222' : 'white',
            }}
            className='navbar__item'
            to={'/mentor/bobur-khatamov'}
          >
            <img
              className='navbar__icon'
              src='https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/mfotl20w.jhg-150x150.jpg'
              alt='Bobur Khatamov'
            />
            <p className='navbar__name'>Bobur Khatamov</p>
          </Link>
          <Link
            style={{
              color: !darkMode ? '#222' : 'white',
            }}
            className='navbar__item'
            to={'/mentor/javokhir-fayzullaev'}
          >
            <img
              className='navbar__icon'
              src='https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/xa53ptad.5xd-150x150.jpg'
              alt='Fayzullaev Javokhir'
            />
            <p className='navbar__name'>Fayzullaev Javokhir</p>
          </Link>
          <Link
            style={{
              color: !darkMode ? '#222' : 'white',
            }}
            className='navbar__item'
            to={'/mentor/nikita-naumov'}
          >
            <img
              className='navbar__icon'
              src='https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/t3wiwl0c.xpq-100x100.jpg'
              alt='Naumov Nikita'
            />
            <p className='navbar__name'>Naumov Nikita</p>
          </Link>
          <Link
            style={{
              color: !darkMode ? '#222' : 'white',
            }}
            className='navbar__item'
            to={'/mentor/hayotbek-axmadjonov'}
          >
            <img
              className='navbar__icon'
              src='https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/eobqn5hh.e0w-100x100.jpg'
              alt='Axmadjonov Hayotbek'
            />
            <p className='navbar__name'>Axmadjonov Hayotbek</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
