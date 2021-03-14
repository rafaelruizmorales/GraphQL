import React from 'react'

const Launch = ({ launch: { flight_number, mission_name, launch_date_local, launch_success, rocket } }) => {
  
  const cardType = launch_success ? 'bg-success' : 'bg-danger';

  return (
    <div className={`card ${cardType} text-white mb-3`}>
      <div className="card-header">Fligh Number: {flight_number}</div>
      <div className="card-body">
        <h4 className="card-title">Rocket <em>{rocket.rocket_name}</em> on mission <strong>{mission_name}</strong></h4>
        <p className="card-text">{launch_date_local}</p>
      </div>
    </div>
  )
}

export default Launch;
