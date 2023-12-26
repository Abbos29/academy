import React from 'react'
import { useState } from 'react'
import './Header.scss'




const Header = ({ toggleClick, isActive }) => {



    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="header__wrapper">
                        <h1>Header</h1>

                        <img className={isActive ? 'burger active' : 'burger'} src="./public/burger.svg" alt="icon" onClick={toggleClick} />
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header