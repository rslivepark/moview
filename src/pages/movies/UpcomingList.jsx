import React from 'react';
import { useUpcomingMovieQuery } from '../../hooks/useUpcomingMovie';
import MediaListDisplay from '../components/MediaListDisplay';

export default function UpcomingList({ title }) {
  const { data, isLoading, isError, error } = useUpcomingMovieQuery();
  return (
    <div className='UpcomingList'>
      <MediaListDisplay title={title} dataKey={data} isMovie={true} />
    </div>
  );
}
