import React from 'react';
import { useTopRatedTVQuery } from '../../hooks/useTopRatedSeries';
import MediaListDisplay from '../components/MediaListDisplay';

export default function TVTopRatedList({ title }) {
  const { data, isLoading, isError, error } = useTopRatedTVQuery();
  console.log('TVTopRatedList', data);
  return (
    <div className='TVTopRatedList'>
      <MediaListDisplay title={title} dataKey={data} isTv={true} />
    </div>
  );
}
