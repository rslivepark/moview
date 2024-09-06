import React from 'react';
import { usePopularTVQuery } from '../../hooks/usePopularTV';
import MediaListDisplay from '../components/MediaListDisplay';

export default function TVPopularList({ title }) {
  const { data, isLoading, isError, error } = usePopularTVQuery();
  console.log('TVPopularList', data);
  return (
    <div className='TVPopularList'>
      <MediaListDisplay title={title} dataKey={data} isTv={true} />
    </div>
  );
}
