import React from 'react';
import { usePopularTVQuery } from '../../hooks/usePopularTV';

export default function TVPopularList({ title }) {
  const { data, isLoading, isError, error } = usePopularTVQuery();
  // console.log(data);
  return (
    <div className='TVPopularList'>
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
