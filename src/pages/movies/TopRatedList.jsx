import React from 'react';
import { useTopRatedMovieQuery } from '../../hooks/useTopRatedMovie';

export default function TopRatedList({ title }) {
  const { data, isLoading, isError, error } = useTopRatedMovieQuery();
  return (
    <div className='TopRatedList'>
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
