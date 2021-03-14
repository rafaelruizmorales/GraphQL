import gql from 'graphql-tag';

export const SINGLE_SEARCH_QUERY = gql`
  query($searchInput: String!) {
    show(search: $searchInput)
      @rest(type: "People", path: "singlesearch/shows?q=:search") {
      id @export(as: "showId")
      name
      seasons @rest(type: "Season", path: "shows/:showId/seasons") {
        number
        image
        summary
      }
    }
  }
`;