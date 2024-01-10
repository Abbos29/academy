import React from 'react';
import { useState } from 'react';
import '../App.scss';
import '../Reset.css';

import Area from '../components/Area/Area';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

const Abbos = () => {
  const [isActive, setActive] = useState(false);

  const toggleClick = () => {
    setActive(!isActive);
  };

  const lessons = [
    {
      // monday
      L9_30__11_30: true,
      L11_30__19__00: false,
    },
    {
      //tuesday
      L9_30__11_30: true,
      L11_30__15__00: false,
      L15_00__17_00: true,
    },
    // wednesday
    {
      L9_00__19_00: false,
    },
    // thursday
    {
      L9_30__11_30: true,
      L11_30__19__00: false,
    },
    {
      //friday
      L9_30__11_30: true,
      L11_30__15__00: false,
      L15_00__17_00: true,
    },

    // saturday
    {
      L9_00__19_00: false,
    },
    // sunday
    {
      L10_00__14_00: true,
      L14_00__19_00: false,
    },
  ];

  return (
    <>
      <main className='main'>
        <Header toggleClick={toggleClick} isActive={isActive} />

        <div className={isActive ? 'main__wrap active' : 'main__wrap'}>
          <Area lessons={lessons} />

          <Navbar isActive={isActive} />
        </div>
      </main>
    </>
  );
};

export default Abbos;
