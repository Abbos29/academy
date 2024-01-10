import { useState } from 'react';
import '../App.scss';
import '../Reset.css';

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import { co_working, inside, limuzin, outside, sauna, staff } from '../lessons';
import empty from '/empty.png';

function Home() {
  const [isActive, setActive] = useState(false);
  const [room, setRoom] = useState(0);

  const toggleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <main className='main'>
        <Header toggleClick={toggleClick} isActive={isActive} />

        <div className={isActive ? 'main__wrap active' : 'main__wrap'}>
          <section className='sidebar hero '>
            <div className='container'>
              <div className='sidebar__wrapper'>
                <span className='refresh_filter'>
                  {room === 0 ? (
                    <h1>Table of contents</h1>
                  ) : room === 1 ? (
                    <h1>Limuzin</h1>
                  ) : room === 2 ? (
                    <h1>Sauna</h1>
                  ) : room === 3 ? (
                    <h1>Co-working</h1>
                  ) : room === 4 ? (
                    <h1>Outside</h1>
                  ) : room === 5 ? (
                    <h1>Inside</h1>
                  ) : room === 6 ? (
                    <h1>Staff</h1>
                  ) : null}
                  <svg
                    onClick={() => setRoom(0)}
                    xmlns='http://www.w3.org/2000/svg'
                    width='26'
                    height='26'
                    fill='currentColor'
                    className='bi bi-arrow-clockwise'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z'
                    />
                    <path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466' />
                  </svg>
                </span>
                {room === 1 ? (
                  limuzin?.map((el) => {
                    return (
                      <div className='sidebar__item' key={el?.id}>
                        {el?.lessons.length ? (
                          <>
                            <b>{el?.day}</b>
                            {el?.lessons?.map((les) => (
                              <p key={les?.id}>{les?.time}</p>
                            ))}
                          </>
                        ) : (
                          <h1
                            style={{
                              marginTop: '100px',
                              textAlign: 'center',
                            }}
                          >
                            Nothing yet!
                          </h1>
                        )}
                      </div>
                    );
                  })
                ) : room === 2 ? (
                  sauna?.map((el) => {
                    return (
                      <div className='sidebar__item' key={el?.id}>
                        {el?.lessons.length ? (
                          <>
                            <b>{el?.day}</b>
                            {el?.lessons?.map((les) => (
                              <p key={les?.id}>{les?.time}</p>
                            ))}
                          </>
                        ) : (
                          <h1
                            style={{
                              marginTop: '100px',
                              textAlign: 'center',
                            }}
                          >
                            Nothing yet!
                          </h1>
                        )}
                      </div>
                    );
                  })
                ) : room === 3 ? (
                  co_working?.map((el) => {
                    return (
                      <div className='sidebar__item' key={el?.id}>
                        {el?.lessons.length ? (
                          <>
                            <b>{el?.day}</b>
                            {el?.lessons?.map((les) => (
                              <p key={les?.id}>{les?.time}</p>
                            ))}
                          </>
                        ) : (
                          <h1
                            style={{
                              marginTop: '100px',
                              textAlign: 'center',
                            }}
                          >
                            Nothing yet!
                          </h1>
                        )}
                      </div>
                    );
                  })
                ) : room === 4 ? (
                  outside?.map((el) => {
                    return (
                      <div className='sidebar__item' key={el?.id}>
                        {el?.lessons.length ? (
                          <>
                            <b>{el?.day}</b>
                            {el?.lessons?.map((les) => (
                              <p key={les?.id}>{les?.time}</p>
                            ))}
                          </>
                        ) : (
                          <h1
                            style={{
                              marginTop: '100px',
                              textAlign: 'center',
                            }}
                          >
                            Nothing yet!
                          </h1>
                        )}
                      </div>
                    );
                  })
                ) : room === 5 ? (
                  inside?.map((el) => {
                    return (
                      <div className='sidebar__item' key={el?.id}>
                        {el?.lessons.length ? (
                          <>
                            <b>{el?.day}</b>
                            {el?.lessons?.map((les) => (
                              <p key={les?.id}>{les?.time}</p>
                            ))}
                          </>
                        ) : (
                          <h1
                            style={{
                              marginTop: '100px',
                              textAlign: 'center',
                            }}
                          >
                            Nothing yet!
                          </h1>
                        )}
                      </div>
                    );
                  })
                ) : room === 6 ? (
                  staff?.map((el) => {
                    return (
                      <div className='sidebar__item' key={el?.id}>
                        {el?.lessons.length ? (
                          <>
                            <b>{el?.day}</b>
                            {el?.lessons?.map((les) => (
                              <p key={les?.id}>{les?.time}</p>
                            ))}
                          </>
                        ) : (
                          <h1
                            style={{
                              marginTop: '100px',
                              textAlign: 'center',
                            }}
                          >
                            Nothing yet!
                          </h1>
                        )}
                      </div>
                    );
                  })
                ) : room === 0 ? (
                  <div className='empty_card'>
                    <img
                      className='sidebar__empty_img'
                      src={empty}
                      alt='Empty'
                    />
                    <h1>Choose the room!</h1>
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          <section className='hero area main-area'>
            <div className='container'>
              <div className='hero__wrapper area__wrapper'>
                <div className='area__item area-1' onClick={() => setRoom(1)}>
                  1. Limuzin
                </div>
                <div className='area__item area-2' onClick={() => setRoom(2)}>
                  2. Sauna
                </div>
                <div className='area__item area-3' onClick={() => setRoom(3)}>
                  3. Co-working
                </div>
                <div className='area__item area-5' onClick={() => setRoom(4)}>
                  4. Outside
                </div>
                <div className='area__item area-4' onClick={() => setRoom(5)}>
                  5. Inside
                </div>
                <div className='area__item area-6' onClick={() => setRoom(6)}>
                  6. Staff
                </div>
              </div>
            </div>
          </section>

          <Navbar isActive={isActive} />
        </div>
      </main>
    </>
  );
}

export default Home;
