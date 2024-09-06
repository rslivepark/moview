import React from 'react';
import PopularList from './movies/PopularList';
import TopRatedList from './movies/TopRatedList';
import UpcomingList from './movies/UpcomingList';
import OntheAirList from './series/OntheAirList';
import TVTopRatedList from './series/TVTopRatedList';
import TVPopularList from './series/TVPopularList';

export default function MediaList() {
  return (
    <div className='MediaList'>
      <PopularList title={'🎬 Popular Movie'} />
      <TVPopularList title={'📺 Popular TV'} />
      <TopRatedList title={'🎬 Top Rated Movie'} />
      <UpcomingList title={'🎬 Upcoming'} />
      <OntheAirList title={'📺 On The Air'} />
      <TVTopRatedList title={'🔥 Hot TV Shows'} />
    </div>
  );
}
