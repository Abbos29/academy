import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Abbos from './pages/Abbos';
import Error from './pages/Error';
import Dovud from './pages/Dovud';
import Bobur from './pages/Bobur';
import Nikita from './pages/Nikita';
import Javokhir from './pages/Javokhir';
import Hayot from './pages/Hayot';
import { ThemeContext } from './ThemeContext';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className='body-main'
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mentor/abbos-valiev' element={<Abbos />} />
        <Route path='/mentor/dovud-khadjaev' element={<Dovud />} />
        <Route path='/mentor/bobur-khatamov' element={<Bobur />} />
        <Route path='/mentor/nikita-naumov' element={<Nikita />} />
        <Route path='/mentor/javokhir-fayzullaev' element={<Javokhir />} />
        <Route path='/mentor/hayotbek-axmadjonov' element={<Hayot />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
