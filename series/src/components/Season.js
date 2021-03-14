import React from 'react';

const Season = ({ summary, number, image }) => (
    <div>
        <h2>{`Season ${number}`}</h2>
        {image && <img src={image.medium} alt={summary} />}
        <h3>Sumary:</h3>
        <div dangerouslySetInnerHTML={{ __html: summary }} />        
    </div>
);

export default Season;