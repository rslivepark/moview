import React from 'react';
import { usePopularMovieQuery } from '../../hooks/usePopularMovie';
import MediaListDisplay from '../components/MediaListDisplay';

export default function PopularList({ title }) {
  const { data, isLoading, isError, error } = usePopularMovieQuery();

  // console.log('usePopularMovieQuery', data);

  return (
    <div className='PopularList'>
      <MediaListDisplay title={title} dataKey={data} isMovie={true} />;
    </div>
  );
}
