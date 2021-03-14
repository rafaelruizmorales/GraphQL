import React from 'react';

import Season from './Season'

const ShowsResult = ({ data: { loading, error, show } }) => {

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>{error.message}</h4>;
  }
  if (show) {
    return (
      <div>
        <h1>{show.name}</h1>
        {show.seasons.map(({ number, image, summary }) => (
          <Season
            key={number}
            number={number}
            image={image}
            summary={summary}
          />
        ))}
      </div>
    );
  } else {
    return <p>No shows available with that name...</p>
  }
}

export default ShowsResult;