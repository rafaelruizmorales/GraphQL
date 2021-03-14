import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { RestLink } from 'apollo-link-rest';
import SearchShow from './components/SearchShow';
import './App.css';

const restLink = new RestLink({
  uri: 'https://api.tvmaze.com/',
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Apollo Rest Link Example</h1>
      </header>
      <SearchShow />
    </div>
  );
}

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;