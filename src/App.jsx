import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Abbos from './pages/Abbos'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/abbos' element={<Abbos/>} />

    </Routes>
  )
}

export default App