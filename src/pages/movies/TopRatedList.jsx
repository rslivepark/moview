import React from 'react';
import { useTopRatedMovieQuery } from '../../hooks/useTopRatedMovie';
import MediaListDisplay from '../components/MediaListDisplay';

export default function TopRatedList({ title }) {
  const { data, isLoading, isError, error } = useTopRatedMovieQuery();
  return (
    <div className='TopRatedList'>
      <MediaListDisplay title={title} dataKey={data} isMovie={true} />
    </div>
  );
}
