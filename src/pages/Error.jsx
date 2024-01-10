import React from 'react';
import error from '/public/error.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Link to='/'>
      <img className='error-img' src={error} alt='' />
    </Link>
  );
};

export default Error;
