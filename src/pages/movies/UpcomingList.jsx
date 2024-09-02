import React from 'react';
import { useUpcomingMovieQuery } from '../../hooks/useUpcomingMovie';

export default function UpcomingList({ title }) {
  const { data, isLoading, isError, error } = useUpcomingMovieQuery();
  return (
    <div className='UpcomingList'>
      <h1>{title}</h1>
      <ul style={{ height: '200px', overflowY: 'auto' }}>
        {data?.results?.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
