import React from 'react';
import { usePopularMovieQuery } from '../../hooks/usePopularMovie';

export default function PopularList({ title }) {
  const { data, isLoading, isError, error } = usePopularMovieQuery();

  // console.log(data);

  return (
    <div className='PopularList'>
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
