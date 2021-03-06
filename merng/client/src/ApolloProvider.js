import React from 'react';

import { 
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider  
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { setContext } from "apollo-link-context";

import App from './App';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
});

const authLink = setContext(() => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('jwtToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    
);