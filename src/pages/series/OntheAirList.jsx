import React from 'react';
import { useOnAirQuery } from '../../hooks/useOnTheAir';

export default function OntheAirList({ title }) {
  const { data, isLoading, isError, error } = useOnAirQuery();
  // console.log(data);
  return (
    <div className='OntheAirList'>
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
