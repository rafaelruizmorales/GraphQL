import ShowsResult from './ShowResult';

import { graphql } from 'react-apollo';
import { SINGLE_SEARCH_QUERY } from '../graphQL/queries'

const ShowsResultQuery = graphql(SINGLE_SEARCH_QUERY, {
    options: ({ searchInput }) => {
      return { variables: { searchInput } };
    },
  })(ShowsResult);

export default ShowsResultQuery;