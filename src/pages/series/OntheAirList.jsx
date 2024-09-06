import React from 'react';
import { useOnAirQuery } from '../../hooks/useOnTheAir';
import MediaListDisplay from '../components/MediaListDisplay';

export default function OntheAirList({ title }) {
  const { data, isLoading, isError, error } = useOnAirQuery();
  console.log('OntheAirList', data);
  return (
    <div className='OntheAirList'>
      <MediaListDisplay title={title} dataKey={data} isTv={true} />
    </div>
  );
}
