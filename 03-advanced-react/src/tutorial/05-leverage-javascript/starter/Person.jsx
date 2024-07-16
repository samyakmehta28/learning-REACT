import React from 'react';
export function Person({ person }) {
  const { name, nickName, images } = person;
  const url = images?.[0]?.small?.url ?? 'https://via.placeholder.com/150';
  return (
    <div>
      <img src={url} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>NickName: {nickName || 'N/A'}</p>
    </div>
  );
}
