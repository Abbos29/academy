import React from 'react'
import { useState } from 'react'
import '../App.scss'
import '../Reset.css'

import Area from '../components/Area/Area'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'

const Abbos = ({}) => {

  const [isActive, setActive] = useState(false)

  const toggleClick = () => {
      setActive(!isActive)
  }

  return (
    <>
      <main className='main'>
        <Header toggleClick={toggleClick} isActive={isActive}/>

        <div className={ isActive ? "main__wrap active" : "main__wrap"}>
          <Area />

          <Navbar isActive={isActive} />
        </div>
      </main>
    </>
  )
}

export default Abbos