import React from 'react';
import { useTopRatedTVQuery } from '../../hooks/useTopRatedSeries';

export default function TVTopRatedList({ title }) {
  const { data, isLoading, isError, error } = useTopRatedTVQuery();
  return (
    <div className='TVTopRatedList'>
      <h1>{title}</h1>
      <ul style={{ height: '200px', overflowY: 'auto' }}>
        {data?.results?.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.first_air_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
