import React from 'react'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Launch from './Launch'

const Launches = () => {

  const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      rocket {
        rocket_name
      }
    }
  }
`;
    return (
      <div>
        <h2>Launches</h2>
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if(loading) return <h3>Loading...</h3>;
              if(error) console.log(error);
              
              return (
                <>
                  {
                    data.launches.map(launch => (
                      <Launch key={launch.flight_number} launch={launch} />
                    ))
                  }
                </>
              )
            }
          }
        </Query>
      </div>
    );
}

export default Launches;
