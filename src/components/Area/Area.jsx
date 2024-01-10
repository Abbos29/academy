import React from 'react';
import './Area.scss';

const Area = ({ lessons }) => {

  return (
    <section className='hero area'>
      <div className='container'>
        <div className='hero__wrapper area__wrapper'>
          {lessons.map((lesson, index) => {
            const isLessonBusy = Object.values(lesson).some(
              (value) => value === true
            );
            const areaClass = `area__item area-${index + 1}${
              isLessonBusy ? ' busy' : ''
            }`;
            return (
              <div className={areaClass} key={index}>
                Area {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Area;
