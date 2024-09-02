import React from 'react';
import HomeBanner from './components/HomeBanner';
import MediaList from './MediaList';

export default function HomeMovie() {
  return (
    <div className='HomeMovie'>
      <HomeBanner />
      <MediaList />
    </div>
  );
}

// 홈페이지 접속시 보이는 처음화면
// HomeBanner, MovieList 필요함
