import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className='Header'>
      <button className='Header-logo' onClick={() => navigate('/')}>
        moview
      </button>
      <button className='Header-menu-home' onClick={() => navigate('/')}>
        home
      </button>
      <button className='Header-menu-movie' onClick={() => navigate('/movie')}>
        movie
      </button>
      <button className='Header-menu-series' onClick={() => navigate('/tv')}>
        series
      </button>
    </nav>
  );
}
