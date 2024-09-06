import React from 'react';

const MediaListDisplay = ({ title, dataKey, isMovie, isTv }) => {
  // console.log('media list display', dataKey);
  return (
    <>
      <h1>{title}</h1>
      <ul style={{ height: '200px', overflowY: 'auto' }}>
        {dataKey?.results?.map((item, index) => (
          <li key={index}>
            <h3>{isMovie ? item.title : item.name}</h3>
            <p>{isMovie ? item.release_date : item.first_air_date}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MediaListDisplay;
